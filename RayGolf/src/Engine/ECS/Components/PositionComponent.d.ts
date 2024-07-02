import { Component, ComponentTypeEnum } from "./Component";
import Div from "../../Rendering/GUI/Objects/Div";
import { OverlayRendering } from "../../Rendering/GUI/OverlayRendering";
import ObjectPlacer from "../../../Game/ObjectPlacer";
import { mat4, quat, vec3 } from "gl-matrix";
export default class PositionComponent extends Component {
    position: vec3;
    rotation: quat;
    scale: vec3;
    origin: vec3;
    matrix: mat4;
    constructor(componentType?: ComponentTypeEnum);
    calculateMatrix(matrix: mat4): void;
    updateGui(overlayRendering: OverlayRendering, parentDiv: Div, objectPlacer: ObjectPlacer): void;
}
