import { mat4, vec3 } from "gl-matrix";
import Texture from "../Rendering/Textures/Texture";
import GraphicsObject from "./GraphicsObjects/GraphicsObject";
export default class GraphicsBundle {
    modelMatrix: mat4;
    textureMatrix: mat4;
    diffuse: Texture;
    specular: Texture;
    emission: Texture;
    emissionColor: vec3;
    graphicsObject: GraphicsObject;
    constructor(diffuse: Texture, specular: Texture, graphicsObject: GraphicsObject, emissionMap?: Texture);
    draw(bindSpecialTextures?: boolean): void;
}
