"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec_1 = require("./Vec");
class Vec2 extends Vec_1.default {
    constructor(base) {
        super(2, base);
    }
    get x() {
        return this[0];
    }
    get y() {
        return this[1];
    }
    set x(x) {
        this[0] = x;
    }
    set y(y) {
        this[1] = y;
    }
    setValues(x, y) {
        if (x != undefined) {
            this[0] = x;
        }
        if (y != undefined) {
            this[1] = y;
        }
        return this;
    }
}
exports.default = Vec2;
//# sourceMappingURL=Vec2.js.map