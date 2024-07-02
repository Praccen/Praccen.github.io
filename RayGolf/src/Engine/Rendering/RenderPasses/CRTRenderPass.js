"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const CrtShaderProgram_1 = require("../../ShaderPrograms/PostProcessing/CrtShaderProgram");
const ScreenQuad_1 = require("../../Objects/ScreenQuad");
class CRTRenderPass {
    constructor(inputTextures) {
        this.screenQuad = new ScreenQuad_1.default(CrtShaderProgram_1.crtShaderProgram, inputTextures);
        this.outputFramebuffer = null;
    }
    bindFramebuffers() {
        if (this.outputFramebuffer == undefined) {
            main_1.gl.bindFramebuffer(main_1.gl.DRAW_FRAMEBUFFER, null); // Render directly to screen
        }
        else {
            this.outputFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        }
    }
    draw() {
        this.bindFramebuffers();
        main_1.gl.disable(main_1.gl.DEPTH_TEST);
        // ---- Crt effect ----
        CrtShaderProgram_1.crtShaderProgram.use();
        this.screenQuad.draw(true);
        // --------------------
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
    }
}
exports.default = CRTRenderPass;
//# sourceMappingURL=CRTRenderPass.js.map