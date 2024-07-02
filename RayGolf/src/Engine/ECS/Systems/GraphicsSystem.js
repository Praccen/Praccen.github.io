"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const System_1 = require("./System");
const Component_1 = require("../Components/Component");
class GraphicsSystem extends System_1.default {
    constructor() {
        super([Component_1.ComponentTypeEnum.POSITION]);
        // Optional ComponentTypeEnum.GRAPHICS, ComponentTypeEnum.POINTLIGHT, ComponentTypeEnun.POSITIONPARENT
    }
    update(dt) {
        for (const e of this.entities) {
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITION));
            let graphComp = (e.getComponent(Component_1.ComponentTypeEnum.GRAPHICS));
            let posParentComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITIONPARENT));
            if (graphComp && posComp) {
                graphComp.object.modelMatrix.setIdentity();
                if (posParentComp) {
                    posParentComp.calculateMatrix(graphComp.object.modelMatrix);
                    posParentComp.matrix.set(graphComp.object.modelMatrix);
                }
                posComp.calculateMatrix(graphComp.object.modelMatrix);
            }
            let pointLightComp = (e.getComponent(Component_1.ComponentTypeEnum.POINTLIGHT));
            if (pointLightComp && posComp) {
                pointLightComp.pointLight.position
                    .deepAssign(posComp.position)
                    .add(pointLightComp.posOffset);
                if (posParentComp) {
                    pointLightComp.pointLight.position.add(posParentComp.position);
                }
            }
        }
    }
}
exports.default = GraphicsSystem;
//# sourceMappingURL=GraphicsSystem.js.map