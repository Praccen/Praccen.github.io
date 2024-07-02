"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const Skybox_1 = require("../../Objects/Skybox");
const SkyboxShaderProgram_1 = require("../../ShaderPrograms/Skybox/SkyboxShaderProgram");
class SkyboxRenderPass {
    constructor() {
        this.skybox = null;
    }
    setSkybox(cubemap) {
        this.skybox = new Skybox_1.default(SkyboxShaderProgram_1.skyboxShaderProgram, cubemap);
    }
    draw(camera) {
        if (this.skybox != undefined) {
            main_1.gl.enable(main_1.gl.DEPTH_TEST);
            SkyboxShaderProgram_1.skyboxShaderProgram.use();
            camera.bindViewProjMatrix(SkyboxShaderProgram_1.skyboxShaderProgram.getUniformLocation("viewProjMatrix")[0], true);
            main_1.gl.depthFunc(main_1.gl.LEQUAL);
            this.skybox.draw();
            main_1.gl.depthFunc(main_1.gl.LESS);
        }
    }
}
exports.default = SkyboxRenderPass;
//# sourceMappingURL=SkyboxRenderPass.js.map