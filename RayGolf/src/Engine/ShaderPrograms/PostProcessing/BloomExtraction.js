"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBloomExtraction = exports.bloomExtraction = void 0;
const ShaderProgram_1 = require("../ShaderProgram");
const ScreenQuadShaderProgram_1 = require("../ScreenQuadShaderProgram");
const main_1 = require("../../../main");
const bloomExtractionFragmentSrc = `#version 300 es
precision highp float;

in vec2 texCoords;

layout (location = 0) out vec4 normalShaded;
layout (location = 1) out vec4 brightOnly;

uniform sampler2D inputTexture;

void main() {
	normalShaded = texture(inputTexture, texCoords);
    
    // check whether fragment output is higher than threshold, if so output as brightness color
    float brightness = normalShaded.r + normalShaded.g + normalShaded.b;
    if(brightness > 1.0) {
        brightOnly = normalShaded;
    }
    else {
        brightOnly = vec4(0.0, 0.0, 0.0, 1.0);
    }
}`;
class BloomExtraction extends ShaderProgram_1.default {
    constructor() {
        super("BloomExtraction", ScreenQuadShaderProgram_1.screenQuadVertexSrc, bloomExtractionFragmentSrc);
        this.use();
        this.setUniformLocation("inputTexture");
        main_1.gl.uniform1i(this.getUniformLocation("inputTexture")[0], 0);
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
}
exports.bloomExtraction = null;
let createBloomExtraction = function () {
    exports.bloomExtraction = new BloomExtraction();
};
exports.createBloomExtraction = createBloomExtraction;
//# sourceMappingURL=BloomExtraction.js.map