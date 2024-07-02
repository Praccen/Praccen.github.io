"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("./Component");
const Vec3_1 = require("../../Maths/Vec3");
class MovementComponent extends Component_1.Component {
    constructor() {
        super(Component_1.ComponentTypeEnum.MOVEMENT);
        this.constantAcceleration = new Vec3_1.default([0.0, -9.8, 0.0]);
        this.accelerationDirection = new Vec3_1.default();
        this.acceleration = 6.0;
        this.velocity = new Vec3_1.default();
        this.drag = 4.0;
        this.onGround = false;
        this.jumpPower = 5.0;
        this.jumpRequested = false;
        this.jumpAllowed = false;
    }
}
exports.default = MovementComponent;
//# sourceMappingURL=MovementComponent.js.map