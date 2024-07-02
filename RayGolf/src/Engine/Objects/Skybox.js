"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphicsObject_1 = require("./GraphicsObject");
const main_1 = require("../../main");
class Skybox extends GraphicsObject_1.default {
    constructor(shaderProgram, texture) {
        super(shaderProgram);
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions
            -0.5, 0.5, -0.5,
            -0.5, -0.5, -0.5,
            0.5, -0.5, -0.5,
            0.5, 0.5, -0.5,
            -0.5, 0.5, 0.5,
            -0.5, -0.5, 0.5,
            0.5, -0.5, 0.5,
            0.5, 0.5, 0.5, /*7*/
        ]);
        // prettier-ignore
        this.indices = new Int32Array([
            0, 1, 2,
            0, 2, 3,
            3, 2, 6,
            3, 6, 7,
            7, 6, 5,
            7, 5, 4,
            4, 5, 1,
            4, 1, 0,
            4, 0, 3,
            4, 3, 7,
            1, 5, 6,
            1, 6, 2,
        ]);
        this.setVertexData(this.vertices);
        this.setIndexData(this.indices);
        this.texture = texture;
    }
    draw() {
        this.bindVAO();
        this.texture.bind();
        main_1.gl.drawElements(main_1.gl.TRIANGLES, this.indices.length, main_1.gl.UNSIGNED_INT, 0);
    }
}
exports.default = Skybox;
//# sourceMappingURL=Skybox.js.map