"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const Vec2_1 = require("../Maths/Vec2");
class GuiObject {
    constructor(cssClass) {
        this.removed = false;
        this.position2D = new Vec2_1.default();
        this.fontSize = 42;
        this.scaleWithWindow = true;
        this.textString = "";
        this.center = false;
        // look up the guicontainer
        this.divContainerElement = (document.getElementById("guicontainer"));
        // make the div
        this.div = document.createElement("div");
        // assign it a CSS class
        this.div.className = cssClass;
        // add it to the divcontainer
        this.divContainerElement.appendChild(this.div);
    }
    getElement() {
        return this.div;
    }
    setHidden(hidden) {
        this.div.hidden = hidden;
    }
    remove() {
        this.div.remove();
        this.removed = true;
    }
    drawObject() {
        this.div.style.left = this.position2D.x * 100 + "%";
        this.div.style.top = this.position2D.y * 100 + "%";
        if (this.scaleWithWindow) {
            this.div.style.fontSize =
                this.fontSize * (main_1.windowInfo.resolutionHeight / 1080.0) + "px";
        }
        else {
            this.div.style.fontSize = this.fontSize + "px";
        }
        if (this.center) {
            this.div.style.transform = "translate(-50%,-50%)";
        }
    }
    draw() { }
}
exports.default = GuiObject;
//# sourceMappingURL=GuiObject.js.map