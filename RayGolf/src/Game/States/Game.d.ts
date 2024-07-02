import ECSManager from "../../Engine/ECS/ECSManager";
import State from "../../Engine/States/State";
import Rendering from "../../Engine/Rendering/Rendering";
import { StateAccessible } from "../GameMachine";
import ObjectPlacer from "../ObjectPlacer";
import { vec3 } from "gl-matrix";
export default class Game extends State {
    rendering: Rendering;
    ecsManager: ECSManager;
    private stateAccessible;
    private overlayRendering;
    private menuButton;
    objectPlacer: ObjectPlacer;
    private scene;
    private static instance;
    private golfBall;
    private oWasPressed;
    static getInstance(sa: StateAccessible): Game;
    static getInstanceNoSa(): Game;
    private constructor();
    createPointLight(position: vec3, castShadow: boolean, colour?: vec3): void;
    load(): Promise<void>;
    init(): Promise<void>;
    reset(): void;
    onExit(e: BeforeUnloadEvent): void;
    update(dt: number): void;
    prepareDraw(dt: number, updateCameraFocus?: boolean): void;
    draw(): void;
}
