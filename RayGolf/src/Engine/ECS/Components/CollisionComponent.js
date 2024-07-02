"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("./Component");
class CollisionComponent extends Component_1.Component {
    constructor() {
        super(Component_1.ComponentTypeEnum.COLLISION);
        this.isStatic = false;
        this.isImmovable = false;
    }
}
exports.default = CollisionComponent;
//# sourceMappingURL=CollisionComponent.js.map