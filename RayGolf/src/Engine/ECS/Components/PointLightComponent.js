"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec3_1 = require("../../Maths/Vec3");
const Component_1 = require("./Component");
class PointLightComponent extends Component_1.Component {
    constructor(pointLight) {
        super(Component_1.ComponentTypeEnum.POINTLIGHT);
        this.pointLight = pointLight;
        this.posOffset = new Vec3_1.default();
    }
}
exports.default = PointLightComponent;
//# sourceMappingURL=PointLightComponent.js.map