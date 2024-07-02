"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
class GraphicsObject {
    constructor(shaderProgram) {
        this.shaderProgram = shaderProgram;
        this.VAO = null;
        this.VBO = null;
        this.EBO = null; // Optional
        this.init();
    }
    init() {
        // Create buffers
        this.VAO = main_1.gl.createVertexArray();
        this.VBO = main_1.gl.createBuffer();
        this.EBO = main_1.gl.createBuffer();
        // Bind buffers
        main_1.gl.bindVertexArray(this.VAO);
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.VBO);
        this.shaderProgram.setupVertexAttributePointers();
        main_1.gl.bindVertexArray(null);
    }
    // changeShaderProgram(shaderProgram) {
    // 	this.shaderProgram = shaderProgram;
    // }
    bindVAO() {
        main_1.gl.bindVertexArray(this.VAO);
    }
    unbindVAO() {
        main_1.gl.bindVertexArray(null);
    }
    setVertexData(data) {
        main_1.gl.bindVertexArray(this.VAO);
        main_1.gl.bindBuffer(main_1.gl.ARRAY_BUFFER, this.VBO);
        main_1.gl.bufferData(main_1.gl.ARRAY_BUFFER, data, main_1.gl.STATIC_DRAW);
        main_1.gl.bindVertexArray(null);
    }
    setIndexData(data) {
        main_1.gl.bindVertexArray(this.VAO);
        main_1.gl.bindBuffer(main_1.gl.ELEMENT_ARRAY_BUFFER, this.EBO);
        main_1.gl.bufferData(main_1.gl.ELEMENT_ARRAY_BUFFER, data, main_1.gl.STATIC_DRAW);
        main_1.gl.bindVertexArray(null);
    }
    setupTriangles(triangles) { }
    getVertexPositions() {
        return null;
    }
    draw() {
        // Can this be virtual?
    }
}
exports.default = GraphicsObject;
//# sourceMappingURL=GraphicsObject.js.map