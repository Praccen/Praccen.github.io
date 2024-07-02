"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
const Matrix3_1 = require("./Maths/Matrix3");
const Vec3_1 = require("./Maths/Vec3");
class Camera {
    constructor(gl) {
        gl = gl;
        // ----View----
        this.pos = new Vec3_1.default();
        this.dir = new Vec3_1.default([0.0, 0.0, -1.0]);
        this.viewMatrix = new Matrix4(null);
        this.viewMatrixNeedsUpdate = true;
        // ------------
        // ----Proj----
        this.projectionMatrix = new Matrix4(null);
        this.projMatrixNeedsUpdate = true;
        this.ratio = 16.0 / 9.0;
        this.fov = 85.0;
        // ------------
        this.viewProjMatrix = new Matrix4(null);
    }
    getViewProjMatrix() {
        this.updateViewProjMatrix();
        return this.viewProjMatrix;
    }
    getViewMatrix() {
        this.updateViewProjMatrix();
        return this.viewMatrix;
    }
    getProjectionMatrix() {
        this.updateViewProjMatrix();
        return this.projectionMatrix;
    }
    getPosition() {
        return this.pos;
    }
    getDir() {
        return this.dir;
    }
    getRight() {
        let returnVec = new Vec3_1.default(this.dir);
        let upVec = new Vec3_1.default([0.0, 1.0, 0.0]);
        returnVec.cross(upVec);
        returnVec.normalize();
        return returnVec;
    }
    setPosition(posX, posY, posZ) {
        this.pos.x = posX;
        this.pos.y = posY;
        if (posZ != undefined) {
            this.pos.z = posZ;
        }
        this.viewMatrixNeedsUpdate = true;
    }
    translate(posX, posY, posZ) {
        this.pos.x += posX;
        this.pos.y += posY;
        this.pos.z += posZ;
        this.viewMatrixNeedsUpdate = true;
    }
    setDir(dirX, dirY, dirZ) {
        this.dir.x = dirX;
        this.dir.y = dirY;
        this.dir.z = dirZ;
        this.dir.normalize();
        this.viewMatrixNeedsUpdate = true;
    }
    setFOV(fov) {
        this.fov = fov;
        this.projMatrixNeedsUpdate = true;
    }
    setAspectRatio(ratio) {
        this.ratio = ratio;
        this.projMatrixNeedsUpdate = true;
    }
    updateViewProjMatrix() {
        let updateViewProj = false;
        if (this.viewMatrixNeedsUpdate) {
            this.viewMatrix.setLookAt(this.pos.x, this.pos.y, this.pos.z, this.pos.x + this.dir.x, this.pos.y + this.dir.y, this.pos.z + this.dir.z, 0.0, 1.0, 0.0);
            this.viewMatrixNeedsUpdate = false;
            updateViewProj = true;
        }
        if (this.projMatrixNeedsUpdate) {
            this.projectionMatrix.setPerspective(this.fov, this.ratio, 0.01, 1000.0);
            this.projMatrixNeedsUpdate = false;
            updateViewProj = true;
        }
        if (updateViewProj) {
            this.viewProjMatrix.set(this.projectionMatrix);
            this.viewProjMatrix = this.viewProjMatrix.concat(this.viewMatrix);
        }
    }
    bindViewProjMatrix(uniformLocation, skybox = false) {
        this.updateViewProjMatrix();
        if (skybox) {
            let tempViewProj = new Matrix4(this.projectionMatrix);
            let tempViewMatrix = new Matrix3_1.default()
                .fromMatrix4(this.viewMatrix)
                .toMatrix4();
            tempViewProj.concat(tempViewMatrix);
            main_1.gl.uniformMatrix4fv(uniformLocation, false, tempViewProj.elements);
        }
        else {
            main_1.gl.uniformMatrix4fv(uniformLocation, false, this.viewProjMatrix.elements);
        }
    }
}
exports.default = Camera;
//# sourceMappingURL=Camera.js.map