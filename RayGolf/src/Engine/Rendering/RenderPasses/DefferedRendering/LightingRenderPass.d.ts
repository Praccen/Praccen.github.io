import Camera from "../../../Objects/Camera";
import Framebuffer from "../../Framebuffers/Framebuffer";
import Texture from "../../Textures/Texture";
import Scene from "../../Scene";
export default class LightingRenderPass {
    private screenQuad;
    outputFramebuffer: Framebuffer;
    constructor(inputTextures: Texture[]);
    setResolution(x: number, y: number): void;
    draw(scene: Scene, camera: Camera): void;
}
