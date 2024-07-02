"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const GraphicsObject_1 = require("./GraphicsObject");
class ParticleSpawner extends GraphicsObject_1.default {
    constructor(shaderProgram, texture, numberOfStartingParticles = 0) {
        super(shaderProgram);
        this.texture = texture;
        this.bindVAO();
        this.instanceVBO = main_1.gl.createBuffer();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, numberOfStartingParticles * 11 * 4, main_1.gl.DYNAMIC_DRAW);
        shaderProgram.setupInstancedVertexAttributePointers();
        this.unbindVAO();
        // prettier-ignore
        this.vertices = new Float32Array([
            // positions  // uv
            -0.5, 0.5, 0.0, 1.0,
            -0.5, -0.5, 0.0, 0.0,
            0.5, -0.5, 1.0, 0.0,
            0.5, 0.5, 1.0, 1.0,
        ]);
        // prettier-ignore
        this.indices = new Int32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.setVertexData(this.vertices);
        this.setIndexData(this.indices);
        // All starting particles are initialized as size and position 0, so they wont be visable unless manually changed
        this.numParticles = numberOfStartingParticles;
        this.fadePerSecond = 0.0;
        this.sizeChangePerSecond = 1.0;
    }
    setNumParticles(amount) {
        this.numParticles = amount;
        this.bindVAO();
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.instanceVBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, this.numParticles * 11 * 4, main_1.gl.DYNAMIC_DRAW);
        this.unbindVAO();
    }
    getNumberOfParticles() {
        return this.numParticles;
    }
    setParticleData(particleIndex, startPosition, size, startVel, acceleration) {
        if (particleIndex > this.numParticles) {
            return false;
        }
        let data = new Float32Array([
            startPosition.x,
            startPosition.y,
            startPosition.z,
            size,
            startVel.x,
            startVel.y,
            startVel.z,
            (Date.now() - main_1.applicationStartTime) * 0.001,
            acceleration.x,
            acceleration.y,
            acceleration.z,
        ]);
        this.bufferSubDataUpdate(particleIndex * 11, data);
        return true;
    }
    setParticleStartPosition(particleIndex, position) {
        if (particleIndex > this.numParticles) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 11, new Float32Array(position));
        return true;
    }
    setParticleSize(particleIndex, size) {
        if (particleIndex > this.numParticles) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 11 + 3, new Float32Array([size]));
        return true;
    }
    setParticleStartVelocity(particleIndex, vel) {
        if (particleIndex > this.numParticles) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 11 + 4, new Float32Array(vel));
        return true;
    }
    setParticleStartTime(particleIndex, time) {
        if (particleIndex > this.numParticles) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 11 + 7, new Float32Array([time]));
        return true;
    }
    resetParticleStartTime(particleIndex) {
        if (particleIndex > this.numParticles) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 11 + 7, new Float32Array([(Date.now() - main_1.applicationStartTime) * 0.001]));
        return true;
    }
    setParticleAcceleration(particleIndex, acc) {
        if (particleIndex > this.numParticles) {
            return false;
        }
        this.bufferSubDataUpdate(particleIndex * 11 + 8, new Float32Array(acc));
        return true;
    }
    bufferSubDataUpdate(start, data) {
        if (start > this.numParticles * 11) {
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
        this.texture.bind(0);
        main_1.gl.uniform1f(this.shaderProgram.getUniformLocation("fadePerSecond")[0], this.fadePerSecond);
        main_1.gl.uniform1f(this.shaderProgram.getUniformLocation("sizeChangePerSecond")[0], this.sizeChangePerSecond);
        main_1.gl.drawElementsInstanced(main_1.gl.TRIANGLES, 6, main_1.gl.UNSIGNED_INT, 0, this.getNumberOfParticles());
        this.unbindVAO();
    }
}
exports.default = ParticleSpawner;
//# sourceMappingURL=ParticleSpawner.js.map