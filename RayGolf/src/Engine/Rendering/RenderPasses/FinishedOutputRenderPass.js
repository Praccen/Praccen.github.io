"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const ScreenQuad_1 = require("../../Objects/ScreenQuad");
const ScreenQuadShaderProgram_1 = require("../../ShaderPrograms/ScreenQuadShaderProgram");
class FinishedOutputRenderPass {
    constructor(inputTextures) {
        this.screenQuad = new ScreenQuad_1.default(ScreenQuadShaderProgram_1.screenQuadShaderProgram, inputTextures);
        this.outputFramebuffer = null;
    }
    draw() {
        main_1.gl.bindFramebuffer(main_1.gl.DRAW_FRAMEBUFFER, null); // Render directly to screen
        main_1.gl.disable(main_1.gl.DEPTH_TEST);
        // ---- Crt effect ----
        ScreenQuadShaderProgram_1.screenQuadShaderProgram.use();
        this.screenQuad.draw(true);
        // --------------------
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
    }
}
exports.default = FinishedOutputRenderPass;
//# sourceMappingURL=FinishedOutputRenderPass.js.map