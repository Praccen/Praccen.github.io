"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BoundingBoxComponent_1 = require("../Engine/ECS/Components/BoundingBoxComponent");
const CollisionComponent_1 = require("../Engine/ECS/Components/CollisionComponent");
const MovementComponent_1 = require("../Engine/ECS/Components/MovementComponent");
const ParticleSpawnerComponent_1 = require("../Engine/ECS/Components/ParticleSpawnerComponent");
const PositionComponent_1 = require("../Engine/ECS/Components/PositionComponent");
const Vec2_1 = require("../Engine/Maths/Vec2");
const Vec3_1 = require("../Engine/Maths/Vec3");
const GameMachine_1 = require("./GameMachine");
const Newspaper_1 = require("./Newspaper");
const Game_1 = require("./States/Game");
class Player {
    constructor(scene, rendering, ecsManager) {
        this.scene = scene;
        this.rendering = rendering;
        this.ecsManager = ecsManager;
        this.throwCooldown = 0.5;
        this.throwTimer = 0.0;
        this.newspapers = new Array();
        this.rotation = new Vec3_1.default();
        this.throwStrength = 10.0;
        this.throwPos = new Vec3_1.default();
        this.throwVel = new Vec3_1.default();
        this.game = Game_1.default.getInstanceNoSa();
        this.prepThrow = false;
        this.mouseMovement = new Vec2_1.default();
        GameMachine_1.input.mouseMoveCallBack = (event) => {
            this.mouseMovement.x += event.movementX;
            this.mouseMovement.y += event.movementY;
        };
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            let entity = this.ecsManager.createEntity();
            this.positionComp = new PositionComponent_1.default();
            let boundingBoxComp = new BoundingBoxComponent_1.default();
            boundingBoxComp.boundingBox.setMinAndMaxVectors(new Vec3_1.default([-0.5, 0.0, -0.5]), new Vec3_1.default([0.5, 1.8, 0.5]));
            boundingBoxComp.updateTransformMatrix(this.positionComp.matrix);
            this.movComp = new MovementComponent_1.default();
            // this.movComp.velocity.z = 3.0;
            this.movComp.acceleration = 20.0;
            this.movComp.drag = 10.0;
            this.particleSpawner = this.scene.getNewParticleSpawner("Assets/textures/AimingBlob.png");
            this.particleSpawner.sizeChangePerSecond = 0.0;
            this.particleComp = new ParticleSpawnerComponent_1.default(this.particleSpawner);
            this.particleSpawner.setNumParticles(9);
            this.ecsManager.addComponent(entity, this.positionComp);
            this.ecsManager.addComponent(entity, boundingBoxComp);
            this.ecsManager.addComponent(entity, this.movComp);
            this.ecsManager.addComponent(entity, this.particleComp);
            this.ecsManager.addComponent(entity, new CollisionComponent_1.default());
            this.respawn();
        });
    }
    respawn() {
        this.positionComp.position.setValues(0.0, 0.0, 0.0);
        this.movComp.velocity.setValues(0.0, 0.0, 0.0);
        this.movComp.accelerationDirection.setValues(0.0, 0.0, 0.0);
        this.game.rendering.camera.setDir(0.0, 0.0, 1.0);
    }
    getPosition() {
        return this.positionComp.position;
    }
    getVelocity() {
        return this.movComp.velocity;
    }
    throwPaper() {
        if (this.throwTimer > this.throwCooldown) {
            this.throwTimer = 0.0;
            this.newspapers.push(new Newspaper_1.default(this.throwPos, this.throwVel, new Vec3_1.default([0.0, this.rotation.y, 0.0]), this.ecsManager, this.scene));
        }
    }
    update(dt) {
        this.throwTimer += dt;
        for (let i = 0; i < this.newspapers.length; i++) {
            let paper = this.newspapers[i];
            // Newspaper is not moving so remove from array
            if (!paper.update(dt)) {
                this.game.newspapersStopped.push(this.newspapers[i]);
                this.newspapers.splice(i, 1);
                i--;
            }
        }
        // Update camera
        this.rendering.camera.setPosition(this.positionComp.position.x, this.positionComp.position.y + 1.7, this.positionComp.position.z);
        let rotVec = new Vec3_1.default([0.0, 0.0, 0.0]);
        let rotate = false;
        if (this.mouseMovement.length2() > 0.0) {
            rotVec.setValues(-this.mouseMovement.y * 0.2, -this.mouseMovement.x * 0.2);
            rotate = true;
            this.mouseMovement.setValues(0.0, 0.0);
        }
        if (GameMachine_1.input.keys["ARROWUP"]) {
            rotVec.x += 210 * dt;
            rotate = true;
        }
        if (GameMachine_1.input.keys["ARROWDOWN"]) {
            rotVec.x -= 210 * dt;
            rotate = true;
        }
        if (GameMachine_1.input.keys["ARROWLEFT"]) {
            rotVec.y += 210 * dt;
            rotate = true;
        }
        if (GameMachine_1.input.keys["ARROWRIGHT"]) {
            rotVec.y -= 210 * dt;
            rotate = true;
        }
        // Touch / joystick control
        GameMachine_1.input.updateGamepad();
        if (GameMachine_1.input.joystickRightDirection.length2() > 0.01) {
            rotVec = new Vec2_1.default([
                GameMachine_1.input.joystickRightDirection.y,
                GameMachine_1.input.joystickRightDirection.x,
            ]).multiply(-210 * dt);
            rotate = true;
        }
        this.rotation.add(new Vec3_1.default([rotVec.x, rotVec.y, 0.0]).multiply(90.0 * dt));
        if (rotate) {
            let rotMatrix = new Matrix4(null);
            let rotAmount = 90.0;
            let rightVec = new Vec3_1.default(this.rendering.camera.getRight());
            if (rotVec.y) {
                rotMatrix.rotate(rotAmount * rotVec.y * dt, 0.0, 1.0, 0.0);
            }
            if (rotVec.x) {
                rotMatrix.rotate(rotAmount * rotVec.x * dt, rightVec.x, rightVec.y, rightVec.z);
            }
            let oldDir = new Vector3(this.rendering.camera.getDir());
            let newDir = rotMatrix.multiplyVector3(oldDir);
            this.rendering.camera.setDir(newDir.elements[0], Math.max(-0.65, Math.min(0.65, newDir.elements[1])), newDir.elements[2]);
        }
        let accVec = new Vec3_1.default();
        // Movement input
        let forward = new Vec3_1.default(this.rendering.camera.getDir());
        forward.y = 0.0;
        forward.normalize();
        let right = new Vec3_1.default(this.rendering.camera.getRight());
        right.y = 0.0;
        right.normalize();
        // Touch / joystick control
        GameMachine_1.input.updateGamepad();
        if (GameMachine_1.input.joystickLeftDirection.length2() > 0.001) {
            accVec.add(new Vec3_1.default(right).multiply(GameMachine_1.input.joystickLeftDirection.x * 2.0));
            accVec.subtract(new Vec3_1.default(forward).multiply(GameMachine_1.input.joystickLeftDirection.y * 2.0));
        }
        // Keyboard control
        else {
            if (GameMachine_1.input.keys["W"]) {
                accVec.add(forward);
            }
            if (GameMachine_1.input.keys["S"]) {
                accVec.subtract(forward);
            }
            if (GameMachine_1.input.keys["A"]) {
                accVec.subtract(right);
            }
            if (GameMachine_1.input.keys["D"]) {
                accVec.add(right);
            }
        }
        if (accVec.length2() > 1.0) {
            accVec.normalize();
        }
        this.movComp.accelerationDirection.deepAssign(accVec);
        // Update throw data
        this.throwPos = new Vec3_1.default(this.positionComp.position)
            .add(forward.multiply(1.0))
            .add([0.0, 1.4, 0.0]);
        this.throwVel = new Vec3_1.default(this.rendering.camera.getDir())
            .normalize()
            .multiply(this.throwStrength)
            .add(this.movComp.velocity);
        this.prepThrow = false;
        if (GameMachine_1.input.keys["E"] || GameMachine_1.input.mouseClicked || GameMachine_1.input.buttons.get("B")) {
            this.prepThrow = true;
        }
        if (this.prepThrow) {
            for (var i = 0; i < 9; ++i) {
                let idt = i * 0.1;
                let vel = new Vec3_1.default([
                    this.throwPos.x + new Vec3_1.default(this.throwVel).x * idt,
                    this.throwPos.y + new Vec3_1.default(this.throwVel).y * idt + 0.5 * -9.8 * idt * idt,
                    this.throwPos.z + new Vec3_1.default(this.throwVel).z * idt
                ]);
                this.particleSpawner.setParticleData(i, vel, 0.1, new Vec3_1.default([0, 0, 0]), new Vec3_1.default([0, 0, 0]));
            }
            this.throwRelease = true;
        }
        else {
            for (var i = 0; i < 9; ++i) {
                this.particleSpawner.setParticleData(i, new Vec3_1.default([-10, -10, -10]), 0.1, new Vec3_1.default([0, 0, 0]), new Vec3_1.default([0, 0, 0]));
            }
        }
        if (this.throwRelease && !this.prepThrow) {
            this.throwPaper();
            this.throwRelease = false;
        }
        // Jumping
        if (GameMachine_1.input.keys[" "] || GameMachine_1.input.buttons.get("A")) {
            this.movComp.jumpRequested = true;
        }
        else {
            this.movComp.jumpRequested = false;
        }
        // Update drag based on velocity
        let xzVelocity = new Vec3_1.default(this.movComp.velocity);
        xzVelocity.y = 0.0;
        this.movComp.drag = 10.0 + xzVelocity.len();
    }
}
exports.default = Player;
//# sourceMappingURL=Player.js.map