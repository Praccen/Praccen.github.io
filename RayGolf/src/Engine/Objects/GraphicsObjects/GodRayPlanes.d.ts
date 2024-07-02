import GraphicsObject from "./GraphicsObject";
import ShaderProgram from "../../Rendering/ShaderPrograms/ShaderProgram";
export default class GodRayPlanes extends GraphicsObject {
    private numPlanes;
    private fogMaxDistance;
    private vertices;
    private indices;
    constructor(shaderProgram: ShaderProgram);
    draw(): void;
}
