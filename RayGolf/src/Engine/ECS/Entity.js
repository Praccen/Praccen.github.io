"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entity {
    constructor(id) {
        this.id = id;
        this.components = new Array();
    }
    addComponent(component) {
        if (!this.hasComponent(component.type)) {
            this.components.push(component);
            return true;
        }
        return false;
    }
    hasComponent(type) {
        return this.components.some((c) => c.type == type);
    }
    removeComponent(type) {
        let index = this.components.findIndex((c) => c.type == type);
        if (index != -1) {
            this.components.splice(index, 1);
        }
    }
    getComponent(type) {
        return this.components.find((c) => c.type == type);
    }
}
exports.default = Entity;
//# sourceMappingURL=Entity.js.map