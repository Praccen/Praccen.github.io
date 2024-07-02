"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const Framebuffer_1 = require("../../Framebuffer");
const Texture_1 = require("../../Textures/Texture");
const ScreenQuad_1 = require("../../Objects/ScreenQuad");
const ScreenQuadShaderProgram_1 = require("../../ShaderPrograms/ScreenQuadShaderProgram");
const BloomExtraction_1 = require("../../ShaderPrograms/PostProcessing/BloomExtraction");
const GaussianBlur_1 = require("../../ShaderPrograms/PostProcessing/GaussianBlur");
const BloomBlending_1 = require("../../ShaderPrograms/PostProcessing/BloomBlending");
class BloomRenderPass {
    constructor(inputTextures) {
        this.bloomExtractionOutputFramebuffer = new Framebuffer_1.default(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight, [new Texture_1.default(false), new Texture_1.default(false)], null);
        this.pingPongFramebuffers = new Array(2);
        this.bloomResolutionWidth = 1280;
        this.bloomResolutionHeight = 720;
        for (let i = 0; i < 2; i++) {
            this.pingPongFramebuffers[i] = new Framebuffer_1.default(this.bloomResolutionWidth, this.bloomResolutionHeight, [new Texture_1.default(false)], null);
        }
        this.screenQuad = new ScreenQuad_1.default(ScreenQuadShaderProgram_1.screenQuadShaderProgram, inputTextures);
        this.outputFramebuffer = null;
    }
    setResolution(x, y) {
        this.bloomExtractionOutputFramebuffer.setProportions(x, y);
        // for (let buffer of this.pingPongFramebuffers) {
        // 	buffer.setProportions(x, y);
        // }
    }
    bindFramebuffers() {
        // Render result to screen or to crt framebuffer if doing crt effect after this.
        if (this.outputFramebuffer == undefined) {
            main_1.gl.bindFramebuffer(main_1.gl.DRAW_FRAMEBUFFER, null); // Render directly to screen
        }
        else {
            this.outputFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        }
    }
    draw() {
        main_1.gl.disable(main_1.gl.DEPTH_TEST);
        this.bloomExtractionOutputFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        BloomExtraction_1.bloomExtraction.use();
        this.screenQuad.draw(true);
        main_1.gl.viewport(0, 0, this.bloomResolutionWidth, this.bloomResolutionHeight);
        // Blur the bright image (second of the two in bloomExtractionOutputFramebuffer)
        let horizontal = true, firstIteration = true;
        let amount = 5;
        GaussianBlur_1.gaussianBlur.use();
        for (let i = 0; i < amount; i++) {
            this.pingPongFramebuffers[Number(horizontal)].bind(main_1.gl.DRAW_FRAMEBUFFER);
            main_1.gl.uniform1ui(GaussianBlur_1.gaussianBlur.getUniformLocation("horizontal")[0], Number(horizontal));
            if (firstIteration) {
                this.bloomExtractionOutputFramebuffer.textures[1].bind();
            }
            else {
                this.pingPongFramebuffers[Number(!horizontal)].textures[0].bind();
            }
            this.screenQuad.draw(false);
            horizontal = !horizontal;
            firstIteration = false;
        }
        main_1.gl.viewport(0, 0, main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight);
        // Combine the normal image with the blured bright image
        BloomBlending_1.bloomBlending.use();
        this.bloomExtractionOutputFramebuffer.textures[0].bind(0); // Normal scene
        this.pingPongFramebuffers[Number(horizontal)].textures[0].bind(1); // Blurred bright image
        this.bindFramebuffers();
        this.screenQuad.draw(false);
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
    }
}
exports.default = BloomRenderPass;
//# sourceMappingURL=BloomRenderPass.js.map