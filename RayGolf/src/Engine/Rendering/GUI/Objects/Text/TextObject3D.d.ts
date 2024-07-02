import { mat4, vec3 } from "gl-matrix";
import GuiObject from "../GuiObject";
export default class TextObject3D extends GuiObject {
    position: vec3;
    size: number;
    scaleFontWithDistance: boolean;
    private hidden;
    constructor();
    setHidden(hidden: boolean): void;
    draw3D(viewProj: mat4): void;
}
