import Camera from "../../Objects/Camera";
import Scene from "../Scene";
import Framebuffer from "../Framebuffers/Framebuffer";
import Texture from "../Textures/Texture";
export default class ParticleRenderPass {
    outputBuffer: Framebuffer;
    private textures;
    private screenQuad;
    constructor(inputTextures: Texture[]);
    private bindFramebuffers;
    draw(scene: Scene, camera: Camera): void;
}
