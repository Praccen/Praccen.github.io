"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("./Component");
class ParticleSpawnerComponent extends Component_1.Component {
    constructor(particleSpawner) {
        super(Component_1.ComponentTypeEnum.PARTICLESPAWNER);
        this.lifeTime = 1.0;
        this.resetTimer = 0.0;
        this.particleSpawner = particleSpawner;
    }
}
exports.default = ParticleSpawnerComponent;
//# sourceMappingURL=ParticleSpawnerComponent.js.map