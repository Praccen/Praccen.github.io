import ObjectPlacer from "../../../Game/ObjectPlacer";
import Div from "../../Rendering/GUI/Objects/Div";
import GraphicsBundle from "../../Objects/GraphicsBundle";
import { OverlayRendering } from "../../Rendering/GUI/OverlayRendering";
import { Component } from "./Component";
export default class GraphicsComponent extends Component {
    object: GraphicsBundle;
    constructor(object: GraphicsBundle);
    destructor(): void;
    updateGui(overlayRendering: OverlayRendering, parentDiv: Div, objectPlacer: ObjectPlacer): void;
}
