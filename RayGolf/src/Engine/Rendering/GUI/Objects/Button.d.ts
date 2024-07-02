import { vec2 } from "gl-matrix";
import Div from "./Div";
import GuiObject from "./GuiObject";
export default class Button extends GuiObject {
    position: vec2;
    textSize: number;
    private inputNode;
    private onClickFunction;
    constructor(parentDiv?: Div);
    getElement(): HTMLDivElement;
    getInputElement(): HTMLInputElement;
    onClick(fn: any): void;
    remove(): void;
    draw(): void;
}
