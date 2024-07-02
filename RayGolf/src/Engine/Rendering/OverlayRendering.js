"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverlayRendering = void 0;
const Button_1 = require("../GUI/Button");
const Checkbox_1 = require("../GUI/Checkbox");
const Progress_1 = require("../GUI/Progress");
const Slider_1 = require("../GUI/Slider");
const TextObject2D_1 = require("../GUI/Text/TextObject2D");
const TextObject3D_1 = require("../GUI/Text/TextObject3D");
class OverlayRendering {
    // -----------------------
    constructor(camera = null) {
        this.camera = camera;
        // ---- GUI rendering ----
        this.guiObjects3D = new Array();
        this.guiObjects2D = new Array();
        // -----------------------
    }
    clear() {
        for (let guiObject2D of this.guiObjects2D) {
            guiObject2D.remove();
        }
        for (let guiObject3D of this.guiObjects3D) {
            guiObject3D.remove();
        }
    }
    hide() {
        for (let guiObject2D of this.guiObjects2D) {
            guiObject2D.setHidden(true);
        }
        for (let guiObject3D of this.guiObjects3D) {
            guiObject3D.setHidden(true);
        }
    }
    show() {
        for (let guiObject2D of this.guiObjects2D) {
            guiObject2D.setHidden(false);
        }
        for (let guiObject3D of this.guiObjects3D) {
            guiObject3D.setHidden(false);
        }
    }
    getNew2DText() {
        const length = this.guiObjects2D.push(new TextObject2D_1.default());
        return this.guiObjects2D[length - 1];
    }
    getNew3DText() {
        const length = this.guiObjects3D.push(new TextObject3D_1.default());
        return this.guiObjects3D[length - 1];
    }
    getNewCheckbox() {
        const length = this.guiObjects2D.push(new Checkbox_1.default());
        return this.guiObjects2D[length - 1];
    }
    getNewButton() {
        const length = this.guiObjects2D.push(new Button_1.default());
        return this.guiObjects2D[length - 1];
    }
    getNewSlider() {
        const length = this.guiObjects2D.push(new Slider_1.default());
        return this.guiObjects2D[length - 1];
    }
    getNewProgress() {
        const length = this.guiObjects2D.push(new Progress_1.default());
        return this.guiObjects2D[length - 1];
    }
    draw() {
        // ---- GUI rendering ----
        if (this.camera != undefined) {
            for (let i = 0; i < this.guiObjects3D.length; i++) {
                if (!this.guiObjects3D[i].removed) {
                    this.guiObjects3D[i].draw3D(this.camera.getViewProjMatrix());
                }
                else {
                    this.guiObjects3D.splice(i, 1);
                    i--;
                }
            }
        }
        for (let i = 0; i < this.guiObjects2D.length; i++) {
            if (!this.guiObjects2D[i].removed) {
                this.guiObjects2D[i].draw();
            }
            else {
                this.guiObjects2D.splice(i, 1);
                i--;
            }
        }
        // -----------------------
    }
}
exports.OverlayRendering = OverlayRendering;
//# sourceMappingURL=OverlayRendering.js.map