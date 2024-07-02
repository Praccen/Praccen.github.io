"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec2_1 = require("../../Maths/Vec2");
const GuiObject_1 = require("../GuiObject");
class TextObject2D extends GuiObject_1.default {
    constructor() {
        super("floating-div");
        this.position = new Vec2_1.default();
        this.size = 42;
        // make a text node for its content
        this.textNode = document.createTextNode("");
        this.div.appendChild(this.textNode);
    }
    draw() {
        this.position2D = this.position;
        this.fontSize = this.size;
        this.textNode.textContent = this.textString;
        this.drawObject();
    }
}
exports.default = TextObject2D;
//# sourceMappingURL=TextObject2D.js.map