"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MousePicking = void 0;
const GameMachine_1 = require("../../Game/GameMachine");
const main_1 = require("../../main");
const Ray_1 = require("../Physics/Shapes/Ray");
const Vec2_1 = require("./Vec2");
const Vec3_1 = require("./Vec3");
var MousePicking;
(function (MousePicking) {
    function GetRay(camera) {
        let ndc = new Vec2_1.default([
            GameMachine_1.input.mousePositionOnCanvas.x,
            GameMachine_1.input.mousePositionOnCanvas.y,
        ]);
        ndc.x = (ndc.x / main_1.windowInfo.resolutionWidth - 0.5) * 2.0;
        ndc.y = (ndc.y / main_1.windowInfo.resolutionHeight - 0.5) * -2.0;
        let mouseRayClip = new Vector4([ndc.x, ndc.y, -1.0, 1.0]);
        let mouseRayCamera = new Matrix4(camera.getProjectionMatrix())
            .invert()
            .multiplyVector4(mouseRayClip);
        mouseRayCamera.elements[2] = -1.0;
        mouseRayCamera.elements[3] = 0.0;
        let mouseRayWorld4D = new Matrix4(camera.getViewMatrix())
            .invert()
            .multiplyVector4(mouseRayCamera);
        let dir = new Vec3_1.default([
            mouseRayWorld4D.elements[0],
            mouseRayWorld4D.elements[1],
            mouseRayWorld4D.elements[2],
        ]).normalize();
        let ray = new Ray_1.default();
        ray.setDir(dir);
        ray.setStart(camera.getPosition());
        return ray;
    }
    MousePicking.GetRay = GetRay;
})(MousePicking = exports.MousePicking || (exports.MousePicking = {}));
//# sourceMappingURL=MousePicking.js.map