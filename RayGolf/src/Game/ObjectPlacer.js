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
const BoundingBoxComponent_1 = require("../Engine/ECS/Components/BoundingBoxComponent");
const CollisionComponent_1 = require("../Engine/ECS/Components/CollisionComponent");
const Component_1 = require("../Engine/ECS/Components/Component");
const GraphicsComponent_1 = require("../Engine/ECS/Components/GraphicsComponent");
const MeshCollisionComponent_1 = require("../Engine/ECS/Components/MeshCollisionComponent");
const PositionComponent_1 = require("../Engine/ECS/Components/PositionComponent");
const Vec3_1 = require("../Engine/Maths/Vec3");
const IntersectionTester_1 = require("../Engine/Physics/IntersectionTester");
const WebUtils_1 = require("../Engine/Utils/WebUtils");
const DeliveryZoneComponent_1 = require("./ECS/Components/DeliveryZoneComponent");
const Game_1 = require("./States/Game");
class Transform {
    constructor(pos, size, rot) {
        this.pos = pos;
        this.size = size;
        this.rot = rot;
        this.entity = null;
    }
}
class Placement {
    constructor(modelPath, placementPath, diffuseTexturePath, specularTexturePath, addCollision = true) {
        this.modelPath = modelPath;
        this.placementsPath = placementPath;
        this.diffuseTexturePath = diffuseTexturePath;
        this.specularTexturePath = specularTexturePath;
        this.transforms = new Array();
        this.addCollision = addCollision;
        this.transformAdded = false;
    }
    loadFromFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("Assets/placements/" + this.placementsPath);
            if (response.ok) {
                const transforms = yield response.text();
                if (transforms != "") {
                    for (let t of transforms.split("\n")) {
                        t = t.trim();
                        if (t == "") {
                            break;
                        }
                        let [p, s, r] = t.split("|");
                        let temp = new Transform(new Vec3_1.default(p.split(",").map((n) => parseFloat(n))), parseFloat(s), new Vec3_1.default(r.split(",").map((n) => parseFloat(n))));
                        this.transforms.push(temp);
                    }
                }
            }
        });
    }
}
class ObjectPlacer {
    constructor(meshStore) {
        this.meshStore = meshStore;
        this.transformsAdded = false;
        this.placements = new Map();
        this.placements.set("Assets/objs/mailbox.obj", new Placement("Assets/objs/mailbox.obj", "MailboxTransforms.txt", "Assets/textures/mailbox.png", "Assets/textures/mailbox.png"));
        this.placements.set("Assets/objs/tree_1.obj", new Placement("Assets/objs/tree_1.obj", "Tree1Transforms.txt", "Assets/textures/tree_1.png", "Assets/textures/tree_1.png"));
        this.placements.set("Assets/objs/tree_2.obj", new Placement("Assets/objs/tree_2.obj", "Tree2Transforms.txt", "Assets/textures/tree_2.png", "Assets/textures/tree_2.png"));
        this.placements.set("Assets/objs/tree_3.obj", new Placement("Assets/objs/tree_3.obj", "Tree3Transforms.txt", "Assets/textures/tree_3.png", "Assets/textures/tree_3.png"));
        this.placements.set("Assets/objs/house.obj", new Placement("Assets/objs/house.obj", "HouseTransforms.txt", "Assets/textures/houseTex_bright.png", "Assets/textures/houseTex_bright.png"));
        this.placements.set("Assets/objs/newspaper.obj", new Placement("Assets/objs/newspaper.obj", "NewspaperTransforms.txt", "Assets/textures/news.png", "Assets/textures/news.png", false));
        this.placements.set("Assets/objs/fence.obj", new Placement("Assets/objs/fence.obj", "FenceTransforms.txt", "Assets/textures/white.png", "Assets/textures/white.png"));
        this.placements.set("Assets/objs/BigBuske.obj", new Placement("Assets/objs/BigBuske.obj", "BigBuskeTransforms.txt", "Assets/textures/BushTexture.png", "Assets/textures/BushTexture.png"));
        this.placements.set("Assets/objs/Solros.obj", new Placement("Assets/objs/Solros.obj", "SolrosTransforms.txt", "Assets/textures/Solros.png", "Assets/textures/Solros.png", false));
        this.placements.set("Assets/objs/Plant.obj", new Placement("Assets/objs/Plant.obj", "PlantTransforms.txt", "Assets/textures/LeafTexture.png", "Assets/textures/LeafTexture.png", false));
        this.placements.set("Assets/objs/SmolBuske.obj", new Placement("Assets/objs/SmolBuske.obj", "SmolBuskeTransforms.txt", "Assets/textures/BushTexture.png", "Assets/textures/BushTexture.png"));
        this.placements.set("Assets/objs/DeliveryZone.obj", new Placement("Assets/objs/DeliveryZone.obj", "DeliveryZoneTransforms.txt", "Assets/textures/DZ.png", "Assets/textures/DZ.png", false));
        this.currentlyEditingTransform = null;
        this.currentlyEditingPlacement = null;
    }
    load(scene, ecsManager) {
        return __awaiter(this, void 0, void 0, function* () {
            this.scene = scene;
            this.ecsManager = ecsManager;
            this.game = Game_1.default.getInstanceNoSa();
            for (let placement of this.placements) {
                if (placement[1].transforms.length == 0) {
                    yield placement[1].loadFromFile();
                }
                for (let transform of placement[1].transforms) {
                    let entity = this.placeObject(placement[0], transform.pos, transform.size, transform.rot, false);
                    if (entity != undefined) {
                        transform.entity = entity;
                    }
                }
            }
        });
    }
    placeObject(type, position, size, rotation, saveToTransforms = true) {
        let placement = this.placements.get(type);
        if (placement == undefined) {
            return null;
        }
        let entity = this.ecsManager.createEntity();
        let mesh = this.scene.getNewMesh(placement.modelPath, placement.diffuseTexturePath, placement.specularTexturePath);
        let graComp = new GraphicsComponent_1.default(mesh);
        this.ecsManager.addComponent(entity, graComp);
        let posComp = new PositionComponent_1.default();
        posComp.position.deepAssign(position);
        posComp.scale.deepAssign([size, size, size]);
        posComp.rotation.deepAssign(rotation);
        this.ecsManager.addComponent(entity, posComp);
        if (saveToTransforms) {
            let length = placement.transforms.push(new Transform(position, size, rotation));
            placement.transformAdded = true;
            this.transformsAdded = true;
            placement.transforms[length - 1].entity = entity;
            this.currentlyEditingTransform = placement.transforms[length - 1];
            this.currentlyEditingPlacement = placement;
        }
        if (placement.modelPath == "Assets/objs/DeliveryZone.obj") {
            let zoneComp = new DeliveryZoneComponent_1.default();
            this.ecsManager.addComponent(entity, zoneComp);
            graComp.object.baseColor = new Vector3([1, 0, 0]);
            this.game.score += 1;
        }
        let boundingBoxComp = new BoundingBoxComponent_1.default();
        boundingBoxComp.setup(mesh.graphicsObject);
        boundingBoxComp.updateTransformMatrix(mesh.modelMatrix);
        this.ecsManager.addComponent(entity, boundingBoxComp);
        if (!placement.addCollision) {
            return entity;
        }
        // Collision stuff
        let collisionComp = new CollisionComponent_1.default();
        collisionComp.isStatic = true;
        this.ecsManager.addComponent(entity, collisionComp);
        let octree = this.meshStore.getOctree(placement.modelPath, false);
        if (octree == undefined) {
            return entity;
        }
        let meshColComp = new MeshCollisionComponent_1.default(octree);
        meshColComp.octree.setModelMatrix(mesh.modelMatrix);
        this.ecsManager.addComponent(entity, meshColComp);
        return entity;
    }
    rayCastToSelectNewObject(ray) {
        let closest = Infinity;
        for (let placement of this.placements) {
            for (let transform of placement[1].transforms) {
                let bbComp = transform.entity.getComponent(Component_1.ComponentTypeEnum.BOUNDINGBOX);
                if (bbComp == undefined) {
                    continue;
                }
                bbComp.boundingBox.setUpdateNeeded();
                let dist = IntersectionTester_1.IntersectionTester.doRayCast(ray, [bbComp.boundingBox], closest); // Ray cast against bounding box, only caring about hits closer than the previous closest
                if (dist > 0 && dist < closest) { // Boundingbox is closer than current closest hit
                    // Ray cast against mesh if there is one, only caring about hits closer than the previous closest
                    let meshColComp = transform.entity.getComponent(Component_1.ComponentTypeEnum.MESHCOLLISION);
                    if (meshColComp != undefined) {
                        // TODO: This is ugly but works
                        meshColComp.octree.setModelMatrix(bbComp.boundingBox.getTransformMatrix());
                        meshColComp.octree.setModelMatrix();
                        let shapeArray = new Array();
                        meshColComp.octree.getShapesForRayCast(ray, shapeArray, closest);
                        dist = IntersectionTester_1.IntersectionTester.doRayCast(ray, shapeArray, closest);
                    }
                    if (dist > 0 && dist < closest) { // Hit is still closer than current closest
                        // Update the closest information and save the object for editing
                        closest = dist;
                        this.currentlyEditingPlacement = placement[1];
                        this.currentlyEditingTransform = transform;
                    }
                }
            }
        }
    }
    updateCurrentlyEditingObject(rotationChange, scaleChange, newPosition) {
        if (this.currentlyEditingTransform != null) {
            this.currentlyEditingTransform.rot.y += rotationChange;
            this.currentlyEditingTransform.size += scaleChange;
            if (newPosition != undefined) {
                this.currentlyEditingTransform.pos.deepAssign(newPosition);
            }
            let currentlyEditingEntity = this.currentlyEditingTransform.entity;
            if (currentlyEditingEntity != null) {
                let posComp = currentlyEditingEntity.getComponent(Component_1.ComponentTypeEnum.POSITION);
                posComp.rotation.deepAssign(this.currentlyEditingTransform.rot);
                posComp.scale.deepAssign([
                    this.currentlyEditingTransform.size,
                    this.currentlyEditingTransform.size,
                    this.currentlyEditingTransform.size,
                ]);
                posComp.position.deepAssign(this.currentlyEditingTransform.pos);
            }
        }
        if (this.currentlyEditingPlacement != null) {
            this.currentlyEditingPlacement.transformAdded = true;
            this.transformsAdded = true;
        }
    }
    downloadTransforms() {
        for (let placement of this.placements) {
            if (!placement[1].transformAdded) {
                continue;
            }
            let transformsData = "";
            for (let transform of placement[1].transforms) {
                transformsData +=
                    transform.pos + "|" + transform.size + "|" + transform.rot + "\n";
            }
            WebUtils_1.WebUtils.DownloadFile(placement[1].placementsPath, transformsData);
            placement[1].transformAdded = false;
        }
        this.transformsAdded = false;
    }
    onExit(e) {
        if (this.transformsAdded) {
            this.downloadTransforms();
            e.preventDefault();
            e.returnValue = "";
            return;
        }
        delete e["returnValue"];
    }
}
exports.default = ObjectPlacer;
//# sourceMappingURL=ObjectPlacer.js.map