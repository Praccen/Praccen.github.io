import { vec3 } from "gl-matrix";
import ObjectPlacer from "../../../Game/ObjectPlacer";
import Div from "../../Rendering/GUI/Objects/Div";
import ParticleSpawner from "../../Objects/GraphicsObjects/ParticleSpawner";
import { OverlayRendering } from "../../Rendering/GUI/OverlayRendering";
import { Component } from "./Component";
export default class ParticleSpawnerComponent extends Component {
    lifeTime: number;
    resetTimer: number;
    particleSpawner: ParticleSpawner;
    offset: vec3;
    constructor(particleSpawner: ParticleSpawner);
    addToGui(overlayRendering: OverlayRendering, parentDiv: Div, objectPlacer: ObjectPlacer): void;
    destructor(): void;
}
