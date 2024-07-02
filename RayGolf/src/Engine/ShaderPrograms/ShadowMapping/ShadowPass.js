"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShadowPass = exports.shadowPass = exports.shadowFragmentShaderSrc = void 0;
const main_1 = require("../../../main");
const ShaderProgram_1 = require("../ShaderProgram");
const shadowVertexShaderSrc = `#version 300 es
// If inputs change, also update ShadowPass::setupVertexAttributePointers to match
layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec3 inNormal;
layout (location = 2) in vec2 inTexCoords;

uniform mat4 lightSpaceMatrix;
uniform mat4 modelMatrix;
uniform mat4 textureMatrix;

out vec2 texCoords;

void main()
{
    gl_Position = lightSpaceMatrix * modelMatrix * vec4(inPosition, 1.0);
	texCoords = vec2(textureMatrix * vec4(inTexCoords, 0.0, 1.0));
}`;
exports.shadowFragmentShaderSrc = `#version 300 es
precision highp float;

in vec2 texCoords;

uniform sampler2D diffuse;

mat4 thresholdMatrix = mat4(
	1.0, 9.0, 3.0, 11.0,
	13.0, 5.0, 15.0, 7.0,
	4.0, 12.0, 2.0, 10.0,
	16.0, 8.0, 14.0, 6.0
);

//out vec4 final_colour;

void main()
{
    float opacity = texture(diffuse, texCoords).a;

	float threshold = thresholdMatrix[int(floor(mod(gl_FragCoord.x, 4.0)))][int(floor(mod(gl_FragCoord.y, 4.0)))] / 17.0;
    if (threshold >= opacity) {
        discard;
    }

    //final_colour = vec4(1.0, 1.0, 1.0, 1.0);
}`;
class ShadowPass extends ShaderProgram_1.default {
    constructor() {
        super("ShadowPass", shadowVertexShaderSrc, exports.shadowFragmentShaderSrc);
        this.use();
        this.setUniformLocation("lightSpaceMatrix");
        this.setUniformLocation("modelMatrix");
        this.setUniformLocation("textureMatrix");
    }
    setupVertexAttributePointers() {
        // Change if input layout changes in shaders
        const stride = 8 * 4;
        main_1.gl.vertexAttribPointer(0, 3, main_1.gl.FLOAT, false, stride, 0);
        main_1.gl.enableVertexAttribArray(0);
        main_1.gl.vertexAttribPointer(1, 3, main_1.gl.FLOAT, false, stride, 3 * 4);
        main_1.gl.enableVertexAttribArray(1);
        main_1.gl.vertexAttribPointer(2, 2, main_1.gl.FLOAT, false, stride, 6 * 4);
        main_1.gl.enableVertexAttribArray(2);
    }
}
exports.shadowPass = null;
let createShadowPass = function () {
    exports.shadowPass = new ShadowPass();
};
exports.createShadowPass = createShadowPass;
//# sourceMappingURL=ShadowPass.js.map