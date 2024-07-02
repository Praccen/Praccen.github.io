"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec2_1 = require("../Maths/Vec2");
const GuiObject_1 = require("./GuiObject");
class Slider extends GuiObject_1.default {
    constructor() {
        super("floating-div");
        this.position = new Vec2_1.default();
        this.textSize = 42;
        // make an input node and a label node
        this.inputNode = document.createElement("input");
        this.inputNode.type = "range";
        this.label = document.createElement("label");
        this.label.textContent = this.textString;
        this.div.appendChild(this.label);
        this.div.appendChild(this.inputNode);
    }
    getElement() {
        return this.div;
    }
    getInputElement() {
        return this.inputNode;
    }
    getValue() {
        return Number(this.inputNode.value);
    }
    draw() {
        this.position2D = this.position;
        this.fontSize = this.textSize;
        this.label.textContent = this.textString;
        this.drawObject();
    }
}
exports.default = Slider;
//# sourceMappingURL=Slider.js.map