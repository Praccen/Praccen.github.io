"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vec2_1 = require("../Maths/Vec2");
const Vec3_1 = require("../Maths/Vec3");
const GeometryPass_1 = require("../ShaderPrograms/DeferredRendering/GeometryPass");
const Heightmap_1 = require("../Objects/Heightmap");
const Mesh_1 = require("../Objects/Mesh");
const Octree_1 = require("../Objects/Octree");
const WebUtils_1 = require("../Utils/WebUtils");
class MeshStore {
    constructor() {
        this.meshMap = new Map();
        this.heightmapMap = new Map();
        this.octreeMap = new Map();
    }
    getMesh(path, printWarnings = true) {
        let mesh = this.meshMap.get(path);
        if (mesh) {
            return mesh;
        }
        if (printWarnings) {
            console.warn("Trying to get mesh " + path + " before loading it");
        }
        return null;
    }
    loadMesh(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let mesh = this.meshMap.get(path);
            if (mesh) {
                return mesh;
            }
            let newVertices = yield this.parseObjContent(path);
            this.meshMap.set(path, new Mesh_1.default(GeometryPass_1.geometryPass, newVertices));
            return this.meshMap.get(path);
        });
    }
    getHeightmap(path, printWarnings = true) {
        let heightmap = this.heightmapMap.get(path);
        if (heightmap) {
            return heightmap;
        }
        if (printWarnings) {
            console.warn("Trying to get heightmap " + path + " before loading it");
        }
        return null;
    }
    loadHeightmap(path, useTextureSizeForResolution = true, x = 2, y = 2, sizePerX = 1.0, sizePerY = 1.0) {
        return __awaiter(this, void 0, void 0, function* () {
            let heightmap = this.heightmapMap.get(path);
            if (heightmap) {
                return heightmap;
            }
            let newHeightmap = new Heightmap_1.default(GeometryPass_1.geometryPass);
            if (!useTextureSizeForResolution) {
                newHeightmap.createPlane(x, y, sizePerX, sizePerY);
            }
            yield newHeightmap.readHeightDataFromTexture(path, useTextureSizeForResolution);
            this.heightmapMap.set(path, newHeightmap);
            return newHeightmap;
        });
    }
    getOctree(path, printWarnings = true) {
        let octree = this.octreeMap.get(path);
        if (octree && octree.triangles.length == 0) {
            return octree.octree;
        }
        if (printWarnings) {
            console.warn("Trying to get octree " + path + " before loading it");
        }
        return null;
    }
    loadOctree(path, smallestOctreeNodeSizeMultiplicator, maxShapesPerOctreeNode, timeLimit = Infinity) {
        return __awaiter(this, void 0, void 0, function* () {
            let startTime = Date.now();
            let octree = this.octreeMap.get(path);
            if (octree && octree.triangles.length == 0) {
                return { octree: octree.octree, doneLoading: true };
            }
            if (octree == undefined) {
                // Immediately make it defined, but with no content, to only do the initialization once
                this.octreeMap.set(path, {
                    octree: null,
                    triangles: null,
                });
                octree = this.octreeMap.get(path);
                let triangles = new Array();
                if (path.endsWith(".obj")) {
                    let mesh = this.getMesh(path, false);
                    if (!mesh) {
                        console.warn("Trying to get octree for " + path + " before loading " + path);
                        return null;
                    }
                    mesh.setupTriangles(triangles);
                }
                else {
                    let heightmap = this.getHeightmap(path, false);
                    if (!heightmap) {
                        console.warn("Trying to get octree for " + path + " before loading " + path);
                        return null;
                    }
                    heightmap.setupTriangles(triangles);
                }
                octree.triangles = triangles;
                let octPath = "Assets/octrees/" + path.split("/").pop().split(".")[0] + ".oct";
                const response = yield fetch(octPath);
                if (response.ok) {
                    console.log("Loaded octree from " + octPath);
                    const octContent = yield response.text();
                    octree.octree = new Octree_1.default(new Vec3_1.default(), new Vec3_1.default(), smallestOctreeNodeSizeMultiplicator, maxShapesPerOctreeNode);
                    octree.octree.parseOct(octContent);
                    octree.triangles.length = 0;
                }
                else {
                    console.log("Did not find an octree to load from " +
                        octPath +
                        ". Generating it from scratch.");
                    let minVec = new Vec3_1.default([Infinity, Infinity, Infinity]);
                    let maxVec = new Vec3_1.default([-Infinity, -Infinity, -Infinity]);
                    for (let tri of triangles) {
                        for (let vertex of tri.getTransformedVertices()) {
                            maxVec.max(vertex);
                            minVec.min(vertex);
                        }
                    }
                    octree.octree = new Octree_1.default(minVec, maxVec, smallestOctreeNodeSizeMultiplicator, maxShapesPerOctreeNode);
                }
            }
            while (octree.octree != undefined &&
                octree.triangles != undefined &&
                octree.triangles.length > 0 &&
                Date.now() - startTime < timeLimit) {
                octree.octree.addShape(octree.triangles.pop());
            }
            if (octree.triangles != undefined && octree.triangles.length == 0) {
                octree.octree.prune();
                // console.groupCollapsed("octree for " + path);
                // octree.octree.print();
                // console.groupEnd();
            }
            return {
                octree: octree.octree,
                doneLoading: octree.triangles != undefined && octree.triangles.length == 0,
            };
        });
    }
    downloadOctrees() {
        for (let octree of this.octreeMap) {
            let data = octree[1].octree.getDataString();
            WebUtils_1.WebUtils.DownloadFile(octree[0].split("/").pop().split(".")[0] + ".oct", data);
        }
    }
    parseObjContent(meshPath) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
            https://webglfundamentals.org/webgl/lessons/webgl-load-obj.html
            */
            const response = yield fetch(meshPath);
            const objContent = yield response.text();
            const lines = objContent.split("\n");
            let vertexPositions = new Array();
            let vertexTexCoords = new Array();
            let vertexNormals = new Array();
            let vertices = new Array();
            for (let line of lines) {
                line = line.trim();
                if (line.startsWith("vt")) {
                    // Texture coordinates
                    const coords = line.split(/\s+/).filter((element) => {
                        return element != "vt";
                    });
                    vertexTexCoords.push(new Vec2_1.default([parseFloat(coords[0]), parseFloat(coords[1])]));
                }
                else if (line.startsWith("vn")) {
                    // Normal
                    const coords = line.split(/\s+/).filter((element) => {
                        return element != "vn";
                    });
                    vertexNormals.push(new Vec3_1.default([
                        parseFloat(coords[0]),
                        parseFloat(coords[1]),
                        parseFloat(coords[2]),
                    ]));
                }
                else if (line.startsWith("v")) {
                    // Position
                    const coords = line.split(/\s+/).filter((element) => {
                        return element != "v";
                    });
                    vertexPositions.push(new Vec3_1.default([
                        parseFloat(coords[0]),
                        parseFloat(coords[1]),
                        parseFloat(coords[2]),
                    ]));
                }
                else if (line.startsWith("f")) {
                    // Faces
                    const coords = line.split(/\s+/).filter((element) => {
                        return element != "f";
                    });
                    for (let i = 0; i < coords.length - 2; i++) {
                        for (let j = 0; j < 3; j++) {
                            let index = j == 0 ? 0 : i + j; // 0 if j is zero, otherwize i +j
                            const indices = coords[index].split("/");
                            const last = vertices.push({
                                posIndex: NaN,
                                texCoordIndex: NaN,
                                normalIndex: NaN,
                            });
                            if (indices.length > 0) {
                                vertices[last - 1].posIndex = parseInt(indices[0]) - 1;
                            }
                            if (indices.length > 1) {
                                vertices[last - 1].texCoordIndex = parseInt(indices[1]) - 1; // Can be empty, texCoordIndex will then be NaN
                            }
                            if (indices.length > 2) {
                                vertices[last - 1].normalIndex = parseInt(indices[2]) - 1;
                            }
                        }
                    }
                }
                else if (line.startsWith("#")) {
                    // A comment, ignore
                }
                else if (line.length > 0) {
                    // Unhandled keywords
                    // console.warn("OBJ loader: Unhandled keyword " + line.split(/\s+/)[0]);
                }
            }
            let returnArr = new Float32Array(vertices.length * 8); // 3 * pos + 3 * norm + 2 * tx
            for (let i = 0; i < vertices.length; i++) {
                if (!isNaN(vertices[i].posIndex)) {
                    returnArr[i * 8] = vertexPositions[vertices[i].posIndex].x;
                    returnArr[i * 8 + 1] = vertexPositions[vertices[i].posIndex].y;
                    returnArr[i * 8 + 2] = vertexPositions[vertices[i].posIndex].z;
                }
                else {
                    returnArr[i * 8] = 0.0;
                    returnArr[i * 8 + 1] = 0.0;
                    returnArr[i * 8 + 2] = 0.0;
                }
                if (!isNaN(vertices[i].normalIndex)) {
                    returnArr[i * 8 + 3] = vertexNormals[vertices[i].normalIndex].x;
                    returnArr[i * 8 + 4] = vertexNormals[vertices[i].normalIndex].y;
                    returnArr[i * 8 + 5] = vertexNormals[vertices[i].normalIndex].z;
                }
                else {
                    returnArr[i * 8 + 3] = 1.0;
                    returnArr[i * 8 + 4] = 0.0;
                    returnArr[i * 8 + 5] = 0.0;
                }
                if (!isNaN(vertices[i].texCoordIndex)) {
                    returnArr[i * 8 + 6] = vertexTexCoords[vertices[i].texCoordIndex].x;
                    returnArr[i * 8 + 7] = vertexTexCoords[vertices[i].texCoordIndex].y;
                }
                else {
                    returnArr[i * 8 + 6] = 0.0;
                    returnArr[i * 8 + 7] = 0.0;
                }
            }
            return returnArr;
        });
    }
}
exports.default = MeshStore;
//# sourceMappingURL=MeshStore.js.map