"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec3_1 = require("./Vec3");
class Matrix3 {
    constructor() {
        this.elements = new Array();
        this.elements.length = 9;
        this.elements[0] = 1.0;
        this.elements[3] = 0.0;
        this.elements[6] = 0.0;
        this.elements[1] = 0.0;
        this.elements[4] = 1.0;
        this.elements[7] = 0.0;
        this.elements[2] = 0.0;
        this.elements[5] = 0.0;
        this.elements[8] = 1.0;
    }
    fromMatrix4(mat4) {
        this.elements[0] = mat4.elements[0];
        this.elements[3] = mat4.elements[4];
        this.elements[6] = mat4.elements[8];
        this.elements[1] = mat4.elements[1];
        this.elements[4] = mat4.elements[5];
        this.elements[7] = mat4.elements[9];
        this.elements[2] = mat4.elements[2];
        this.elements[5] = mat4.elements[6];
        this.elements[8] = mat4.elements[10];
        return this;
    }
    toMatrix4() {
        let retMat = new Matrix4(null);
        retMat.elements[0] = this.elements[0];
        retMat.elements[4] = this.elements[3];
        retMat.elements[8] = this.elements[6];
        retMat.elements[1] = this.elements[1];
        retMat.elements[5] = this.elements[4];
        retMat.elements[9] = this.elements[7];
        retMat.elements[2] = this.elements[2];
        retMat.elements[6] = this.elements[5];
        retMat.elements[10] = this.elements[8];
        return retMat;
    }
    multiplyVec3(vec) {
        let e = this.elements;
        let v = new Vec3_1.default();
        v.x = vec.x * e[0] + vec.y * e[3] + vec.z * e[6];
        v.y = vec.x * e[1] + vec.y * e[4] + vec.z * e[7];
        v.z = vec.x * e[2] + vec.y * e[5] + vec.z * e[8];
        return v;
    }
    transpose() {
        let e = this.elements;
        let t;
        t = e[1];
        e[1] = e[3];
        e[3] = t;
        t = e[2];
        e[2] = e[6];
        e[6] = t;
        t = e[5];
        e[5] = e[7];
        e[7] = t;
        return this;
    }
    determinant() {
        let a = this.elements[0] *
            (this.elements[4] * this.elements[8] -
                this.elements[5] * this.elements[7]);
        let b = this.elements[4] *
            (this.elements[1] * this.elements[8] -
                this.elements[2] * this.elements[7]);
        let c = this.elements[6] *
            (this.elements[1] * this.elements[5] -
                this.elements[2] * this.elements[4]);
        return a - b + c;
    }
    adj() {
        let temp = new Matrix3();
        temp.elements[0] =
            this.elements[4] * this.elements[8] - this.elements[5] * this.elements[7];
        temp.elements[3] = -(this.elements[3] * this.elements[8] -
            this.elements[5] * this.elements[6]);
        temp.elements[6] =
            this.elements[3] * this.elements[8] - this.elements[5] * this.elements[6];
        temp.elements[1] = -(this.elements[1] * this.elements[8] -
            this.elements[2] * this.elements[7]);
        temp.elements[4] =
            this.elements[0] * this.elements[8] - this.elements[2] * this.elements[6];
        temp.elements[7] = -(this.elements[0] * this.elements[5] -
            this.elements[2] * this.elements[3]);
        temp.elements[2] =
            this.elements[3] * this.elements[7] - this.elements[4] * this.elements[6];
        temp.elements[5] = -(this.elements[0] * this.elements[6] -
            this.elements[1] * this.elements[7]);
        temp.elements[8] =
            this.elements[0] * this.elements[4] - this.elements[1] * this.elements[3];
        return temp;
    }
    invert() {
        let determinant = this.determinant();
        if (determinant == 0.0) {
            return this;
        }
        let adj = this.adj();
        for (let i = 0; i < 9; i++) {
            this.elements[i] = adj.elements[i] / determinant;
        }
        return this;
    }
}
exports.default = Matrix3;
//# sourceMappingURL=Matrix3.js.map