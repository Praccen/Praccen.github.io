"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const Vec3_1 = require("../Maths/Vec3");
class DirectionalLight {
    constructor(gl, shaderProgram) {
        gl = gl;
        this.shaderProgram = shaderProgram;
        this.direction = new Vec3_1.default([0.0, -1.0, -0.5]);
        this.colour = new Vec3_1.default([0.2, 0.2, 0.2]);
        this.ambientMultiplier = 0.1;
        this.lightProjectionBoxSideLength = 50.0;
    }
    bind() {
        main_1.gl.uniform3fv(this.shaderProgram.getUniformLocation("directionalLight.direction")[0], this.direction.normalize());
        main_1.gl.uniform3fv(this.shaderProgram.getUniformLocation("directionalLight.colour")[0], this.colour);
        main_1.gl.uniform1f(this.shaderProgram.getUniformLocation("directionalLight.ambientMultiplier")[0], this.ambientMultiplier);
    }
    calcAndSendLightSpaceMatrix(focusPos, offset, uniformLocation) {
        let cameraPos = new Vec3_1.default(focusPos);
        let offsetVec = new Vec3_1.default(this.direction).normalize().multiply(offset);
        let lightSpaceMatrix = new Matrix4(null).setOrtho(-this.lightProjectionBoxSideLength, this.lightProjectionBoxSideLength, -this.lightProjectionBoxSideLength, this.lightProjectionBoxSideLength, 0.1, offset * 2.0); // Start by setting it to projection
        cameraPos.subtract(offsetVec);
        let lightView = new Matrix4(null).setLookAt(cameraPos.x, cameraPos.y, cameraPos.z, focusPos.x, focusPos.y, focusPos.z, 0.0, 1.0, 0.0); // This will make it impossible to have exactly straight down shadows, but I'm fine with that
        lightSpaceMatrix = lightSpaceMatrix.concat(lightView); // Multiply with view
        main_1.gl.uniformMatrix4fv(uniformLocation, false, lightSpaceMatrix.elements);
    }
}
exports.default = DirectionalLight;
//# sourceMappingURL=DirectionalLight.js.map