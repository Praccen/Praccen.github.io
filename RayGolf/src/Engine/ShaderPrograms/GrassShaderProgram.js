"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrassShaderProgram = exports.grassShaderProgram = void 0;
const main_1 = require("../../main");
const GeometryPass_1 = require("./DeferredRendering/GeometryPass");
const ShaderProgram_1 = require("./ShaderProgram");
const grassVertexShaderSrc = `#version 300 es

layout (location = 0) in vec2 inVertexPosition;
layout (location = 1) in vec2 inTexCoords;

// Instanced attributes starts here
layout (location = 2) in vec3 inPos;
layout (location = 3) in float inSize;
layout (location = 4) in vec3 inTipOffset;

uniform mat4 viewProjMatrix;
uniform vec3 cameraPos;
uniform float currentTime;

out vec3 fragPos;
out vec3 fragNormal;
out vec2 texCoords;

void main() {
    // Billboarding
    vec3 camDir = cameraPos - inPos;
    vec3 rightVec = normalize(cross(vec3(0.0, 1.0, 0.0), camDir));
	// fragNormal = vec3(-rightVec.z, 0.0, rightVec.x);
    vec3 upVec = vec3(0.0, 1.0, 0.0);
	fragNormal = upVec;
	float size = inSize + length(camDir) * 0.0;
    rightVec = rightVec * inVertexPosition.x * size;
    upVec = upVec * inVertexPosition.y * size;
	fragPos = vec3(rightVec + upVec + inPos + (inTipOffset + vec3(sin(currentTime + inPos.x) * 0.1, 0.0, 0.0)) * inVertexPosition.y);
    gl_Position = viewProjMatrix * vec4(fragPos, 1.0);

    // gl_Position = viewProjMatrix * vec4(vec3(inVertexPosition, 0.0) * size + currentPos, 1.0); // No billboarding
    texCoords = inTexCoords;
}`;
class GrassShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("GrassShaderProgram", grassVertexShaderSrc, GeometryPass_1.geometryFragmentShaderSrc, false);
        this.use();
        this.setUniformLocation("texture0");
        main_1.gl.uniform1i(this.getUniformLocation("texture0")[0], 0);
        this.setUniformLocation("viewProjMatrix");
        this.setUniformLocation("cameraPos");
        this.setUniformLocation("currentTime");
        this.setUniformLocation("material.diffuse");
        this.setUniformLocation("material.specular");
        this.setUniformLocation("material.emission");
        main_1.gl.uniform1i(this.getUniformLocation("material.diffuse")[0], 0);
        main_1.gl.uniform1i(this.getUniformLocation("material.specular")[0], 1);
        main_1.gl.uniform1i(this.getUniformLocation("material.emission")[0], 2);
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 4 * 4;
        main_1.gl.vertexAttribPointer(0, 2, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 2, main_1.gl.FLOAT, false, stride, 2 * 4);
        main_1.gl.enableVertexAttribArray(1);
    }
    setupInstancedVertexAttributePointers() {
        const stride = 7 * 4;
        main_1.gl.vertexAttribPointer(2, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(2);
        main_1.gl.vertexAttribDivisor(2, 1);
        main_1.gl.vertexAttribPointer(3, 1, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(3);
        main_1.gl.vertexAttribDivisor(3, 1);
        main_1.gl.vertexAttribPointer(4, 3, main_1.gl.FLOAT, false, stride, 4 * 4);
        main_1.gl.enableVertexAttribArray(4);
        main_1.gl.vertexAttribDivisor(4, 1);
    }
}
exports.grassShaderProgram = null;
let createGrassShaderProgram = function () {
    exports.grassShaderProgram = new GrassShaderProgram();
};
exports.createGrassShaderProgram = createGrassShaderProgram;
//# sourceMappingURL=GrassShaderProgram.js.map