"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const DirectionalLight_1 = require("../Lighting/DirectionalLight");
const PointLight_1 = require("../Lighting/PointLight");
const GraphicsBundle_1 = require("../Objects/GraphicsBundle");
const GrassSpawner_1 = require("../Objects/GrassSpawner");
const ParticleSpawner_1 = require("../Objects/ParticleSpawner");
const PhongQuad_1 = require("../Objects/PhongQuad");
const GeometryPass_1 = require("../ShaderPrograms/DeferredRendering/GeometryPass");
const LightingPass_1 = require("../ShaderPrograms/DeferredRendering/LightingPass");
const GrassShaderProgram_1 = require("../ShaderPrograms/GrassShaderProgram");
const ParticleShaderProgram_1 = require("../ShaderPrograms/ParticleShaderProgram");
class Scene {
    constructor(textureStore, meshStore) {
        this.textureStore = textureStore;
        this.meshStore = meshStore;
        // ---- Graphics objects ----
        this.graphicBundles = new Array();
        this.grassSpawners = new Array();
        // --------------------------
        // ---- Lighting ----
        this.directionalLight = new DirectionalLight_1.default(main_1.gl, LightingPass_1.lightingPass);
        this.pointLights = new Array();
        // ------------------
        // ---- Particles ----
        this.particleSpawners = new Array();
        // -------------------
    }
    getNewPhongQuad(diffusePath, specularPath) {
        const length = this.graphicBundles.push(new GraphicsBundle_1.default(this.textureStore.getTexture(diffusePath), this.textureStore.getTexture(specularPath), new PhongQuad_1.default(GeometryPass_1.geometryPass)));
        return this.graphicBundles[length - 1];
    }
    getNewMesh(meshPath, diffusePath, specularPath) {
        const length = this.graphicBundles.push(new GraphicsBundle_1.default(this.textureStore.getTexture(diffusePath), this.textureStore.getTexture(specularPath), this.meshStore.getMesh(meshPath)));
        return this.graphicBundles[length - 1];
    }
    getNewHeightMap(heightmapPath, diffusePath, specularPath) {
        const length = this.graphicBundles.push(new GraphicsBundle_1.default(this.textureStore.getTexture(diffusePath), this.textureStore.getTexture(specularPath), this.meshStore.getHeightmap(heightmapPath)));
        return this.graphicBundles[length - 1];
    }
    getNewParticleSpawner(texturePath, numberOfStartingParticles = 0) {
        let length = this.particleSpawners.push(new ParticleSpawner_1.default(ParticleShaderProgram_1.particleShaderProgram, this.textureStore.getTexture(texturePath), numberOfStartingParticles));
        return this.particleSpawners[length - 1];
    }
    getNewGrassSpawner(diffuseTexturePath, specularTexturePath, numberOfStartingParticles = 0) {
        let length = this.grassSpawners.push(new GraphicsBundle_1.default(this.textureStore.getTexture(diffuseTexturePath), this.textureStore.getTexture(specularTexturePath), new GrassSpawner_1.default(GrassShaderProgram_1.grassShaderProgram, numberOfStartingParticles)));
        return this.grassSpawners[length - 1];
    }
    getNewPointLight() {
        const length = this.pointLights.push(new PointLight_1.default(main_1.gl, LightingPass_1.lightingPass));
        return this.pointLights[length - 1];
    }
    getDirectionalLight() {
        return this.directionalLight;
    }
    deleteGraphicsBundle(object) {
        this.graphicBundles = this.graphicBundles.filter((o) => object !== o);
    }
    deletePointLight(light) {
        this.pointLights = this.pointLights.filter((l) => light !== l);
    }
    deleteParticleSpawner(particleSpawner) {
        this.particleSpawners = this.particleSpawners.filter((ps) => particleSpawner !== ps);
    }
    renderScene(shaderProgram, bindSpecialTextures = true) {
        for (let bundle of this.graphicBundles) {
            bundle.graphicsObject.shaderProgram = shaderProgram;
            bundle.draw(bindSpecialTextures);
        }
    }
    renderGrass(shaderProgram, bindSpecialTextures = true) {
        for (let bundle of this.grassSpawners) {
            bundle.graphicsObject.shaderProgram = shaderProgram;
            bundle.draw(bindSpecialTextures);
        }
    }
}
exports.default = Scene;
//# sourceMappingURL=Scene.js.map