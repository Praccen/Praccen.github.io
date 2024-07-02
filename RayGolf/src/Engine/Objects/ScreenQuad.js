"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphicsObject_1 = require("./GraphicsObject");
const main_1 = require("../../main");
class ScreenQuad extends GraphicsObject_1.default {
    constructor(shaderProgram, textures) {
        super(shaderProgram);
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions        // uv
            -1.0, 1.0, 0.0, 1.0,
            -1.0, -1.0, 0.0, 0.0,
            1.0, -1.0, 1.0, 0.0,
            1.0, 1.0, 1.0, 1.0,
        ]);
        // prettier-ignore
        this.indices = new Int32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.setVertexData(this.vertices);
        this.setIndexData(this.indices);
        this.textures = textures;
        for (let texture of this.textures) {
            texture.setTexParameterI(main_1.gl.TEXTURE_WRAP_S, main_1.gl.CLAMP_TO_EDGE);
            texture.setTexParameterI(main_1.gl.TEXTURE_WRAP_T, main_1.gl.CLAMP_TO_EDGE);
        }
    }
    draw(bindTextures = true) {
        this.bindVAO();
        if (bindTextures) {
            for (let i = 0; i < this.textures.length; i++) {
                this.textures[i].bind(i);
            }
        }
        main_1.gl.drawElements(main_1.gl.TRIANGLES, 6, main_1.gl.UNSIGNED_INT, 0);
    }
}
exports.default = ScreenQuad;
//# sourceMappingURL=ScreenQuad.js.map