"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeometryPass = exports.geometryPass = exports.geometryFragmentShaderSrc = void 0;
const main_1 = require("../../../main");
const ShaderProgram_1 = require("../ShaderProgram");
const geometryVertexShaderSrc = `#version 300 es
// If inputs change, also update GeometryPass::setupVertexAttributePointers to match
layout (location = 0) in vec3 inPosition;
layout (location = 1) in vec3 inNormal;
layout (location = 2) in vec2 inTexCoords;

// If uniforms change, also update PhongShaderProgram to match
uniform mat4 modelMatrix;
uniform mat4 viewProjMatrix;
uniform mat4 textureMatrix;

out vec3 fragPos;
out vec3 fragNormal;
out vec2 texCoords;

void main() {
    vec4 worldPos = modelMatrix * vec4(inPosition, 1.0);
	texCoords = vec2(textureMatrix * vec4(inTexCoords, 0.0, 1.0));

	// Calculate normal matrix, should be done on CPU but I can't be bothered with implementing inverse of a matrix and don't want to find a good lib atm
	mat3 normalMatrix = mat3(modelMatrix);
	normalMatrix = inverse(normalMatrix);
	normalMatrix = transpose(normalMatrix);

	fragNormal = normalize(normalMatrix * inNormal);
	fragPos = worldPos.xyz;

    gl_Position = viewProjMatrix * worldPos;
}`;
exports.geometryFragmentShaderSrc = `#version 300 es
precision highp float;

in vec3 fragPos;
in vec3 fragNormal;
in vec2 texCoords;

layout (location = 0) out vec4 gPositionEmission;
layout (location = 1) out vec4 gNormal;
layout (location = 2) out vec4 gColourSpec;

struct Material {
	sampler2D diffuse;
	sampler2D specular;
	sampler2D emission;
};

uniform Material material;
uniform vec3 baseColor;

mat4 thresholdMatrix = mat4(
	1.0, 9.0, 3.0, 11.0,
	13.0, 5.0, 15.0, 7.0,
	4.0, 12.0, 2.0, 10.0,
	16.0, 8.0, 14.0, 6.0
	);

void main() {
	float opacity = texture(material.diffuse, texCoords).a;

	float threshold = thresholdMatrix[int(floor(mod(gl_FragCoord.x, 4.0)))][int(floor(mod(gl_FragCoord.y, 4.0)))] / 17.0;
    if (threshold >= opacity) {
        discard;
    }

	gColourSpec.rgb = texture(material.diffuse, texCoords).rgb;
	if (baseColor.r > 0.0 || baseColor.g > 0.0 || baseColor.b > 0.0) {
		gColourSpec.rgb = baseColor;
	}
    gColourSpec.a = texture(material.specular, texCoords).r;
	
	gPositionEmission.rgb = fragPos;
	gPositionEmission.a = texture(material.emission, texCoords).r;
	gNormal = vec4(fragNormal, 1.0);
}`;
class GeometryPass extends ShaderProgram_1.default {
    constructor() {
        super("GeometryPass", geometryVertexShaderSrc, exports.geometryFragmentShaderSrc);
        this.use();
        this.setUniformLocation("modelMatrix");
        this.setUniformLocation("viewProjMatrix");
        this.setUniformLocation("textureMatrix");
        this.setUniformLocation("material.diffuse");
        this.setUniformLocation("material.specular");
        this.setUniformLocation("material.emission");
        this.setUniformLocation("baseColor");
        main_1.gl.uniform1i(this.getUniformLocation("material.diffuse")[0], 0);
        main_1.gl.uniform1i(this.getUniformLocation("material.specular")[0], 1);
        main_1.gl.uniform1i(this.getUniformLocation("material.emission")[0], 2);
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
exports.geometryPass = null;
let createGeometryPass = function () {
    exports.geometryPass = new GeometryPass();
};
exports.createGeometryPass = createGeometryPass;
//# sourceMappingURL=GeometryPass.js.map