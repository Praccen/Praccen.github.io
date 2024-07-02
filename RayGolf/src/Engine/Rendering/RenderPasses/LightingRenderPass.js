"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const ScreenQuad_1 = require("../../Objects/ScreenQuad");
const LightingPass_1 = require("../../ShaderPrograms/DeferredRendering/LightingPass");
class LightingRenderPass {
    constructor(inputTextures) {
        this.screenQuad = new ScreenQuad_1.default(LightingPass_1.lightingPass, inputTextures);
    }
    setResolution(x, y) {
        this.outputFramebuffer.setProportions(x, y);
    }
    draw(scene, camera) {
        // Disable depth testing for screen quad(s) rendering
        main_1.gl.disable(main_1.gl.DEPTH_TEST);
        // ---- Lighting pass ----
        LightingPass_1.lightingPass.use();
        main_1.gl.uniform3fv(LightingPass_1.lightingPass.getUniformLocation("camPos")[0], camera.getPosition());
        scene.directionalLight.bind();
        scene.directionalLight.calcAndSendLightSpaceMatrix(camera.getPosition(), 20.0, LightingPass_1.lightingPass.getUniformLocation("lightSpaceMatrix")[0]);
        // Point lights
        main_1.gl.uniform1i(LightingPass_1.lightingPass.getUniformLocation("nrOfPointLights")[0], scene.pointLights.length);
        for (let i = 0; i < scene.pointLights.length; i++) {
            scene.pointLights[i].bind(i);
        }
        this.screenQuad.draw(true);
        // -----------------------
        // Enable depth test again
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
    }
}
exports.default = LightingRenderPass;
//# sourceMappingURL=LightingRenderPass.js.map