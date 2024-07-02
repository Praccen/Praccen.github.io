import Scene from "../Engine/Rendering/Scene";
import Game from "./States/Game";
import { OverlayRendering } from "../Engine/Rendering/GUI/OverlayRendering";
import MeshStore from "../Engine/AssetHandling/MeshStore";
export default class GolfBall {
    private scene;
    private game;
    private meshStore;
    private entity;
    private positionComp;
    private movComp;
    private previewEntity;
    private previewPositionComp;
    private mouseWasPressed;
    private mouseRightWasPressed;
    private mouseMovement;
    private jawPitch;
    private direction;
    private nextDirection;
    private nextBounceVec;
    private nextBounceTime;
    private nextBounceEntityId;
    private lastBounceTime;
    private bounceLimit;
    private currentBounces;
    private bounceLimitDisplay;
    constructor(scene: Scene, game: Game, overlayRendering: OverlayRendering, meshStore: MeshStore);
    init(): void;
    respawn(): void;
    private saveNextCollisionInfo;
    private setCameraDirection;
    /**
     * This function does custom movement updates, not relying on the movement system (until not on collision path with anything, then the movement will be set to keep going).
     * TODO: Consider breaking this logic out to some system.
     * @param dt Time elapsed since last frame
     * @returns how much is left to process of the dt
     */
    doMovementAndBounces(dt: number): number;
    update(dt: number): void;
}
