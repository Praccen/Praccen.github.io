import MeshStore from "../Engine/AssetHandling/MeshStore";
import TextureStore from "../Engine/AssetHandling/TextureStore";
import ECSManager from "../Engine/ECS/ECSManager";
import Entity from "../Engine/ECS/Entity";
import Ray from "../Engine/Physics/Shapes/Ray";
import Scene from "../Engine/Rendering/Scene";
import Game from "./States/Game";
import { quat, vec3 } from "gl-matrix";
declare class Placement {
    modelPath: string;
    diffuseTexturePath: string;
    specularTexturePath: string;
    emissionTexturePath: string;
    sizeMultiplier: number;
    addCollision: boolean;
    saveToTransforms: boolean;
    constructor(modelPath: string, diffuseTexturePath: string, specularTexturePath: string, emissionTexturePath: string, addCollision?: boolean, saveToTransform?: boolean);
}
export default class ObjectPlacer {
    placements: Map<string, Placement>;
    private entityPlacements;
    private scene;
    private ecsManager;
    private meshStore;
    private textureStore;
    private lastSavedPlacements;
    private lastFileName;
    currentlyEditingEntityId: number;
    game: Game;
    constructor(meshStore: MeshStore, textureStore: TextureStore);
    load(scene: Scene, ecsManager: ECSManager, placementsFile?: string): Promise<void>;
    reload(placementsFile?: string): Promise<void>;
    private loadFromFile;
    makeCheckpoint(): void;
    undo(): void;
    getEntitiesOfType(type: string): Array<Entity>;
    getTypeOfEntity(entityId: number): string;
    getCurrentObjectType(): string;
    placeObject(type: string, position: vec3, size: vec3, rotation: quat, origin: vec3): Entity;
    rayCastToNonSelectedObjects(ray: Ray): number;
    rayCastToSelectNewObject(ray: Ray, ignoreEntityId?: number): void;
    selectNewObjectFromEntityId(id: number): void;
    updateCurrentlyEditingObject(rotationChange: vec3, scaleChange: number, newPosition?: vec3): void;
    deleteCurrentObject(setDownloadNeeded?: boolean): void;
    duplicateCurrentObject(): void;
    downloadTransforms(): boolean;
    onExit(e: BeforeUnloadEvent): void;
}
export {};
