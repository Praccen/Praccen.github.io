"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec3_1 = require("../../Maths/Vec3");
const Shape_1 = require("./Shape");
class Particle extends Shape_1.default {
    constructor() {
        super();
        this.originalVertex = new Vec3_1.default();
        this.transformedVertex = new Vec3_1.default();
        this.transformMatrix = new Matrix4(null);
        this.needsUpdate = false;
        this.margin = 0.1;
    }
    setVertex(vertex) {
        this.originalVertex.deepAssign(vertex);
        this.needsUpdate = true;
    }
    setUpdateNeeded() {
        this.needsUpdate = true;
    }
    setTransformMatrix(matrix) {
        this.transformMatrix = matrix;
        this.needsUpdate = true;
    }
    getTransformedVertices() {
        if (this.needsUpdate) {
            let tempVertex = this.transformMatrix.multiplyVector4(new Vector4([...this.originalVertex, 1.0]));
            this.transformedVertex.setValues(tempVertex[0], tempVertex[1], tempVertex[2]);
        }
        return [this.transformedVertex];
    }
    getTransformedNormals() {
        return [];
    }
    getTransformedEdges() {
        return [];
    }
    getTransformedEdgeNormals() {
        return [];
    }
}
exports.default = Particle;
//# sourceMappingURL=Particle.js.map