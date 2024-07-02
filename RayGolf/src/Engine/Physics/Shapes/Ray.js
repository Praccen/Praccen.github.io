"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec3_1 = require("../../Maths/Vec3");
const Shape_1 = require("./Shape");
class Ray extends Shape_1.default {
    constructor() {
        super();
        this.start = new Vec3_1.default([0.0, 0.0, 0.0]);
        this.dir = new Vec3_1.default([0.0, 0.0, 1.0]);
    }
    setStart(start) {
        this.start = start;
    }
    setDir(dir) {
        this.dir.deepAssign(dir).normalize();
    }
    getDir() {
        return this.dir;
    }
    setStartAndDir(start, dir) {
        this.start.deepAssign(start);
        this.dir.deepAssign(dir).normalize();
    }
    getTransformedVertices() {
        return [this.start];
    }
    getTransformedNormals() {
        return [this.dir];
    }
    getTransformedEdges() {
        return [this.dir];
    }
    getTransformedEdgeNormals() {
        return [this.dir];
    }
}
exports.default = Ray;
//# sourceMappingURL=Ray.js.map