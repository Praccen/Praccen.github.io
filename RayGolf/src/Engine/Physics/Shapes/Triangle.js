"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec3_1 = require("../../Maths/Vec3");
const Shape_1 = require("./Shape");
class Triangle extends Shape_1.default {
    constructor() {
        super();
        this.originalVertices = new Array();
        this.originalNormal = new Vec3_1.default();
        this.transformedVertices = new Array();
        this.transformedNormals = new Array(1);
        this.transformedEdges = new Array();
        this.transformedEdgeNormals = new Array();
        this.transformMatrix = new Matrix4(null);
        this.verticesNeedsUpdate = false;
        this.normalNeedsUpdate = false;
        this.edgesNeedsUpdate = false;
        this.edgeNormalsNeedsUpdate = false;
    }
    setVertices(vertex1, vertex2, vertex3) {
        this.originalVertices.length = 0;
        this.transformedEdges.length = 0;
        this.originalVertices.push(vertex1);
        this.originalVertices.push(vertex2);
        this.originalVertices.push(vertex3);
        this.originalNormal.deepAssign(new Vec3_1.default(vertex1)
            .subtract(vertex2)
            .cross(new Vec3_1.default(vertex3).subtract(vertex2))
            .normalize());
        this.verticesNeedsUpdate = true;
        this.normalNeedsUpdate = true;
        this.edgesNeedsUpdate = true;
        this.edgeNormalsNeedsUpdate = true;
    }
    setUpdateNeeded() {
        this.verticesNeedsUpdate = true;
        this.normalNeedsUpdate = true;
        this.edgesNeedsUpdate = true;
        this.edgeNormalsNeedsUpdate = true;
    }
    setTransformMatrix(matrix) {
        this.transformMatrix = matrix;
        this.verticesNeedsUpdate = true;
        this.normalNeedsUpdate = true;
        this.edgesNeedsUpdate = true;
        this.edgeNormalsNeedsUpdate = true;
    }
    getOriginalVertices() {
        return this.originalVertices;
    }
    getTransformedVertices() {
        if (this.verticesNeedsUpdate) {
            this.transformedVertices.length = 0;
            for (const originalVertex of this.originalVertices) {
                let transformedVertex = this.transformMatrix.multiplyVector4(new Vector4([...originalVertex, 1.0]));
                let transformedVertexVec3 = new Vec3_1.default([
                    transformedVertex.elements[0],
                    transformedVertex.elements[1],
                    transformedVertex.elements[2],
                ]);
                this.transformedVertices.push(transformedVertexVec3);
            }
            this.verticesNeedsUpdate = false;
        }
        return this.transformedVertices;
    }
    getTransformedNormals() {
        if (this.normalNeedsUpdate) {
            this.transformedNormals.length = 0;
            this.getTransformedVertices();
            this.transformedNormals.push(new Vec3_1.default(this.transformedVertices[0])
                .subtract(this.transformedVertices[1])
                .cross(new Vec3_1.default(this.transformedVertices[2]).subtract(this.transformedVertices[1]))
                .normalize());
            // let tempMatrix = new Matrix3();
            // tempMatrix.fromMatrix4(this.transformMatrix).invert().transpose();
            // this.transformedNormals.length = 0;
            // this.transformedNormals.push(tempMatrix
            // 	.multiplyVec3(this.originalNormal)
            // 	.normalize());
            // NO IDEA WHY THIS IS NEEDED BUT IT IS :(
            this.transformedNormals[0].x *= -1.0;
            this.transformedNormals[0].z *= -1.0;
            this.normalNeedsUpdate = false;
        }
        return this.transformedNormals;
    }
    getTransformedEdges() {
        if (this.edgesNeedsUpdate) {
            this.getTransformedVertices(); // Force update of vertices
            this.transformedEdges.length = 0;
            this.transformedEdges.push(new Vec3_1.default(this.transformedVertices[1])
                .subtract(this.transformedVertices[0])
                .normalize());
            this.transformedEdges.push(new Vec3_1.default(this.transformedVertices[2])
                .subtract(this.transformedVertices[1])
                .normalize());
            this.transformedEdges.push(new Vec3_1.default(this.transformedVertices[0])
                .subtract(this.transformedVertices[2])
                .normalize());
            this.edgesNeedsUpdate = false;
        }
        return this.transformedEdges;
    }
    getTransformedEdgeNormals() {
        if (this.edgeNormalsNeedsUpdate) {
            this.getTransformedEdges(); // Force update of edges
            this.getTransformedNormals(); // Force update of normal
            this.transformedEdgeNormals.length = 0;
            this.transformedEdgeNormals.push(new Vec3_1.default(this.transformedEdges[0])
                .cross(this.transformedNormals[0])
                .normalize());
            this.transformedEdgeNormals.push(new Vec3_1.default(this.transformedEdges[1])
                .cross(this.transformedNormals[0])
                .normalize());
            this.transformedEdgeNormals.push(new Vec3_1.default(this.transformedEdges[2])
                .cross(this.transformedNormals[0])
                .normalize());
            this.edgeNormalsNeedsUpdate = false;
        }
        return this.transformedEdgeNormals;
    }
}
exports.default = Triangle;
//# sourceMappingURL=Triangle.js.map