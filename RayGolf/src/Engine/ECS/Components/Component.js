"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = exports.ComponentTypeEnum = void 0;
var ComponentTypeEnum;
(function (ComponentTypeEnum) {
    ComponentTypeEnum[ComponentTypeEnum["BOUNDINGBOX"] = 0] = "BOUNDINGBOX";
    ComponentTypeEnum[ComponentTypeEnum["CAMERAFOCUS"] = 1] = "CAMERAFOCUS";
    ComponentTypeEnum[ComponentTypeEnum["COLLISION"] = 2] = "COLLISION";
    ComponentTypeEnum[ComponentTypeEnum["GRAPHICS"] = 3] = "GRAPHICS";
    ComponentTypeEnum[ComponentTypeEnum["MESHCOLLISION"] = 4] = "MESHCOLLISION";
    ComponentTypeEnum[ComponentTypeEnum["MOVEMENT"] = 5] = "MOVEMENT";
    ComponentTypeEnum[ComponentTypeEnum["PARTICLESPAWNER"] = 6] = "PARTICLESPAWNER";
    ComponentTypeEnum[ComponentTypeEnum["POINTLIGHT"] = 7] = "POINTLIGHT";
    ComponentTypeEnum[ComponentTypeEnum["POSITION"] = 8] = "POSITION";
    ComponentTypeEnum[ComponentTypeEnum["POSITIONPARENT"] = 9] = "POSITIONPARENT";
    ComponentTypeEnum[ComponentTypeEnum["DELIVERYZONE"] = 10] = "DELIVERYZONE";
})(ComponentTypeEnum = exports.ComponentTypeEnum || (exports.ComponentTypeEnum = {}));
class Component {
    constructor(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
}
exports.Component = Component;
//# sourceMappingURL=Component.js.map