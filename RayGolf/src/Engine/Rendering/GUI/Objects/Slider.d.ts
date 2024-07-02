import { vec2 } from "gl-matrix";
import Div from "./Div";
import GuiObject from "./GuiObject";
export default class Slider extends GuiObject {
    position: vec2;
    textSize: number;
    private inputNode;
    private label;
    constructor(parentDiv?: Div);
    getElement(): HTMLDivElement;
    getInputElement(): HTMLInputElement;
    getValue(): number;
    draw(): void;
}
