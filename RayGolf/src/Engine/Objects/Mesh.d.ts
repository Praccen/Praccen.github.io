import GraphicsObject from "./GraphicsObject";
import ShaderProgram from "../Rendering/ShaderPrograms/ShaderProgram";
import Triangle from "../Physics/Shapes/Triangle";
import { vec3 } from "gl-matrix";
export default class Mesh extends GraphicsObject {
    protected vertices: Float32Array;
    constructor(shaderProgram: ShaderProgram, vertices: Float32Array);
    setupTriangles(triangles: Array<Triangle>): void;
    getVertexPositions(): Array<vec3>;
    draw(): void;
}
