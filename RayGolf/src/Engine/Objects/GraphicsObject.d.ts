import { vec3 } from "gl-matrix";
import Triangle from "../Physics/Shapes/Triangle";
import ShaderProgram from "../Rendering/ShaderPrograms/ShaderProgram";
export default class GraphicsObject {
    shaderProgram: ShaderProgram;
    private VAO;
    private VBO;
    private EBO;
    constructor(shaderProgram: ShaderProgram);
    init(): void;
    bindVAO(): void;
    unbindVAO(): void;
    setVertexData(data: Float32Array): void;
    setIndexData(data: Int32Array): void;
    setupTriangles(triangles: Array<Triangle>): void;
    getVertexPositions(): Array<vec3>;
    draw(): void;
}
