"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GuiObject_1 = require("./GuiObject");
const Vec2_1 = require("../Maths/Vec2");
class Progress extends GuiObject_1.default {
    constructor() {
        super("floating-div");
        this.position = new Vec2_1.default();
        this.size = 42;
        // make a text node for its content
        this.progressNode = document.createElement("progress");
        this.div.appendChild(this.progressNode);
    }
    getProgressElement() {
        return this.progressNode;
    }
    draw() {
        this.position2D = this.position;
        this.fontSize = this.size;
        this.progressNode.textContent = this.textString;
        this.drawObject();
    }
}
exports.default = Progress;
//# sourceMappingURL=Progress.js.map