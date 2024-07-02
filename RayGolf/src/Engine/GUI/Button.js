"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec2_1 = require("../Maths/Vec2");
const GuiObject_1 = require("./GuiObject");
class Button extends GuiObject_1.default {
    constructor() {
        super("floating-div");
        this.position = new Vec2_1.default();
        this.textSize = 42;
        // make an input node and a label node
        this.inputNode = document.createElement("input");
        this.inputNode.type = "button";
        this.inputNode.className = "button";
        this.div.appendChild(this.inputNode);
    }
    getElement() {
        return this.div;
    }
    getInputElement() {
        return this.inputNode;
    }
    onClick(fn) {
        this.inputNode.addEventListener("click", fn);
    }
    draw() {
        this.position2D = this.position;
        this.inputNode.value = this.textString;
        this.fontSize = this.textSize;
        this.drawObject();
    }
}
exports.default = Button;
//# sourceMappingURL=Button.js.map