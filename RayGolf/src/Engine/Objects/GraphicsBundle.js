"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const Texture_1 = require("../Textures/Texture");
class GraphicsBundle {
    constructor(diffuse, specular, graphicsObject, emissionMap) {
        this.diffuse = diffuse;
        this.specular = specular;
        if (emissionMap != undefined) {
            this.emission = emissionMap;
        }
        else {
            this.emission = new Texture_1.default();
            this.emission.setTextureData(new Uint8Array([0.0, 0.0, 0.0, 0.0]), 1, 1);
        }
        this.baseColor = new Vector3([0, 0, 0]);
        this.modelMatrix = new Matrix4(null);
        this.textureMatrix = new Matrix4(null);
        this.graphicsObject = graphicsObject;
    }
    draw(bindSpecialTextures = true) {
        this.diffuse.bind(0);
        if (bindSpecialTextures) {
            this.specular.bind(1);
            this.emission.bind(2);
        }
        let baseColor = this.graphicsObject.shaderProgram.getUniformLocation("baseColor");
        if (baseColor[1]) {
            main_1.gl.uniform3fv(baseColor[0], this.baseColor.elements);
        }
        let modelReturn = this.graphicsObject.shaderProgram.getUniformLocation("modelMatrix");
        if (modelReturn[1]) {
            main_1.gl.uniformMatrix4fv(modelReturn[0], false, this.modelMatrix.elements);
        }
        let textureReturn = this.graphicsObject.shaderProgram.getUniformLocation("textureMatrix");
        if (textureReturn[1]) {
            main_1.gl.uniformMatrix4fv(textureReturn[0], false, this.textureMatrix.elements);
        }
        this.graphicsObject.draw();
    }
}
exports.default = GraphicsBundle;
//# sourceMappingURL=GraphicsBundle.js.map