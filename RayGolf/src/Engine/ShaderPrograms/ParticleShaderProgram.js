"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParticleShaderProgram = exports.particleShaderProgram = void 0;
const main_1 = require("../../main");
const ShaderProgram_1 = require("./ShaderProgram");
const particleVertexShaderSrc = `#version 300 es

layout (location = 0) in vec2 inVertexPosition;
layout (location = 1) in vec2 inTexCoords;

// Instanced attributes starts here
layout (location = 2) in vec3 inStartPosition;
layout (location = 3) in float inSize;
layout (location = 4) in vec3 inStartVel;
layout (location = 5) in float inStartTime;
layout (location = 6) in vec3 inConstantAcceleration;
// layout (location = 7) in float padding;

uniform mat4 viewProjMatrix;
uniform vec3 cameraPos;
uniform float currentTime;
uniform float fadePerSecond;
uniform float sizeChangePerSecond;

out vec2 texCoords;
out float alpha;

void main() {
    // Calculate how long this has been alive
    float lifeTime = currentTime - inStartTime;

    // Calculate current position
    vec3 currentPos = inStartPosition + (inStartVel * lifeTime + (inConstantAcceleration * lifeTime) * lifeTime) / 2.0;

    // Billboarding
    vec3 camDir = cameraPos - currentPos;
    vec3 rightVec = normalize(cross(vec3(0.0, 1.0, 0.0), camDir));
    vec3 upVec = normalize(cross(camDir, rightVec));
    rightVec = rightVec * inVertexPosition.x * (inSize + sizeChangePerSecond * lifeTime);
    upVec = upVec * inVertexPosition.y * (inSize + sizeChangePerSecond * lifeTime);
    gl_Position = viewProjMatrix * vec4(rightVec + upVec + currentPos, 1.0);

    // gl_Position = viewProjMatrix * vec4(vec3(inVertexPosition, 0.0) * inSize + currentPos, 1.0); // No billboarding
    texCoords = inTexCoords;
    alpha = max(1.0 - lifeTime * fadePerSecond, 0.0);
}`;
const particleFragmentShaderSrc = `#version 300 es
precision highp float;

in vec2 texCoords;
in float alpha;

uniform sampler2D texture0;

out vec4 FragColor;

mat4 thresholdMatrix = mat4(
    1.0, 9.0, 3.0, 11.0,
    13.0, 5.0, 15.0, 7.0,
    4.0, 12.0, 2.0, 10.0,
    16.0, 8.0, 14.0, 6.0
    );

void main()
{
    FragColor = texture(texture0, texCoords);

    FragColor.a = FragColor.a * alpha;
    
    float threshold = thresholdMatrix[int(floor(mod(gl_FragCoord.x, 4.0)))][int(floor(mod(gl_FragCoord.y, 4.0)))] / 17.0;
    if (threshold >= FragColor.a) {
        discard;
    }

    FragColor.a = 1.0f; // Since we use screen door transparency, do not use alpha value
}`;
class ParticleShaderProgram extends ShaderProgram_1.default {
    constructor() {
        super("ParticleShaderProgram", particleVertexShaderSrc, particleFragmentShaderSrc, false);
        this.use();
        this.setUniformLocation("texture0");
        main_1.gl.uniform1i(this.getUniformLocation("texture0")[0], 0);
        this.setUniformLocation("viewProjMatrix");
        this.setUniformLocation("cameraPos");
        this.setUniformLocation("currentTime");
        this.setUniformLocation("fadePerSecond");
        this.setUniformLocation("sizeChangePerSecond");
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
        const stride = 11 * 4;
        main_1.gl.vertexAttribPointer(2, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(2);
        main_1.gl.vertexAttribDivisor(2, 1);
        main_1.gl.vertexAttribPointer(3, 1, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(3);
        main_1.gl.vertexAttribDivisor(3, 1);
        main_1.gl.vertexAttribPointer(4, 3, main_1.gl.FLOAT, false, stride, 4 * 4);
        main_1.gl.enableVertexAttribArray(4);
        main_1.gl.vertexAttribDivisor(4, 1);
        main_1.gl.vertexAttribPointer(5, 1, main_1.gl.FLOAT, false, stride, 7 * 4);
        main_1.gl.enableVertexAttribArray(5);
        main_1.gl.vertexAttribDivisor(5, 1);
        main_1.gl.vertexAttribPointer(6, 3, main_1.gl.FLOAT, false, stride, 8 * 4);
        main_1.gl.enableVertexAttribArray(6);
        main_1.gl.vertexAttribDivisor(6, 1);
        // gl.vertexAttribPointer(7, 1, gl.FLOAT, false, stride, 11 * 4);
        // gl.enableVertexAttribArray(7);
        // gl.vertexAttribDivisor(7, 1);
    }
}
exports.particleShaderProgram = null;
let createParticleShaderProgram = function () {
    exports.particleShaderProgram = new ParticleShaderProgram();
};
exports.createParticleShaderProgram = createParticleShaderProgram;
//# sourceMappingURL=ParticleShaderProgram.js.map