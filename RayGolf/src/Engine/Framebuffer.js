"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
class Framebuffer {
    /**
     *
     * @param width - width of framebuffer textures
     * @param height - height of framebuffer textures
     * @param textures - colour attachment textures, send empty array if no colour attachments should be used
     * @param depthTexture - depth attachment texture, send null if no depth attachment (an rbo will be created instead)
     */
    constructor(width, height, textures, depthTexture) {
        this.width = width;
        this.height = height;
        this.textures = textures;
        this.depthTexture = depthTexture;
        this.fbo = main_1.gl.createFramebuffer();
        main_1.gl.bindFramebuffer(main_1.gl.FRAMEBUFFER, this.fbo);
        this.setupAttachments();
        if (main_1.gl.checkFramebufferStatus(main_1.gl.FRAMEBUFFER) != main_1.gl.FRAMEBUFFER_COMPLETE) {
            console.warn("ERROR::FRAMEBUFFER:: Framebuffer is not complete!");
        }
        main_1.gl.bindFramebuffer(main_1.gl.FRAMEBUFFER, null);
    }
    setupAttachments() {
        let attachments = new Array();
        for (let i = 0; i < this.textures.length; i++) {
            this.textures[i].setTextureData(null, this.width, this.height);
            this.textures[i].setTexParameterI(main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.LINEAR);
            this.textures[i].setTexParameterI(main_1.gl.TEXTURE_MAG_FILTER, main_1.gl.LINEAR);
            this.textures[i].setTexParameterI(main_1.gl.TEXTURE_WRAP_S, main_1.gl.CLAMP_TO_EDGE);
            this.textures[i].setTexParameterI(main_1.gl.TEXTURE_WRAP_T, main_1.gl.CLAMP_TO_EDGE);
            main_1.gl.framebufferTexture2D(main_1.gl.FRAMEBUFFER, main_1.gl.COLOR_ATTACHMENT0 + i, main_1.gl.TEXTURE_2D, this.textures[i].texture, 0);
            attachments.push(main_1.gl.COLOR_ATTACHMENT0 + i);
        }
        main_1.gl.drawBuffers(attachments);
        // More choices here would be good, not only texture or renderbuffer
        if (this.depthTexture != undefined) {
            this.depthTexture.setTextureData(null, this.width, this.height);
            main_1.gl.framebufferTexture2D(main_1.gl.FRAMEBUFFER, main_1.gl.DEPTH_ATTACHMENT, main_1.gl.TEXTURE_2D, this.depthTexture.texture, 0);
        }
        else {
            this.rbo = main_1.gl.createRenderbuffer();
            main_1.gl.bindRenderbuffer(main_1.gl.RENDERBUFFER, this.rbo);
            main_1.gl.renderbufferStorage(main_1.gl.RENDERBUFFER, main_1.gl.DEPTH_STENCIL, this.width, this.height);
            main_1.gl.framebufferRenderbuffer(main_1.gl.FRAMEBUFFER, main_1.gl.DEPTH_STENCIL_ATTACHMENT, main_1.gl.RENDERBUFFER, this.rbo);
        }
    }
    setProportions(width, height) {
        this.width = width;
        this.height = height;
        for (let texture of this.textures) {
            texture.setTextureData(null, this.width, this.height);
        }
        if (this.depthTexture) {
            this.depthTexture.setTextureData(null, this.width, this.height);
        }
        if (this.rbo) {
            main_1.gl.bindFramebuffer(main_1.gl.FRAMEBUFFER, this.fbo);
            main_1.gl.bindRenderbuffer(main_1.gl.RENDERBUFFER, this.rbo);
            main_1.gl.renderbufferStorage(main_1.gl.RENDERBUFFER, main_1.gl.DEPTH24_STENCIL8, width, height);
            main_1.gl.bindFramebuffer(main_1.gl.FRAMEBUFFER, null);
        }
    }
    bind(target) {
        main_1.gl.bindFramebuffer(target, this.fbo);
    }
}
exports.default = Framebuffer;
//# sourceMappingURL=Framebuffer.js.map