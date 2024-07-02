import { Component, ComponentTypeEnum } from "./Components/Component";
export default class Entity {
    readonly id: number;
    components: Array<Component>;
    constructor(id: number);
    hasComponent(type: ComponentTypeEnum): boolean;
    getComponent(type: ComponentTypeEnum): Component;
}
