import { vec2 } from "gl-matrix";
import Div from "../Div";
import GuiObject from "../GuiObject";
export default class TextObject2D extends GuiObject {
    position: vec2;
    size: number;
    constructor(parentDiv?: Div);
    draw(): void;
}
