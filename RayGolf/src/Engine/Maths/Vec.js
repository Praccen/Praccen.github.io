"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vec extends Array {
    constructor(size, base) {
        super(size);
        if (base) {
            this.iterate((i) => {
                this[i] = base[i];
            });
        }
        else {
            this.fill(0);
        }
    }
    iterate(fun) {
        for (let i = 0; i < this.length; i++) {
            fun(i);
        }
    }
    deepAssign(base) {
        this.iterate((i) => {
            this[i] = base[i];
        });
        return this;
    }
    compare(other) {
        let returnVal = true;
        this.iterate((i) => {
            if (this[i] != other[i]) {
                returnVal = false;
                return;
            }
        });
        return returnVal;
    }
    len() {
        return Math.sqrt(this.length2());
    }
    length2() {
        let returnVal = 0;
        this.iterate((i) => {
            returnVal += Math.pow(this[i], 2);
        });
        return returnVal;
    }
    /**
     * Normalizes the vector and returns it.
     * It does not return a copy, so this will change the instance itself.
     */
    normalize() {
        const length = this.len();
        if (length > 0.0) {
            this.iterate((i) => {
                this[i] /= length;
            });
        }
        return this;
    }
    dot(otherVec) {
        let dot = 0.0;
        this.iterate((i) => {
            dot += this[i] * otherVec[i];
        });
        return dot;
    }
    flip() {
        this.iterate((i) => {
            this[i] *= -1.0;
        });
        return this;
    }
    add(vec) {
        this.iterate((i) => {
            this[i] += vec[i];
        });
        return this;
    }
    subtract(vec) {
        this.iterate((i) => {
            this[i] -= vec[i];
        });
        return this;
    }
    multiply(mult) {
        this.iterate((i) => {
            this[i] *= mult;
        });
        return this;
    }
    min(vec) {
        this.iterate((i) => {
            this[i] = Math.min(this[i], vec[i]);
        });
        return this;
    }
    max(vec) {
        this.iterate((i) => {
            this[i] = Math.max(this[i], vec[i]);
        });
        return this;
    }
}
exports.default = Vec;
//# sourceMappingURL=Vec.js.map