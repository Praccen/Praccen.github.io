"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec3_1 = require("../../Maths/Vec3");
const Component_1 = require("./Component");
class CameraFocusComponent extends Component_1.Component {
    constructor() {
        super(Component_1.ComponentTypeEnum.CAMERAFOCUS);
        this.offset = new Vec3_1.default();
    }
}
exports.default = CameraFocusComponent;
//# sourceMappingURL=CameraFocusCompontent.js.map