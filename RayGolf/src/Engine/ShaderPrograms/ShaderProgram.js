"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
class ShaderProgram {
    constructor(shaderProgramName, vertexShaderName, fragmentShaderName, debugShaderCompilation = false) {
        this.shaderProgram = null;
        this.loadShaders(shaderProgramName, vertexShaderName, fragmentShaderName, debugShaderCompilation);
        this.uniformBindings = new Map();
    }
    loadShaders(shaderProgramName, vertexShaderString, fragmentShaderString, debugShaderCompilation) {
        // link shaders
        if (this.shaderProgram != null) {
            main_1.gl.deleteProgram(this.shaderProgram); // Delete in case this is not the first time this shader is created.
        }
        console.log("Compiling shader program: " + shaderProgramName);
        // vertex shader
        const vertexShader = main_1.gl.createShader(main_1.gl.VERTEX_SHADER);
        main_1.gl.shaderSource(vertexShader, vertexShaderString);
        main_1.gl.compileShader(vertexShader);
        // Check for shader compile errors
        if (!main_1.gl.getShaderParameter(vertexShader, main_1.gl.COMPILE_STATUS) ||
            debugShaderCompilation) {
            console.log("Vertex shader compiled successfully: " +
                main_1.gl.getShaderParameter(vertexShader, main_1.gl.COMPILE_STATUS));
            console.log("Vertex shader compiler log: \n" + main_1.gl.getShaderInfoLog(vertexShader));
        }
        // fragment shader
        const fragmentShader = main_1.gl.createShader(main_1.gl.FRAGMENT_SHADER);
        main_1.gl.shaderSource(fragmentShader, fragmentShaderString);
        main_1.gl.compileShader(fragmentShader);
        // Check for shader compile errors
        if (!main_1.gl.getShaderParameter(fragmentShader, main_1.gl.COMPILE_STATUS) ||
            debugShaderCompilation) {
            console.log("Fragment shader compiled successfully: " +
                main_1.gl.getShaderParameter(fragmentShader, main_1.gl.COMPILE_STATUS));
            console.log("Fragment shader compiler log: \n" + main_1.gl.getShaderInfoLog(fragmentShader));
        }
        this.shaderProgram = main_1.gl.createProgram();
        main_1.gl.attachShader(this.shaderProgram, vertexShader);
        main_1.gl.attachShader(this.shaderProgram, fragmentShader);
        main_1.gl.linkProgram(this.shaderProgram);
        // Check for linking errors?
        let linkedShaders = main_1.gl.getProgramParameter(this.shaderProgram, main_1.gl.LINK_STATUS);
        if (!linkedShaders || debugShaderCompilation) {
            console.log("Linked shaders successfully: " + linkedShaders);
            console.log("Linking shaders log: \n" + main_1.gl.getProgramInfoLog(this.shaderProgram));
        }
        // Delete shaders now that they have been made into a program
        main_1.gl.deleteShader(vertexShader);
        main_1.gl.deleteShader(fragmentShader);
    }
    use() {
        main_1.gl.useProgram(this.shaderProgram);
    }
    setupVertexAttributePointers() {
        // TODO: Pure virtual possible?
    }
    setupInstancedVertexAttributePointers() { }
    setUniformLocation(uniformName) {
        this.uniformBindings.set(uniformName, main_1.gl.getUniformLocation(this.shaderProgram, uniformName));
    }
    getUniformLocation(uniformName) {
        if (this.uniformBindings.has(uniformName)) {
            return [this.uniformBindings.get(uniformName), true];
        }
        // console.log("No uniform with name " + uniformName + "\n");
        return [0, false];
    }
}
exports.default = ShaderProgram;
// ShaderProgram::~ShaderProgram() {
//     glDeleteProgram(p_shaderProgram);
// }
//# sourceMappingURL=ShaderProgram.js.map