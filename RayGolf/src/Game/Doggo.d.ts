import ECSManager from "../Engine/ECS/ECSManager";
import Rendering from "../Engine/Rendering/Rendering";
import Scene from "../Engine/Rendering/Scene";
import { vec3 } from "gl-matrix";
export default class Doggo {
    private scene;
    private rendering;
    private ecsManager;
    private body;
    private legs;
    private groupPositionComp;
    private movComp;
    private cameraFocusComp;
    private lastAnimation;
    private currentAnimation;
    private offGroundTimer;
    private timer;
    constructor(scene: Scene, rendering: Rendering, ecsManager: ECSManager);
    init(): Promise<void>;
    respawn(): void;
    getPosition(): vec3;
    getVelocity(): vec3;
    update(dt: number): void;
    private resetAnimation;
    private walkAnimation;
    private runAnimation;
    private sitAnimation;
    private jumpAnimation;
}
