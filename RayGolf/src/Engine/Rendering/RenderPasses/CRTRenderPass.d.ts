import Framebuffer from "../Framebuffers/Framebuffer";
import Texture from "../Textures/Texture";
export default class CRTRenderPass {
    private screenQuad;
    outputFramebuffer: Framebuffer;
    constructor(inputTextures: Texture[]);
    private bindFramebuffers;
    draw(): void;
}
