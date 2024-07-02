"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const System_1 = require("./System");
const Component_1 = require("../Components/Component");
class ParticleSpawnerSystem extends System_1.default {
    constructor() {
        super([Component_1.ComponentTypeEnum.PARTICLESPAWNER, Component_1.ComponentTypeEnum.POSITION]);
    }
    update(dt) {
        for (const e of this.entities) {
            let particleComp = (e.getComponent(Component_1.ComponentTypeEnum.PARTICLESPAWNER));
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITION));
            if (particleComp && posComp) {
                let currentParticle = Math.floor((particleComp.resetTimer / Math.max(particleComp.lifeTime, 0.00001)) *
                    particleComp.particleSpawner.getNumberOfParticles());
                particleComp.resetTimer += dt;
                let endParticle = Math.floor((particleComp.resetTimer / Math.max(particleComp.lifeTime, 0.00001)) *
                    particleComp.particleSpawner.getNumberOfParticles());
                for (currentParticle; currentParticle < endParticle; currentParticle++) {
                    particleComp.particleSpawner.resetParticleStartTime(currentParticle %
                        particleComp.particleSpawner.getNumberOfParticles());
                    particleComp.particleSpawner.setParticleStartPosition(currentParticle %
                        particleComp.particleSpawner.getNumberOfParticles(), posComp.position);
                }
                if (particleComp.resetTimer > particleComp.lifeTime) {
                    particleComp.resetTimer -= particleComp.lifeTime;
                }
            }
        }
    }
}
exports.default = ParticleSpawnerSystem;
//# sourceMappingURL=ParticleSpawnerSystem.js.map