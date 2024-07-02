import ObjectPlacer from "../../../Game/ObjectPlacer";
import Div from "../../Rendering/GUI/Objects/Div";
import { OverlayRendering } from "../../Rendering/GUI/OverlayRendering";
export declare enum ComponentTypeEnum {
    BOUNDINGBOX = 0,
    CAMERAFOCUS = 1,
    COLLISION = 2,
    GRAPHICS = 3,
    MESHCOLLISION = 4,
    MOVEMENT = 5,
    PARTICLESPAWNER = 6,
    POINTLIGHT = 7,
    POSITION = 8,
    POSITIONPARENT = 9
}
export declare class Component {
    private _type;
    constructor(type: ComponentTypeEnum);
    destructor(): void;
    get type(): ComponentTypeEnum;
    updateGui(overlayRendering: OverlayRendering, parentDiv: Div, objectPlacer: ObjectPlacer): void;
    protected addTextEdit(overlayRendering: OverlayRendering, div: Div, label: string, variable: string[], index?: number): void;
    protected addCheckbox(overlayRendering: OverlayRendering, div: Div, label: string, variable: string[], index?: number): void;
    protected updateTextEdit(div: Div, label: string, variable: string[], index?: number): void;
    protected updateCheckbox(div: Div, label: string, variable: string[], index?: number): void;
}
