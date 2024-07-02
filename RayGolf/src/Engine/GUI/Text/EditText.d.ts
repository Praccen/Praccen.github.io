import { vec2 } from "gl-matrix";
import Div from "../Div";
import GuiObject from "../GuiObject";
export default class EditText extends GuiObject {
    position: vec2;
    textSize: number;
    private inputNode;
    private label;
    private onChangeFn;
    constructor(parentDiv?: Div);
    getElement(): HTMLDivElement;
    getInputElement(): HTMLInputElement;
    onChange(fn: any): void;
    remove(): void;
    draw(): void;
}
