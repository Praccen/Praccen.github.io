"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const System_1 = require("./System");
const Component_1 = require("../Components/Component");
const Vec3_1 = require("../../Maths/Vec3");
class MovementSystem extends System_1.default {
    constructor() {
        super([Component_1.ComponentTypeEnum.POSITION, Component_1.ComponentTypeEnum.MOVEMENT]);
    }
    update(dt) {
        for (const e of this.entities) {
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
            if (posComp == undefined) {
                posComp = e.getComponent(Component_1.ComponentTypeEnum.POSITION);
            }
            let movComp = (e.getComponent(Component_1.ComponentTypeEnum.MOVEMENT));
            let oldVel = new Vec3_1.default(movComp.velocity);
            // Do movement calculations
            movComp.velocity.add(new Vec3_1.default(movComp.accelerationDirection).multiply(movComp.acceleration * dt));
            movComp.velocity.add(new Vec3_1.default(movComp.constantAcceleration).multiply(dt));
            movComp.jumpAllowed = movComp.jumpAllowed || movComp.onGround;
            if (movComp.jumpAllowed && movComp.jumpRequested) {
                movComp.velocity.y = movComp.jumpPower;
                movComp.onGround = false;
                movComp.jumpRequested = false;
                movComp.jumpAllowed = false;
            }
            //Drag
            let dragVec = new Vec3_1.default(movComp.velocity).multiply(-1.0);
            dragVec.y = 0.0;
            let magnitude = dragVec.len();
            movComp.velocity.add(dragVec.normalize().multiply(Math.min(movComp.drag * dt, magnitude)));
            //stop if velocity is too slow
            const accelerating = movComp.accelerationDirection.x != 0.0 ||
                movComp.accelerationDirection.z != 0.0;
            if (!accelerating && movComp.velocity.length2() < 0.001) {
                movComp.velocity.multiply(0.0);
            }
            let displacement = new Vec3_1.default(movComp.velocity)
                .add(oldVel)
                .multiply(0.5 * dt);
            if (Math.abs(displacement.x) > 0.001) {
                posComp.position.x += displacement.x;
            }
            if (Math.abs(displacement.y) > 0.001) {
                posComp.position.y += displacement.y;
            }
            if (Math.abs(displacement.z) > 0.001) {
                posComp.position.z += displacement.z;
            }
            movComp.accelerationDirection.multiply(0.0);
        }
    }
}
exports.default = MovementSystem;
//# sourceMappingURL=MovementSystem.js.map