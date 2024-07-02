import Camera from "../Engine/Objects/Camera";
import GraphicsBundle from "../Engine/Objects/GraphicsBundle";
import Scene from "../Engine/Rendering/Scene";
export default class GrassHandler {
    private grassSpawners;
    private grassStrawsPerSpawner;
    private grassSpawnerSide;
    private grassElevationCutoff;
    private grassSpawningDeadline;
    private scene;
    private mapBundle;
    private camera;
    constructor(scene: Scene, mapBundle: GraphicsBundle, camera: Camera);
    createGrass(offsetX: any, offsetY: any): void;
    /**
     * Spawn as much grass as possible within deadline or until all grass straws have been spawned
     */
    fillGrass(): void;
    updateGrass(): void;
    update(dt: number): void;
}
