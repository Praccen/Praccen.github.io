"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphicsObject_1 = require("./GraphicsObject");
const Triangle_1 = require("../Physics/Shapes/Triangle");
const Vec3_1 = require("../Maths/Vec3");
const main_1 = require("../../main");
class PhongQuad extends GraphicsObject_1.default {
    constructor(shaderProgram) {
        super(shaderProgram);
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions        // normals         // uv
            -0.5, 0.5, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0,
            -0.5, -0.5, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0,
            0.5, -0.5, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0,
            0.5, 0.5, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0,
        ]);
        // prettier-ignore
        this.indices = new Int32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.setVertexData(this.vertices);
        this.setIndexData(this.indices);
    }
    setupTriangles(triangles) {
        triangles.length = 0; // Clear triangles
        for (let i = 0; i < this.indices.length; i += 3) {
            // Go through the vertices
            // Save the positions as shapes in the input array
            const length = triangles.push(new Triangle_1.default());
            triangles[length - 1].setVertices(new Vec3_1.default([
                this.vertices[this.indices[i] * 8],
                this.vertices[this.indices[i] * 8 + 1],
                this.vertices[this.indices[i] * 8 + 2],
            ]), new Vec3_1.default([
                this.vertices[this.indices[i + 1] * 8],
                this.vertices[this.indices[i + 1] * 8 + 1],
                this.vertices[this.indices[i + 1] * 8 + 2],
            ]), new Vec3_1.default([
                this.vertices[this.indices[i + 2] * 8],
                this.vertices[this.indices[i + 2] * 8 + 1],
                this.vertices[this.indices[i + 2] * 8 + 2],
            ]));
        }
    }
    getVertexPositions() {
        let returnArr = new Array();
        for (let i = 0; i < this.vertices.length; i += 8) {
            returnArr.push(new Vec3_1.default([this.vertices[i], this.vertices[i + 1], this.vertices[i + 2]]));
        }
        return returnArr;
    }
    draw() {
        this.bindVAO();
        main_1.gl.drawElements(main_1.gl.TRIANGLES, 6, main_1.gl.UNSIGNED_INT, 0);
    }
}
exports.default = PhongQuad;
//# sourceMappingURL=PhongQuad.js.map