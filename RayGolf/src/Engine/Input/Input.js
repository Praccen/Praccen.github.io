"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const TextObject2D_1 = require("../GUI/Text/TextObject2D");
const Vec2_1 = require("../Maths/Vec2");
class Input {
    constructor() {
        this.keys = [];
        this.buttons = new Map();
        this.gamepads = new Array();
        this.mousePosition = { x: 0, y: 0, previousX: 0, previousY: 0 };
        this.mousePositionOnCanvas = { x: 0, y: 0, previousX: 0, previousY: 0 };
        this.mouseClicked = false;
        this.mouseMovementSinceLast = new Vec2_1.default();
        this.simulateTouchBasedOnMouse = false;
        this.touchUsed = false;
        //----Controls----
        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values <-- for key codes
        let self = this;
        document.addEventListener("keydown", function (event) {
            self.keys[event.key.toUpperCase()] = true;
            self.touchUsed = false;
        });
        document.addEventListener("keyup", function (event) {
            self.keys[event.key.toUpperCase()] = false;
            self.touchUsed = false;
        });
        document.addEventListener("mousemove", function (event) {
            self.mouseMoveCallBack(event);
            self.mouseMovementSinceLast.x += event.movementX;
            self.mouseMovementSinceLast.y += event.movementY;
            self.mousePosition = {
                x: event.clientX,
                y: event.clientY,
                previousX: self.mousePosition.x,
                previousY: self.mousePosition.y,
            };
            self.mousePositionOnCanvas = {
                x: self.mousePosition.x - main_1.windowInfo.paddingX,
                y: self.mousePosition.y - main_1.windowInfo.paddingY,
                previousX: self.mousePositionOnCanvas.x,
                previousY: self.mousePositionOnCanvas.y,
            };
            if (self.simulateTouchBasedOnMouse && self.mouseClicked) {
                self.handleTouch([event]);
            }
        });
        document.addEventListener("mousedown", (event) => {
            self.mouseClicked = true;
            if (self.simulateTouchBasedOnMouse) {
                self.handleTouch([event]);
            }
        });
        document.addEventListener("mouseup", (event) => {
            self.mouseClicked = false;
            if (self.simulateTouchBasedOnMouse) {
                self.handleTouch([]);
            }
        });
        document.addEventListener("touchstart", function (event) {
            self.handleTouch(event.touches);
        });
        document.addEventListener("touchmove", function (event) {
            event.preventDefault();
            self.handleTouch(event.touches);
        });
        document.addEventListener("touchend", function (event) {
            self.handleTouch(event.touches);
        });
        //----------------
        this.joystickLeftDirection = new Vec2_1.default();
        this.joystickRightDirection = new Vec2_1.default();
        this.repositionTouchControls = false;
        this.joystickLeftRadius = 0.1; // 10 % of the width
        this.joystickRightRadius = 0.1; // 10 % of the width
        this.screenAspectRatio = 16 / 9;
        this.joystickLeftBorder = new TextObject2D_1.default();
        this.joystickLeftBorder.center = true;
        this.joystickLeftBorder.scaleWithWindow = true;
        this.joystickLeftBorder.position = new Vec2_1.default([0.15, 0.8]);
        this.joystickLeftBorder.size = 1920 * this.joystickLeftRadius * 2.0;
        this.joystickLeftBorder.textString = "⊕";
        this.joystickLeftBorder.getElement().style.opacity = "50%";
        this.joystickLeftBorder.setHidden(true);
        this.joystickLeftCenter = new TextObject2D_1.default();
        this.joystickLeftCenter.center = true;
        this.joystickLeftCenter.scaleWithWindow = true;
        this.joystickLeftCenter.position = new Vec2_1.default(this.joystickLeftBorder.position);
        this.joystickLeftCenter.size = 1920 * this.joystickLeftRadius;
        this.joystickLeftCenter.textString = "⚫";
        this.joystickLeftCenter.getElement().style.opacity = "50%";
        this.joystickLeftCenter.getElement().style.color = "red";
        this.joystickLeftCenter.setHidden(true);
        this.joystickRightBorder = new TextObject2D_1.default();
        this.joystickRightBorder.center = true;
        this.joystickRightBorder.scaleWithWindow = true;
        this.joystickRightBorder.position = new Vec2_1.default([0.85, 0.8]);
        this.joystickRightBorder.size = 1920 * this.joystickRightRadius * 2.0;
        this.joystickRightBorder.textString = "⊕";
        this.joystickRightBorder.getElement().style.opacity = "50%";
        this.joystickRightBorder.setHidden(true);
        this.joystickRightCenter = new TextObject2D_1.default();
        this.joystickRightCenter.center = true;
        this.joystickRightCenter.scaleWithWindow = true;
        this.joystickRightCenter.position = new Vec2_1.default(this.joystickRightBorder.position);
        this.joystickRightCenter.size = 1920 * this.joystickRightRadius;
        this.joystickRightCenter.textString = "⚫";
        this.joystickRightCenter.getElement().style.opacity = "50%";
        this.joystickRightCenter.getElement().style.color = "red";
        this.joystickRightCenter.setHidden(true);
        this.buttonRadius = 0.05; // 5 % of the width
        this.aButton = new TextObject2D_1.default();
        this.aButton.center = true;
        this.aButton.scaleWithWindow = true;
        this.aButton.position.x = 0.65;
        this.aButton.position.y = 0.8;
        this.aButton.size = 1920 * this.buttonRadius * 2.0;
        this.aButton.textString = "🔴";
        this.aButton.getElement().style.opacity = "50%";
        this.aButton.setHidden(true);
        this.bButton = new TextObject2D_1.default();
        this.bButton.center = true;
        this.bButton.scaleWithWindow = true;
        this.bButton.position.x = 0.75;
        this.bButton.position.y = 0.55;
        this.bButton.size = 1920 * this.buttonRadius * 2.0;
        this.bButton.textString = "🔵";
        this.bButton.getElement().style.opacity = "50%";
        this.bButton.setHidden(true);
    }
    mouseMoveCallBack(event) {
    }
    handleTouch(touches) {
        this.touchUsed = true;
        let joystickLeftBeingUsed = this.joystickLeftDirection.x != 0.0 ||
            this.joystickLeftDirection.y != 0.0;
        this.joystickLeftDirection.x = 0.0;
        this.joystickLeftDirection.y = 0.0;
        let joystickRightBeingUsed = this.joystickRightDirection.x != 0.0 ||
            this.joystickRightDirection.y != 0.0;
        this.joystickRightDirection.x = 0.0;
        this.joystickRightDirection.y = 0.0;
        for (const key of this.buttons.keys()) {
            this.buttons.set(key, false);
        }
        var paddingX = main_1.windowInfo.paddingX;
        var paddingY = main_1.windowInfo.paddingY;
        let width = main_1.windowInfo.resolutionWidth;
        let height = main_1.windowInfo.resolutionHeight;
        let joystickLeftRadiusInPixels = width * this.joystickLeftRadius;
        let joystickLeftCenter = new Vec2_1.default([
            paddingX + width * this.joystickLeftBorder.position.x,
            paddingY + height * this.joystickLeftBorder.position.y,
        ]); // In pixels
        let joystickRightRadiusInPixels = width * this.joystickRightRadius;
        let joystickRightCenter = new Vec2_1.default([
            paddingX + width * this.joystickRightBorder.position.x,
            paddingY + height * this.joystickRightBorder.position.y,
        ]); // In pixels
        let aButtonCenter = new Vec2_1.default([
            paddingX + width * this.aButton.position.x,
            paddingY + height * this.aButton.position.y,
        ]); // In pixels
        let bButtonCenter = new Vec2_1.default([
            paddingX + width * this.bButton.position.x,
            paddingY + height * this.bButton.position.y,
        ]); // In pixels
        for (let touch of touches) {
            let touchPos = new Vec2_1.default([touch.clientX, touch.clientY]);
            // Handle touches not related to joystickLeft here, break if they are fulfilled
            if (new Vec2_1.default(touchPos).subtract(aButtonCenter).len() <
                this.buttonRadius * width) {
                if (this.repositionTouchControls) {
                    this.aButton.position.x = (touchPos.x - paddingX) / width;
                    this.aButton.position.y = (touchPos.y - paddingY) / height;
                }
                else {
                    this.buttons.set("A", true);
                }
                continue;
            }
            if (new Vec2_1.default(touchPos).subtract(bButtonCenter).len() <
                this.buttonRadius * width) {
                if (this.repositionTouchControls) {
                    this.bButton.position.x = (touchPos.x - paddingX) / width;
                    this.bButton.position.y = (touchPos.y - paddingY) / height;
                }
                else {
                    this.buttons.set("B", true);
                }
                continue;
            }
            // Handle joystickLeft
            let joystickLeftDistanceFromCenter = new Vec2_1.default(touchPos).subtract(joystickLeftCenter);
            // If the joystickLeft was being used already, allow movement on the left size of the screen, otherwise allow movement within the joystickLeft border
            if ((joystickLeftBeingUsed ||
                joystickLeftDistanceFromCenter.len() < joystickLeftRadiusInPixels) &&
                touchPos.x < paddingX + width * 0.5) {
                if (this.repositionTouchControls) {
                    this.joystickLeftBorder.position.x = (touchPos.x - paddingX) / width;
                    this.joystickLeftBorder.position.y = (touchPos.y - paddingY) / height;
                }
                else {
                    this.joystickLeftDirection.x =
                        joystickLeftDistanceFromCenter.x / joystickLeftRadiusInPixels;
                    this.joystickLeftDirection.y =
                        joystickLeftDistanceFromCenter.y / joystickLeftRadiusInPixels;
                }
            }
            // Handle joystickRight
            let joystickRightDistanceFromCenter = new Vec2_1.default(touchPos).subtract(joystickRightCenter);
            // If the joystickRight was being used already, allow movement on the left size of the screen, otherwise allow movement within the joystickRight border
            if ((joystickRightBeingUsed ||
                joystickRightDistanceFromCenter.len() <
                    joystickRightRadiusInPixels) &&
                touchPos.x > paddingX + width * 0.5) {
                if (this.repositionTouchControls) {
                    this.joystickRightBorder.position.x = (touchPos.x - paddingX) / width;
                    this.joystickRightBorder.position.y =
                        (touchPos.y - paddingY) / height;
                }
                else {
                    this.joystickRightDirection.x =
                        joystickRightDistanceFromCenter.x / joystickRightRadiusInPixels;
                    this.joystickRightDirection.y =
                        joystickRightDistanceFromCenter.y / joystickRightRadiusInPixels;
                }
            }
        }
    }
    getMouseMovement() {
        let diff = new Vec2_1.default(this.mouseMovementSinceLast);
        this.mouseMovementSinceLast.setValues(0.0, 0.0);
        return diff;
    }
    updateGamepad() {
        if (window.isSecureContext) {
            this.gamepads = navigator.getGamepads();
            for (const gp of this.gamepads) {
                if (!gp) {
                    continue;
                }
                this.touchUsed = false;
                if (Math.abs(gp.axes[0]) > 0.1) {
                    this.joystickLeftDirection.x = gp.axes[0];
                }
                else {
                    this.joystickLeftDirection.x = 0.0;
                }
                if (Math.abs(gp.axes[1]) > 0.1) {
                    this.joystickLeftDirection.y = gp.axes[1];
                }
                else {
                    this.joystickLeftDirection.y = 0.0;
                }
                this.touchUsed = false;
                if (Math.abs(gp.axes[2]) > 0.1) {
                    this.joystickRightDirection.x = gp.axes[2];
                }
                else {
                    this.joystickRightDirection.x = 0.0;
                }
                if (Math.abs(gp.axes[3]) > 0.1) {
                    this.joystickRightDirection.y = gp.axes[3];
                }
                else {
                    this.joystickRightDirection.y = 0.0;
                }
                for (const key of this.buttons.keys()) {
                    this.buttons.set(key, false);
                }
                if (gp.buttons[0].value > 0.5) {
                    this.buttons.set("A", true);
                    console.log("Pressed A");
                }
                if (gp.buttons[1].value > 0.5) {
                    this.buttons.set("B", true);
                    console.log("Pressed B");
                }
            }
        }
    }
    drawTouchControls() {
        this.joystickLeftBorder.setHidden(!this.touchUsed);
        this.joystickLeftCenter.setHidden(!this.touchUsed);
        this.joystickRightBorder.setHidden(!this.touchUsed);
        this.joystickRightCenter.setHidden(!this.touchUsed);
        this.aButton.setHidden(!this.touchUsed);
        this.bButton.setHidden(!this.touchUsed);
        if (this.touchUsed) {
            this.joystickLeftCenter.position.x =
                this.joystickLeftBorder.position.x +
                    this.joystickLeftDirection.x * this.joystickLeftRadius;
            this.joystickLeftCenter.position.y =
                this.joystickLeftBorder.position.y +
                    this.joystickLeftDirection.y *
                        (this.joystickLeftRadius * this.screenAspectRatio) -
                    0.01;
            this.joystickRightCenter.position.x =
                this.joystickRightBorder.position.x +
                    this.joystickRightDirection.x * this.joystickRightRadius;
            this.joystickRightCenter.position.y =
                this.joystickRightBorder.position.y +
                    this.joystickRightDirection.y *
                        (this.joystickRightRadius * this.screenAspectRatio) -
                    0.01;
            this.joystickLeftBorder.draw();
            this.joystickLeftCenter.draw();
            this.joystickRightBorder.draw();
            this.joystickRightCenter.draw();
            this.aButton.draw();
            this.bButton.draw();
        }
    }
}
exports.default = Input;
//# sourceMappingURL=Input.js.map