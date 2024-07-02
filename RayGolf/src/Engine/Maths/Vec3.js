"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec_1 = require("./Vec");
class Vec3 extends Vec_1.default {
    constructor(base) {
        super(3, base);
    }
    get x() {
        return this[0];
    }
    get y() {
        return this[1];
    }
    get z() {
        return this[2];
    }
    set x(x) {
        this[0] = x;
    }
    set y(y) {
        this[1] = y;
    }
    set z(z) {
        this[2] = z;
    }
    setValues(x, y, z) {
        if (x != undefined) {
            this[0] = x;
        }
        if (y != undefined) {
            this[1] = y;
        }
        if (z != undefined) {
            this[2] = z;
        }
        return this;
    }
    cross(otherVec) {
        let tempVec = new Vec3();
        tempVec.x = this[1] * otherVec[2] - this[2] * otherVec[1];
        tempVec.y = this[0] * otherVec[2] - this[2] * otherVec[0];
        tempVec.z = this[0] * otherVec[1] - this[1] * otherVec[0];
        this.deepAssign(tempVec);
        return this;
    }
}
exports.default = Vec3;
//# sourceMappingURL=Vec3.js.map