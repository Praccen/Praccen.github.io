import GraphicsObject from "./GraphicsObject";
import Texture from "../Rendering/Textures/Texture";
import ShaderProgram from "../Rendering/ShaderPrograms/ShaderProgram";
export default class ScreenQuad extends GraphicsObject {
    textures: Array<Texture>;
    private vertices;
    private indices;
    constructor(shaderProgram: ShaderProgram, textures: Array<Texture>);
    draw(bindTextures?: boolean): void;
}
