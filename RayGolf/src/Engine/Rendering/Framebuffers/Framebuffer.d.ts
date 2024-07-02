import Texture from "../Textures/Texture";
export default class Framebuffer {
    textures: Array<Texture>;
    depthTexture: Texture;
    protected rbo: WebGLRenderbuffer;
    protected fbo: WebGLFramebuffer;
    protected width: number;
    protected height: number;
    /**
     * @param width - width of framebuffer textures
     * @param height - height of framebuffer textures
     * @param textures - colour attachment textures, send empty array if no colour attachments should be used
     * @param depthTexture - depth attachment texture, send null if no depth attachment (an rbo will be created instead)
     */
    constructor(width: number, height: number, textures: Array<Texture>, depthTexture: Texture);
    protected setupAttachments(): void;
    /**
     * Will setup the framebuffer to the given width and height, including resizing (and clearing) all textures (both normal render textures and depth texture)
     * For cubemaps all sides will be cleared and resized
     * @param width New width of the framebuffer
     * @param height New height of the framebuffer
     */
    setProportions(width: number, height: number): void;
    /**
     * Bind this framebuffer to the sent in target
     * @param target framebuffer target (for example gl.FRAMEBUFFER, gl.DRAW_FRAMEBUFFER, gl.READ_FRAMEBUFFER)
     */
    bind(target: number): void;
}
