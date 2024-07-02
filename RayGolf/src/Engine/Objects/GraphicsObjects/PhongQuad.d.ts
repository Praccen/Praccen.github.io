import GraphicsObject from "./GraphicsObject";
import ShaderProgram from "../../Rendering/ShaderPrograms/ShaderProgram";
import Triangle from "../../Physics/Shapes/Triangle";
import { vec3 } from "gl-matrix";
export default class PhongQuad extends GraphicsObject {
    private vertices;
    private indices;
    constructor(shaderProgram: ShaderProgram);
    setupTriangles(triangles: Array<Triangle>): void;
    getVertexPositions(): Array<vec3>;
    draw(): void;
}
