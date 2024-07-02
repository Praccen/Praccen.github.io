"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec3_1 = require("../../Maths/Vec3");
const GuiObject_1 = require("../GuiObject");
class TextObject3D extends GuiObject_1.default {
    constructor() {
        super("floating-div");
        this.position = new Vec3_1.default();
        this.size = 42;
        this.scaleFontWithDistance = true;
        // make a text node for its content
        this.textNode = document.createTextNode("");
        this.div.appendChild(this.textNode);
    }
    draw3D(viewProj) {
        let pos = new Vector4([
            this.position.x,
            this.position.y,
            this.position.z,
            1.0,
        ]);
        let screenCoords = viewProj.multiplyVector4(pos);
        screenCoords.elements[0] =
            (screenCoords.elements[0] / screenCoords.elements[3] + 1.0) / 2.0;
        screenCoords.elements[1] =
            1.0 - (screenCoords.elements[1] / screenCoords.elements[3] + 1.0) / 2.0;
        if (screenCoords.elements[2] > 0.0) {
            this.position2D.x = screenCoords.elements[0];
            this.position2D.y = screenCoords.elements[1];
            let size = this.size;
            if (this.scaleFontWithDistance) {
                size = this.size / screenCoords.elements[2];
            }
            this.fontSize = size;
            this.div.hidden = false;
            this.textNode.textContent = this.textString;
            this.drawObject();
        }
        else {
            this.div.hidden = true;
        }
    }
}
exports.default = TextObject3D;
//# sourceMappingURL=TextObject3D.js.map