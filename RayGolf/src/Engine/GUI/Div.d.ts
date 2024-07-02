import { vec2 } from "gl-matrix";
import GuiObject from "./GuiObject";
export default class Div extends GuiObject {
    position: vec2;
    size: number;
    children: Array<GuiObject>;
    constructor(parentDiv?: Div);
    appendChild(childObj: GuiObject): void;
    draw(): void;
}
