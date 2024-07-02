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
const State_1 = require("../../Engine/State");
const GameMachine_1 = require("../GameMachine");
const Vec2_1 = require("../../Engine/Maths/Vec2");
const Vec3_1 = require("../../Engine/Maths/Vec3");
const MousePicking_1 = require("../../Engine/Maths/MousePicking");
const DebugMenu_1 = require("./DebugMenu");
const WebUtils_1 = require("../../Engine/Utils/WebUtils");
class DebugMode extends State_1.default {
    constructor(sa, game) {
        super();
        this.stateAccessible = sa;
        this.game = game;
        this.debugMenu = new DebugMenu_1.default(this.stateAccessible, this.game);
        this.currentlyPlacing = 0;
        this.placementOptions = [
            "Assets/objs/mailbox.obj",
            "Assets/objs/house.obj",
            "Assets/objs/fence.obj",
            "Assets/objs/BigBuske.obj",
            "Assets/objs/SmolBuske.obj",
            "Assets/objs/DeliveryZone.obj",
            "Assets/objs/tree_1.obj",
            "Assets/objs/tree_2.obj",
            "Assets/objs/tree_3.obj",
        ];
        let textString = "";
        for (let i = 0; i < this.placementOptions.length; i++) {
            textString += (i + 1) + ": " + this.placementOptions[i].split("/")[2] + " \r\n";
        }
        this.debugMenu.placementMenuText.textString = textString;
        this.lastMousePos = new Vec2_1.default([
            GameMachine_1.input.mousePosition.x,
            GameMachine_1.input.mousePosition.y,
        ]);
        this.mouseWasPressed = false;
    }
    init() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.init.call(this);
            this.debugMenu.init();
            let posCookie = WebUtils_1.WebUtils.GetCookie("debugPos");
            if (posCookie != "") {
                let coords = posCookie.split(",");
                if (coords.length == 3) {
                    this.game.rendering.camera.setPosition(parseFloat(coords[0]), parseFloat(coords[1]), parseFloat(coords[2]));
                }
            }
            let dirCookie = WebUtils_1.WebUtils.GetCookie("debugDir");
            if (dirCookie != "") {
                let coords = dirCookie.split(",");
                if (coords.length == 3) {
                    this.game.rendering.camera.setDir(parseFloat(coords[0]), parseFloat(coords[1]), parseFloat(coords[2]));
                }
            }
        });
    }
    reset() {
        super.reset();
        this.debugMenu.reset();
    }
    update(dt) {
        if (GameMachine_1.input.keys["P"]) {
            this.gotoState = State_1.StatesEnum.MAINMENU;
        }
        let moveVec = new Vec3_1.default();
        let move = false;
        if (GameMachine_1.input.keys["W"]) {
            moveVec.add(this.game.rendering.camera.getDir());
            move = true;
        }
        if (GameMachine_1.input.keys["S"]) {
            moveVec.subtract(this.game.rendering.camera.getDir());
            move = true;
        }
        if (GameMachine_1.input.keys["A"]) {
            moveVec.subtract(this.game.rendering.camera.getRight());
            move = true;
        }
        if (GameMachine_1.input.keys["D"]) {
            moveVec.add(this.game.rendering.camera.getRight());
            move = true;
        }
        if (GameMachine_1.input.keys[" "]) {
            moveVec.add(new Vec3_1.default([0.0, 1.0, 0.0]));
            move = true;
        }
        if (GameMachine_1.input.keys["SHIFT"]) {
            moveVec.subtract(new Vec3_1.default([0.0, 1.0, 0.0]));
            move = true;
        }
        if (move) {
            moveVec.normalize();
            moveVec.multiply(15.0 * dt); // Speed
            this.game.rendering.camera.translate(moveVec.x, moveVec.y, moveVec.z);
        }
        let rotVec = new Vec2_1.default([0.0, 0.0]);
        let rotate = false;
        // if (!input.keys["O"] && (input.mousePosition.x != input.mousePosition.previousX || input.mousePosition.y != input.mousePosition.previousY)) {
        // 	rotVec.setValues(
        // 		(input.mousePosition.previousY - input.mousePosition.y) * 0.2,
        // 		(input.mousePosition.previousX - input.mousePosition.x) * 0.2
        // 	);
        // 	rotate = true;
        // }
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
        if (rotate) {
            let rotMatrix = new Matrix4(null);
            let rotAmount = 90.0;
            let rightVec = new Vec3_1.default(this.game.rendering.camera.getRight());
            if (rotVec.y) {
                rotMatrix.rotate(rotAmount * rotVec.y * dt, 0.0, 1.0, 0.0);
            }
            if (rotVec.x) {
                rotMatrix.rotate(rotAmount * rotVec.x * dt, rightVec.x, rightVec.y, rightVec.z);
            }
            let oldDir = new Vector3(this.game.rendering.camera.getDir());
            let newDir = rotMatrix.multiplyVector3(oldDir);
            this.game.rendering.camera.setDir(newDir.elements[0], newDir.elements[1], newDir.elements[2]);
        }
        this.currentlyPlacing = -1;
        for (let i = 1; i < this.placementOptions.length + 1; i++) {
            if (GameMachine_1.input.keys[i]) {
                this.currentlyPlacing = i - 1;
                break;
            }
        }
        if (GameMachine_1.input.mouseClicked) {
            // Holding mousebutton
            let rotChange = 0.0;
            let newPosition = null;
            let scaleChange = 0.0;
            let edited = false;
            if (GameMachine_1.input.keys["R"]) {
                rotChange = GameMachine_1.input.mousePosition.x - this.lastMousePos.x;
                edited = true;
                this.debugMenu.actionText.textString = "Rotating";
            }
            if (GameMachine_1.input.keys["T"]) {
                let ray = MousePicking_1.MousePicking.GetRay(this.game.rendering.camera);
                let dist = this.game.doRayCast(ray);
                if (dist >= 0.0) {
                    newPosition = new Vec3_1.default(this.game.rendering.camera.getPosition()).add(new Vec3_1.default(ray.getDir()).multiply(dist));
                    edited = true;
                }
                this.debugMenu.actionText.textString = "Moving";
            }
            if (GameMachine_1.input.keys["Y"]) {
                scaleChange =
                    (this.lastMousePos.y - GameMachine_1.input.mousePosition.y) * 0.001;
                edited = true;
                this.debugMenu.actionText.textString = "Scaling";
            }
            if (edited) {
                this.game.objectPlacer.updateCurrentlyEditingObject(rotChange, scaleChange, newPosition);
            }
            else if (!this.mouseWasPressed) { // If we clicked the mouse button this frame
                let ray = MousePicking_1.MousePicking.GetRay(this.game.rendering.camera);
                if (this.currentlyPlacing >= 0) {
                    // Place a new object
                    let dist = this.game.doRayCast(ray);
                    if (dist >= 0.0) {
                        this.game.objectPlacer.placeObject(this.placementOptions[this.currentlyPlacing], new Vec3_1.default(this.game.rendering.camera.getPosition()).add(new Vec3_1.default(ray.getDir()).multiply(dist)), 1.0, new Vec3_1.default([0.0, 0.0, 0.0]));
                    }
                    this.debugMenu.actionText.textString = "Placing new";
                }
                else { // Try to select a new object to edit
                    this.game.objectPlacer.rayCastToSelectNewObject(ray);
                    this.debugMenu.actionText.textString = "Picking";
                }
            }
            this.mouseWasPressed = true;
        }
        else {
            this.mouseWasPressed = false;
        }
        this.lastMousePos.deepAssign([
            GameMachine_1.input.mousePosition.x,
            GameMachine_1.input.mousePosition.y,
        ]);
        this.game.ecsManager.update(0.0);
        let camPos = this.game.rendering.camera.getPosition();
        WebUtils_1.WebUtils.SetCookie("debugPos", camPos.x + "," + camPos.y + "," + camPos.z);
        let camDir = this.game.rendering.camera.getDir();
        WebUtils_1.WebUtils.SetCookie("debugDir", camDir.x + "," + camDir.y + "," + camDir.z);
        this.game.grassHandler.update(dt);
    }
    prepareDraw(dt) { }
    draw() {
        this.game.rendering.draw();
        this.debugMenu.draw();
        GameMachine_1.input.drawTouchControls();
    }
}
exports.default = DebugMode;
//# sourceMappingURL=DebugMode.js.map