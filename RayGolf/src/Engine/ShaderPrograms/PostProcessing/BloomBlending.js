"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBloomBlending = exports.bloomBlending = void 0;
const ShaderProgram_1 = require("../ShaderProgram");
const ScreenQuadShaderProgram_1 = require("../ScreenQuadShaderProgram");
const main_1 = require("../../../main");
const bloomBlendingFragmentSrc = `#version 300 es
precision highp float;

out vec4 fragColor;
  
in vec2 texCoords;

uniform sampler2D scene;
uniform sampler2D bloomBlur;

void main()
{
    // const float gamma = 2.2;
    // const float exposure = 1.0;
    // vec3 hdrColor = texture(scene, texCoords).rgb;      
    // vec3 bloomColor = texture(bloomBlur, texCoords).rgb;
    // hdrColor += bloomColor; // additive blending
    // // tone mapping
    // vec3 result = vec3(1.0) - exp(-hdrColor * exposure);
    // // also gamma correct while we're at it       
    // result = pow(result, vec3(1.0 / gamma));
    // fragColor = vec4(result, 1.0);

    vec3 result = texture(scene, texCoords).rgb;      
    vec3 bloomColor = texture(bloomBlur, texCoords).rgb;
    result += bloomColor; // additive blending
    fragColor = vec4(result, 1.0);
}`;
class BloomBlending extends ShaderProgram_1.default {
    constructor() {
        super("BloomBlending", ScreenQuadShaderProgram_1.screenQuadVertexSrc, bloomBlendingFragmentSrc);
        this.use();
        this.setUniformLocation("scene");
        this.setUniformLocation("bloomBlur");
        main_1.gl.uniform1i(this.getUniformLocation("scene")[0], 0);
        main_1.gl.uniform1i(this.getUniformLocation("bloomBlur")[0], 1);
        this.setUniformLocation("horizontal");
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
exports.bloomBlending = null;
let createBloomBlending = function () {
    exports.bloomBlending = new BloomBlending();
};
exports.createBloomBlending = createBloomBlending;
//# sourceMappingURL=BloomBlending.js.map