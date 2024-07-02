"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const Framebuffer_1 = require("../../Framebuffer");
const GeometryPass_1 = require("../../ShaderPrograms/DeferredRendering/GeometryPass");
const GrassShaderProgram_1 = require("../../ShaderPrograms/GrassShaderProgram");
const Texture_1 = require("../../Textures/Texture");
class GeometryRenderPass {
    constructor() {
        this.outputFramebuffer = new Framebuffer_1.default(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight, [
            new Texture_1.default(false, main_1.gl.RGBA32F, main_1.gl.RGBA, main_1.gl.FLOAT),
            new Texture_1.default(false, main_1.gl.RGBA32F, main_1.gl.RGBA, main_1.gl.FLOAT),
            new Texture_1.default(false),
        ], null);
    }
    setResolution(x, y) {
        this.outputFramebuffer.setProportions(x, y);
    }
    draw(scene, camera) {
        main_1.gl.viewport(0.0, 0.0, main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight);
        // Bind gbuffer and clear that with 0,0,0,0 (the alpha = 0 is important to be able to identify fragments in the lighting pass that have not been written with geometry)
        this.outputFramebuffer.bind(main_1.gl.FRAMEBUFFER);
        main_1.gl.clearColor(0.0, 0.0, 0.0, 0.0);
        main_1.gl.clear(main_1.gl.COLOR_BUFFER_BIT | main_1.gl.DEPTH_BUFFER_BIT | main_1.gl.STENCIL_BUFFER_BIT);
        GeometryPass_1.geometryPass.use();
        camera.bindViewProjMatrix(GeometryPass_1.geometryPass.getUniformLocation("viewProjMatrix")[0]);
        scene.renderScene(GeometryPass_1.geometryPass, true);
        GrassShaderProgram_1.grassShaderProgram.use();
        camera.bindViewProjMatrix(GrassShaderProgram_1.grassShaderProgram.getUniformLocation("viewProjMatrix")[0]);
        main_1.gl.uniform3fv(GrassShaderProgram_1.grassShaderProgram.getUniformLocation("cameraPos")[0], camera.getPosition());
        main_1.gl.uniform1f(GrassShaderProgram_1.grassShaderProgram.getUniformLocation("currentTime")[0], (Date.now() - main_1.applicationStartTime) * 0.001);
        scene.renderGrass(GrassShaderProgram_1.grassShaderProgram, true);
    }
}
exports.default = GeometryRenderPass;
//# sourceMappingURL=GeometryRenderPass.js.map