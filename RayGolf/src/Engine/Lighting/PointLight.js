"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const Vec3_1 = require("../Maths/Vec3");
class PointLight {
    constructor(gl, shaderProgram) {
        gl = gl;
        this.shaderProgram = shaderProgram;
        this.position = new Vec3_1.default([0.0, 0.0, 0.0]);
        this.colour = new Vec3_1.default([1.0, 1.0, 1.0]);
        this.constant = 1.0;
        this.linear = 0.07;
        this.quadratic = 0.017;
        // this.radius = (-this.linear + Math.sqrt(this.linear * this.linear - 4.0 * this.quadratic * (this.constant - (256.0 / 5.0)))) / (2.0 * this.quadratic);
    }
    bind(lightIndex) {
        let ul = this.shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].position");
        if (ul[1]) {
            main_1.gl.uniform3fv(ul[0], this.position);
        }
        ul = this.shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].colour");
        if (ul[1]) {
            main_1.gl.uniform3fv(ul[0], this.colour);
        }
        ul = this.shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].constant");
        if (ul[1]) {
            main_1.gl.uniform1f(ul[0], this.constant);
        }
        ul = this.shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].linear");
        if (ul[1]) {
            main_1.gl.uniform1f(ul[0], this.linear);
        }
        ul = this.shaderProgram.getUniformLocation("pointLights[" + lightIndex + "].quadratic");
        if (ul[1]) {
            main_1.gl.uniform1f(ul[0], this.quadratic);
        }
    }
}
exports.default = PointLight;
//# sourceMappingURL=PointLight.js.map