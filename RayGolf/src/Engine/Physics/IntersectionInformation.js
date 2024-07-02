"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec3_1 = require("../Maths/Vec3");
class IntersectionInformation {
    constructor(axis, depth, point, shapeA, shapeB) {
        this.axis = new Vec3_1.default(axis);
        this.depth = depth;
        this.point = new Vec3_1.default(point);
        this.shapeA = shapeA;
        this.shapeB = shapeB;
    }
}
exports.default = IntersectionInformation;
//# sourceMappingURL=IntersectionInformation.js.map