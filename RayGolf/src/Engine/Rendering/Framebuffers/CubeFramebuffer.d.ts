import CubeMap from "../Textures/CubeMap.js";
import Framebuffer from "./Framebuffer.js";
export default class CubeFramebuffer extends Framebuffer {
    constructor(width: number, height: number, texture: CubeMap, depthCube: CubeMap);
    protected setupAttachments(): void;
}
