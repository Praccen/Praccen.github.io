import { vec3 } from "gl-matrix";
import ShaderProgram from "../ShaderPrograms/ShaderProgram";
export default class DirectionalLight {
    direction: vec3;
    colour: vec3;
    ambientMultiplier: number;
    lightProjectionBoxSideLength: number;
    private gl;
    private shaderProgram;
    constructor(gl: WebGL2RenderingContext, shaderProgram: ShaderProgram);
    bind(): void;
    calcAndSendLightSpaceMatrix(focusPos: vec3, offset: number, uniformLocation: WebGLUniformLocation): void;
}
