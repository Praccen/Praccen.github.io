"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const Framebuffer_1 = require("../../Framebuffer");
const GrassShadowPass_1 = require("../../ShaderPrograms/ShadowMapping/GrassShadowPass");
const ShadowPass_1 = require("../../ShaderPrograms/ShadowMapping/ShadowPass");
const Texture_1 = require("../../Textures/Texture");
class ShadowRenderPass {
    // ------------------------
    constructor() {
        // ---- Shadow mapping ----
        this.shadowResolution = 4096;
        this.shadowOffset = 20.0;
        this.shadowBuffer = new Framebuffer_1.default(this.shadowResolution, this.shadowResolution, [], new Texture_1.default(false, main_1.gl.DEPTH_COMPONENT32F, main_1.gl.DEPTH_COMPONENT, main_1.gl.FLOAT));
        // ------------------------
    }
    setShadowMappingResolution(res) {
        this.shadowResolution = res;
        this.shadowBuffer.setProportions(res, res);
    }
    draw(scene, camera) {
        this.shadowBuffer.bind(main_1.gl.FRAMEBUFFER);
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
        // ---- Shadow pass ----
        ShadowPass_1.shadowPass.use();
        main_1.gl.viewport(0, 0, this.shadowResolution, this.shadowResolution);
        main_1.gl.clearColor(1.0, 1.0, 1.0, 1.0);
        main_1.gl.clear(main_1.gl.COLOR_BUFFER_BIT | main_1.gl.DEPTH_BUFFER_BIT);
        //gl.enable(gl.CULL_FACE);
        //gl.cullFace(gl.FRONT);
        //Set uniforms
        scene
            .getDirectionalLight()
            .calcAndSendLightSpaceMatrix(camera.getPosition(), this.shadowOffset, ShadowPass_1.shadowPass.getUniformLocation("lightSpaceMatrix")[0]);
        //Render shadow pass
        scene.renderScene(ShadowPass_1.shadowPass, false);
        // Grass
        GrassShadowPass_1.grassShadowPass.use();
        //Set uniforms
        scene
            .getDirectionalLight()
            .calcAndSendLightSpaceMatrix(camera.getPosition(), this.shadowOffset, GrassShadowPass_1.grassShadowPass.getUniformLocation("lightSpaceMatrix")[0]);
        main_1.gl.uniform3fv(GrassShadowPass_1.grassShadowPass.getUniformLocation("cameraPos")[0], camera.getPosition());
        main_1.gl.uniform1f(GrassShadowPass_1.grassShadowPass.getUniformLocation("currentTime")[0], (Date.now() - main_1.applicationStartTime) * 0.001);
        scene.renderGrass(GrassShadowPass_1.grassShadowPass, false);
        //gl.disable(gl.CULL_FACE);
        // ---------------------
    }
}
exports.default = ShadowRenderPass;
//# sourceMappingURL=ShadowRenderPass.js.map