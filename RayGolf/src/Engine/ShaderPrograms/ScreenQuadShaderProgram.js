"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScreenQuadShaderProgram = exports.screenQuadShaderProgram = exports.screenQuadVertexSrc = void 0;
const main_1 = require("../../main");
const ShaderProgram_1 = require("./ShaderProgram");
exports.screenQuadVertexSrc = `#version 300 es

layout (location = 0) in vec2 inPos;
layout (location = 1) in vec2 inTexCoords;

out vec2 texCoords;

void main()
{
    texCoords = inTexCoords;
    gl_Position = vec4(inPos, 0.0, 1.0); 
}  
`;
const screenQuadFragmentSrc = `#version 300 es
precision highp float;

out vec4 FragColor;
in vec2 texCoords;

uniform sampler2D screenTexture;

void main() {
    FragColor = texture(screenTexture, texCoords).rgba;
}
`;
class ScreenQuadShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("ScreenQuadShaderProgram", exports.screenQuadVertexSrc, screenQuadFragmentSrc);
        this.setUniformLocation("screenTexture");
        main_1.gl.uniform1i(this.uniformBindings["screenTexture"], 0);
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
exports.screenQuadShaderProgram = null;
let createScreenQuadShaderProgram = function () {
    exports.screenQuadShaderProgram = new ScreenQuadShaderProgram();
};
exports.createScreenQuadShaderProgram = createScreenQuadShaderProgram;
//# sourceMappingURL=ScreenQuadShaderProgram.js.map