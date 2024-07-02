import { vec3 } from "gl-matrix";
import ObjectPlacer from "../../../Game/ObjectPlacer";
import Div from "../../Rendering/GUI/Objects/Div";
import PointLight from "../../Rendering/Lighting/PointLight";
import { OverlayRendering } from "../../Rendering/GUI/OverlayRendering";
import { Component } from "./Component";
export default class PointLightComponent extends Component {
    pointLight: PointLight;
    posOffset: vec3;
    constructor(pointLight: PointLight);
    destructor(): void;
    updateGui(overlayRendering: OverlayRendering, parentDiv: Div, objectPlacer: ObjectPlacer): void;
}
