import GuiObject from "./GuiObject";
import Div from "./Div";
import { vec2 } from "gl-matrix";
export default class Progress extends GuiObject {
    position: vec2;
    size: number;
    private progressNode;
    constructor(parentDiv?: Div);
    getProgressElement(): HTMLProgressElement;
    draw(): void;
}
