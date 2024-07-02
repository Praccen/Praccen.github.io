"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BoundingBoxComponent_1 = require("../Engine/ECS/Components/BoundingBoxComponent");
const CollisionComponent_1 = require("../Engine/ECS/Components/CollisionComponent");
const Component_1 = require("../Engine/ECS/Components/Component");
const GraphicsComponent_1 = require("../Engine/ECS/Components/GraphicsComponent");
const MovementComponent_1 = require("../Engine/ECS/Components/MovementComponent");
const PositionComponent_1 = require("../Engine/ECS/Components/PositionComponent");
const Vec3_1 = require("../Engine/Maths/Vec3");
class Newspaper {
    constructor(startingPos, startingVel, startingRot, ecsManager, scene) {
        this.ecsManager = ecsManager;
        this.scene = scene;
        this.entity = this.ecsManager.createEntity();
        let posComp = new PositionComponent_1.default();
        posComp.position = new Vec3_1.default(startingPos);
        posComp.rotation = new Vec3_1.default(startingRot);
        posComp.scale.setValues(0.2, 0.2, 0.2);
        this.ecsManager.addComponent(this.entity, posComp);
        let moveComp = new MovementComponent_1.default();
        moveComp.velocity = startingVel;
        this.ecsManager.addComponent(this.entity, moveComp);
        let paperMesh = this.scene.getNewMesh("Assets/objs/newspaper.obj", "Assets/textures/news.png", "Assets/textures/black.png");
        let boundingBoxComp = new BoundingBoxComponent_1.default();
        boundingBoxComp.setup(paperMesh.graphicsObject);
        boundingBoxComp.updateTransformMatrix(paperMesh.modelMatrix);
        this.ecsManager.addComponent(this.entity, boundingBoxComp);
        let graComp = new GraphicsComponent_1.default(paperMesh);
        this.ecsManager.addComponent(this.entity, graComp);
        this.ecsManager.addComponent(this.entity, new CollisionComponent_1.default());
    }
    update(dt) {
        let moveComp = (this.entity.getComponent(Component_1.ComponentTypeEnum.MOVEMENT));
        if (moveComp.onGround) {
            moveComp.drag = 18;
        }
        else {
            moveComp.drag = 1;
        }
        let posComp = (this.entity.getComponent(Component_1.ComponentTypeEnum.POSITION));
        if ((moveComp.velocity.length2() <= 0.01 && moveComp.onGround) || (posComp != undefined && posComp.position.y < -10.0)) {
            this.ecsManager.removeComponent(this.entity, Component_1.ComponentTypeEnum.MOVEMENT);
            this.ecsManager.removeComponent(this.entity, Component_1.ComponentTypeEnum.COLLISION);
            this.ecsManager.removeComponent(this.entity, Component_1.ComponentTypeEnum.BOUNDINGBOX);
            return false;
        }
        else {
            return true;
        }
    }
}
exports.default = Newspaper;
//# sourceMappingURL=Newspaper.js.map