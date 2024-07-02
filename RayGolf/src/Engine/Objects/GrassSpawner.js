"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const GraphicsObject_1 = require("./GraphicsObject");
class GrassSpawner extends GraphicsObject_1.default {
    constructor(shaderProgram, numberOfStartingGrassStraws = 0) {
        super(shaderProgram);
        this.bindVAO();
        this.instanceVBO = main_1.gl.createBuffer();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, numberOfStartingGrassStraws * 7 * 4, main_1.gl.STATIC_DRAW);
        shaderProgram.setupInstancedVertexAttributePointers();
        this.unbindVAO();
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions  // uv
            0.0, 1.0, 0.5, 1.0,
            -0.1, 0.0, 0.0, 0.0,
            0.1, 0.0, 1.0, 0.0,
        ]);
        this.setVertexData(this.vertices);
        // All starting particles are initialized as size and position 0, so they wont be visable unless manually changed
        this.numGrassStraws = numberOfStartingGrassStraws;
    }
    setNumGrassStraws(amount) {
        this.numGrassStraws = amount;
        this.bindVAO();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, this.numGrassStraws * 7 * 4, main_1.gl.STATIC_DRAW);
        this.unbindVAO();
    }
    getNumberOfGrassStraws() {
        return this.numGrassStraws;
    }
    setGrassStrawData(particleIndex, startPosition, size, tipOffset) {
        if (particleIndex > this.numGrassStraws) {
            return false;
        }
        let data = new Float32Array([
            startPosition.x,
            startPosition.y,
            startPosition.z,
            size,
            tipOffset.x,
            tipOffset.y,
            tipOffset.z,
        ]);
        this.bufferSubDataUpdate(particleIndex * 7, data);
        return true;
    }
    setGrassStrawPosition(particleIndex, position) {
        if (particleIndex > this.numGrassStraws) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 7, new Float32Array(position));
        return true;
    }
    setGrassStrawSize(particleIndex, size) {
        if (particleIndex > this.numGrassStraws) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 7 + 3, new Float32Array([size]));
        return true;
    }
    setGrassTipOffset(particleIndex, offset) {
        if (particleIndex > this.numGrassStraws) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 7 + 4, new Float32Array(offset));
        return true;
    }
    bufferSubDataUpdate(start, data) {
        if (start < 0 || start + data.length > this.numGrassStraws * 7) {
            return false;
        }
        this.bindVAO();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferSubData(main_1.gl.ARRAY_BUFFER, start * 4, data);
        this.unbindVAO();
        return true;
    }
    draw() {
        this.bindVAO();
        main_1.gl.drawArraysInstanced(main_1.gl.TRIANGLES, 0, 3, this.numGrassStraws);
        this.unbindVAO();
    }
}
exports.default = GrassSpawner;
//# sourceMappingURL=GrassSpawner.js.map