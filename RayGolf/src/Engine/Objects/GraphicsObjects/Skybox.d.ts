import GraphicsObject from "./GraphicsObject";
import ShaderProgram from "../../Rendering/ShaderPrograms/ShaderProgram";
import CubeMap from "../../Rendering/Textures/CubeMap";
export default class Skybox extends GraphicsObject {
    texture: CubeMap;
    private vertices;
    private indices;
    constructor(shaderProgram: ShaderProgram, texture: CubeMap);
    draw(): void;
}
