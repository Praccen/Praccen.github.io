"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const System_1 = require("./System");
const Component_1 = require("../Components/Component");
class PositionMatrixUpdateSystem extends System_1.default {
    constructor() {
        super([Component_1.ComponentTypeEnum.POSITION]);
    }
    update(dt) {
        for (const e of this.entities) {
            // TODO: Add locic for position parent if that is ever needed. Or redo the whole position parent thing because it is not very nice to work with.
            let posComp = (e.getComponent(Component_1.ComponentTypeEnum.POSITION));
            posComp.matrix.setIdentity();
            posComp.calculateMatrix(posComp.matrix);
        }
    }
}
exports.default = PositionMatrixUpdateSystem;
//# sourceMappingURL=PositionMatrixUpdateSystem.js.map