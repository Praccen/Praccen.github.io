"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../../main");
const ParticleShaderProgram_1 = require("../../ShaderPrograms/ParticleShaderProgram");
class ParticleRenderPass {
    constructor() { }
    draw(scene, camera) {
        if (scene.particleSpawners.length > 0) {
            // only do this if there are any particle spawners
            ParticleShaderProgram_1.particleShaderProgram.use();
            camera.bindViewProjMatrix(ParticleShaderProgram_1.particleShaderProgram.getUniformLocation("viewProjMatrix")[0]);
            main_1.gl.uniform3fv(ParticleShaderProgram_1.particleShaderProgram.getUniformLocation("cameraPos")[0], camera.getPosition());
            main_1.gl.uniform1f(ParticleShaderProgram_1.particleShaderProgram.getUniformLocation("currentTime")[0], (Date.now() - main_1.applicationStartTime) * 0.001);
            for (const particleSpawner of scene.particleSpawners.values()) {
                particleSpawner.draw();
            }
        }
    }
}
exports.default = ParticleRenderPass;
//# sourceMappingURL=ParticleRenderPass.js.map