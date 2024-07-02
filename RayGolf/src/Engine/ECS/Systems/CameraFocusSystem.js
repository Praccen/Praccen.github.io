"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const System_1 = require("./System");
const Component_1 = require("../Components/Component");
const Vec3_1 = require("../../Maths/Vec3");
class CameraFocusSystem extends System_1.default {
    constructor(camera) {
        super([Component_1.ComponentTypeEnum.POSITION, Component_1.ComponentTypeEnum.CAMERAFOCUS]);
        this.camera = camera;
    }
    update(dt) {
        for (const e of this.entities) {
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
            if (!posComp) {
                posComp = e.getComponent(Component_1.ComponentTypeEnum.POSITION);
            }
            let camFocusComp = (e.getComponent(Component_1.ComponentTypeEnum.CAMERAFOCUS));
            let camPos = new Vec3_1.default(posComp.position);
            camPos.add(camFocusComp.offset);
            this.camera.setPosition(camPos.x, camPos.y, camPos.z);
            this.camera.setDir(-camFocusComp.offset.x, -camFocusComp.offset.y, -camFocusComp.offset.z);
        }
    }
}
exports.default = CameraFocusSystem;
//# sourceMappingURL=CameraFocusSystem.js.map