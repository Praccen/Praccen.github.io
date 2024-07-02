"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphicsObject_1 = require("./GraphicsObject");
const Vec3_1 = require("../Maths/Vec3");
const Triangle_1 = require("../Physics/Shapes/Triangle");
const main_1 = require("../../main");
class Mesh extends GraphicsObject_1.default {
    constructor(shaderProgram, vertices) {
        super(shaderProgram);
        this.vertices = vertices;
        this.setVertexData(this.vertices);
    }
    setupTriangles(triangles) {
        triangles.length = 0; // Clear triangles
        for (let i = 0; i < this.vertices.length; i += 8 * 3) {
            // Go through the vertices
            // Save the positions as shapes in the input array
            const length = triangles.push(new Triangle_1.default());
            triangles[length - 1].setVertices(new Vec3_1.default([
                this.vertices[i],
                this.vertices[i + 1],
                this.vertices[i + 2],
            ]), new Vec3_1.default([
                this.vertices[i + 8],
                this.vertices[i + 8 + 1],
                this.vertices[i + 8 + 2],
            ]), new Vec3_1.default([
                this.vertices[i + 16],
                this.vertices[i + 16 + 1],
                this.vertices[i + 16 + 2],
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
        main_1.gl.drawArrays(main_1.gl.TRIANGLES, 0, this.vertices.length / 8);
    }
}
exports.default = Mesh;
//# sourceMappingURL=Mesh.js.map