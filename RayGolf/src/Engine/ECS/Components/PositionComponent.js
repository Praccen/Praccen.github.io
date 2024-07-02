"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("./Component");
const Vec3_1 = require("../../Maths/Vec3");
class PositionComponent extends Component_1.Component {
    constructor(componentType) {
        super(componentType ? componentType : Component_1.ComponentTypeEnum.POSITION);
        this.position = new Vec3_1.default();
        this.rotation = new Vec3_1.default();
        this.scale = new Vec3_1.default([1.0, 1.0, 1.0]);
        this.origin = new Vec3_1.default();
        this.matrix = new Matrix4(null);
    }
    calculateMatrix(matrix) {
        matrix.translate(this.position.x, this.position.y, this.position.z);
        if (this.rotation.length2() > 0.0000001) {
            let normRotation = new Vec3_1.default(this.rotation);
            normRotation.normalize();
            matrix.rotate(this.rotation.len(), normRotation.x, normRotation.y, normRotation.z);
        }
        matrix.scale(this.scale.x, this.scale.y, this.scale.z);
        matrix.translate(-this.origin.x, -this.origin.y, -this.origin.z);
    }
}
exports.default = PositionComponent;
//# sourceMappingURL=PositionComponent.js.map