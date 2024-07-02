"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../../../Engine/ECS/Components/Component");
const Vec3_1 = require("../../../Engine/Maths/Vec3");
class DeiliveryZoneComponent extends Component_1.Component {
    constructor(componentType) {
        super(componentType ? componentType : Component_1.ComponentTypeEnum.DELIVERYZONE);
        this.pos = new Vec3_1.default();
        this.radius = 0;
        this.triggerd = false;
    }
}
exports.default = DeiliveryZoneComponent;
//# sourceMappingURL=DeliveryZoneComponent.js.map