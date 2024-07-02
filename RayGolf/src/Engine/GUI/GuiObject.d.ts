import { vec2 } from "gl-matrix";
import Div from "./Div";
export default class GuiObject {
    protected position2D: vec2;
    protected fontSize: number;
    scaleWithWindow: boolean;
    textString: string;
    center: boolean;
    removed: boolean;
    private divContainerElement;
    protected div: HTMLDivElement;
    readonly hasParent: boolean;
    constructor(parentDiv?: Div);
    getElement(): HTMLDivElement;
    getHidden(): boolean;
    setHidden(hidden: boolean): void;
    toggleHidden(): boolean;
    remove(): void;
    protected drawObject(): void;
    draw(): void;
}
