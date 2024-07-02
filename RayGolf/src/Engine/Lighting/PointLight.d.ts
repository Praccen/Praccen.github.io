import { vec3 } from "gl-matrix";
import ShaderProgram from "../ShaderPrograms/ShaderProgram";
export default class PointLight {
    position: vec3;
    colour: vec3;
    constant: number;
    linear: number;
    quadratic: number;
    private gl;
    private shaderProgram;
    constructor(gl: WebGL2RenderingContext, shaderProgram: ShaderProgram);
    bind(lightIndex: number): void;
}
