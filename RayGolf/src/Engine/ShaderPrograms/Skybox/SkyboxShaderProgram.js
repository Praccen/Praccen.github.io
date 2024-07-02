"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSkyboxShaderProgram = exports.skyboxShaderProgram = exports.skyboxVertexSrc = void 0;
const main_1 = require("../../../main");
const ShaderProgram_1 = require("../ShaderProgram");
exports.skyboxVertexSrc = `#version 300 es

layout (location = 0) in vec3 inPos;

out vec3 texCoords;

uniform mat4 viewProjMatrix;

void main()
{
    texCoords = inPos;
	texCoords.y *= -1.0;
    vec4 pos = viewProjMatrix * vec4(inPos, 1.0);
    gl_Position = pos.xyww; 
}  
`;
const skyboxFragmentSrc = `#version 300 es
precision highp float;

out vec4 FragColor;
in vec3 texCoords;

uniform samplerCube skybox;

void main() {
    FragColor = texture(skybox, texCoords).rgba;
}
`;
class SkyboxShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("SkyboxShaderProgram", exports.skyboxVertexSrc, skyboxFragmentSrc);
        this.setUniformLocation("skybox");
        main_1.gl.uniform1i(this.uniformBindings["skybox"], 0);
        this.setUniformLocation("viewProjMatrix");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 3 * 4;
        main_1.gl.vertexAttribPointer(0, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
    }
}
exports.skyboxShaderProgram = null;
let createSkyboxShaderProgram = function () {
    exports.skyboxShaderProgram = new SkyboxShaderProgram();
};
exports.createSkyboxShaderProgram = createSkyboxShaderProgram;
//# sourceMappingURL=SkyboxShaderProgram.js.map