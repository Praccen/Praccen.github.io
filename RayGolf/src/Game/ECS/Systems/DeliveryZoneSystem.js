"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../../../Engine/ECS/Components/Component");
const System_1 = require("../../../Engine/ECS/Systems/System");
const Game_1 = require("../../States/Game");
class DeliveryZoneSystem extends System_1.default {
    constructor() {
        super([Component_1.ComponentTypeEnum.DELIVERYZONE, Component_1.ComponentTypeEnum.POSITION]);
        this.game = Game_1.default.getInstanceNoSa();
    }
    update(dt) {
        for (const e of this.entities) {
            for (let i = 0; i < this.game.newspapersStopped.length; i++) {
                let paperPosComp = (this.game.newspapersStopped[i].entity.getComponent(Component_1.ComponentTypeEnum.POSITION));
                let zoneComp = (e.getComponent(Component_1.ComponentTypeEnum.DELIVERYZONE));
                let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITION));
                let graComp = (e.getComponent(Component_1.ComponentTypeEnum.GRAPHICS));
                zoneComp.pos.deepAssign(posComp.position);
                zoneComp.radius = posComp.scale.x;
                if (!zoneComp.triggerd &&
                    Math.pow(paperPosComp.position.x - zoneComp.pos.x, 2) +
                        Math.pow(paperPosComp.position.y - zoneComp.pos.y, 2) +
                        Math.pow(paperPosComp.position.z - zoneComp.pos.z, 2) <
                        Math.pow(zoneComp.radius, 2)) {
                    zoneComp.triggerd = true;
                    graComp.object.baseColor = new Vector3([0, 1, 0]);
                    this.game.score -= 1;
                    this.game.newspapersStopped.splice(i, 1);
                    this.game.ecsManager.removeEntity(e.id);
                    i--;
                }
            }
        }
    }
}
exports.default = DeliveryZoneSystem;
//# sourceMappingURL=DeliveryZoneSystem.js.map