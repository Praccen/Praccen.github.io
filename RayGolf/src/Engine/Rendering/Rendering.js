"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const GameMachine_1 = require("../../Game/GameMachine");
const Framebuffer_1 = require("../Framebuffer");
const Texture_1 = require("../Textures/Texture");
const Camera_1 = require("../Camera");
const ShadowRenderPass_1 = require("./RenderPasses/ShadowRenderPass");
const CRTRenderPass_1 = require("./RenderPasses/CRTRenderPass");
const BloomRenderPass_1 = require("./RenderPasses/BloomRenderPass");
const SkyboxRenderPass_1 = require("./RenderPasses/SkyboxRenderPass");
const GeometryRenderPass_1 = require("./RenderPasses/GeometryRenderPass");
const LightingRenderPass_1 = require("./RenderPasses/LightingRenderPass");
const ParticleRenderPass_1 = require("./RenderPasses/ParticleRenderPass");
const FinishedOutputRenderPass_1 = require("./RenderPasses/FinishedOutputRenderPass");
class Rendering {
    constructor(textureStore, scene) {
        this.textureStore = textureStore;
        this.scene = scene;
        this.shadowRenderPass = new ShadowRenderPass_1.default();
        this.camera = new Camera_1.default(main_1.gl);
        this.resolutionWidth = main_1.windowInfo.resolutionWidth;
        this.resolutionHeight = main_1.windowInfo.resolutionHeight;
        // ---- Deferred rendering ----
        this.geometryRenderPass = new GeometryRenderPass_1.default();
        let textureArray = new Array();
        for (let i = 0; i < this.geometryRenderPass.outputFramebuffer.textures.length; i++) {
            textureArray.push(this.geometryRenderPass.outputFramebuffer.textures[i]);
        }
        textureArray.push(this.shadowRenderPass.shadowBuffer.depthTexture);
        this.lightingRenderPass = new LightingRenderPass_1.default(textureArray);
        // ----------------------------
        // ---- Particles ----
        this.particleRenderPass = new ParticleRenderPass_1.default();
        // -------------------
        // ---- Skybox ----
        this.useSkybox = false;
        this.skyboxRenderPass = new SkyboxRenderPass_1.default();
        // ----------------
        // ---- Post processing ----
        // Crt effect
        this.useCrt = GameMachine_1.options.useCrt;
        this.crtFramebuffer = new Framebuffer_1.default(this.resolutionWidth, this.resolutionHeight, [new Texture_1.default(false)], null);
        this.crtRenderPass = new CRTRenderPass_1.default(this.crtFramebuffer.textures);
        // Bloom
        this.bloomExtractionInputFramebuffer = new Framebuffer_1.default(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight, [new Texture_1.default(false)], null);
        this.bloomRenderPass = new BloomRenderPass_1.default(this.bloomExtractionInputFramebuffer.textures);
        this.useBloom = GameMachine_1.options.useBloom;
        // -------------------------¨
        this.finishedFramebuffer = new Framebuffer_1.default(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight, [new Texture_1.default(false)], null);
        this.finishedOutputRenderPass = new FinishedOutputRenderPass_1.default(this.finishedFramebuffer.textures);
        this.initGL();
    }
    initGL() {
        this.clearColour = { r: 0.15, g: 0.1, b: 0.1, a: 1.0 };
        main_1.gl.clearColor(this.clearColour.r, this.clearColour.g, this.clearColour.b, this.clearColour.a);
        // Enable depth test
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
        //Enable alpha blending
        // gl.enable(gl.BLEND);
        // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        main_1.gl.disable(main_1.gl.BLEND);
        // Disable faceculling
        main_1.gl.cullFace(main_1.gl.BACK);
        main_1.gl.disable(main_1.gl.CULL_FACE);
    }
    reportCanvasResize(x, y) {
        this.resolutionWidth = x;
        this.resolutionHeight = y;
        this.geometryRenderPass.setResolution(x, y);
        this.crtFramebuffer.setProportions(x, y);
        this.finishedFramebuffer.setProportions(x, y);
        this.bloomExtractionInputFramebuffer.setProportions(x, y);
        this.bloomRenderPass.setResolution(x, y);
    }
    setSkybox(path) {
        this.skyboxRenderPass.setSkybox(this.textureStore.getCubeMap(path));
        this.useSkybox = true;
    }
    draw() {
        if (this.resolutionWidth != main_1.windowInfo.resolutionWidth ||
            this.resolutionHeight != main_1.windowInfo.resolutionHeight) {
            this.reportCanvasResize(main_1.windowInfo.resolutionWidth, main_1.windowInfo.resolutionHeight);
        }
        main_1.gl.enable(main_1.gl.DEPTH_TEST);
        // ---- Shadow pass ----
        this.shadowRenderPass.draw(this.scene, this.camera);
        // ---------------------
        // ---- Geometry pass ----
        this.geometryRenderPass.draw(this.scene, this.camera);
        // -----------------------
        // Geometry pass over, appropriate framebuffer for post processing or render directly to screen.
        if (this.useBloom) {
            this.bloomExtractionInputFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        }
        else if (this.useCrt) {
            this.crtFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        }
        else {
            this.finishedFramebuffer.bind(main_1.gl.DRAW_FRAMEBUFFER);
        }
        // Clear the output with the actual clear colour we have set
        main_1.gl.clearColor(this.clearColour.r, this.clearColour.g, this.clearColour.b, this.clearColour.a);
        main_1.gl.clear(main_1.gl.COLOR_BUFFER_BIT | main_1.gl.DEPTH_BUFFER_BIT | main_1.gl.STENCIL_BUFFER_BIT);
        // ---- Lighting pass ----
        this.lightingRenderPass.draw(this.scene, this.camera);
        // -----------------------
        // Copy the depth buffer information from the gBuffer to the current depth buffer
        this.geometryRenderPass.outputFramebuffer.bind(main_1.gl.READ_FRAMEBUFFER);
        main_1.gl.blitFramebuffer(0, 0, this.resolutionWidth, this.resolutionHeight, 0, 0, this.resolutionWidth, this.resolutionHeight, main_1.gl.DEPTH_BUFFER_BIT, main_1.gl.NEAREST);
        // ---- Particles ----
        this.particleRenderPass.draw(this.scene, this.camera);
        // -------------------
        // ---- Skybox ----
        if (this.useSkybox) {
            this.skyboxRenderPass.draw(this.camera);
        }
        // ----------------
        // ---- Post processing ----
        if (this.useBloom) {
            if (this.useCrt) {
                this.bloomRenderPass.outputFramebuffer = this.crtFramebuffer;
            }
            else {
                this.bloomRenderPass.outputFramebuffer = null;
            }
            this.bloomRenderPass.draw();
        }
        if (this.useCrt) {
            this.crtRenderPass.draw();
        }
        // -------------------------
        if (!this.useCrt && !this.useBloom) {
            this.finishedOutputRenderPass.draw();
        }
    }
}
exports.default = Rendering;
//# sourceMappingURL=Rendering.js.map