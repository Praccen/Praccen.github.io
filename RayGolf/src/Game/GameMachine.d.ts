import AudioPlayer from "../Engine/Audio/AudioPlayer";
import Input from "../Engine/Input/Input";
import MeshStore from "../Engine/AssetHandling/MeshStore";
import StateMachine from "../Engine/States/StateMachine";
import TextureStore from "../Engine/AssetHandling/TextureStore";
export declare let input: Input;
export declare let options: {
    useCrt: boolean;
    useBloom: boolean;
    foldableGrass: boolean;
    showFps: boolean;
    grassDensity: number;
    musicVolume: number;
    effectVolume: number;
};
/**
 * These are the variables available to all the states
 */
export declare class StateAccessible {
    textureStore: TextureStore;
    meshStore: MeshStore;
    audioPlayer: AudioPlayer;
    restartGame: boolean;
    localGame: boolean;
    level: string;
}
export default class GameMachine extends StateMachine {
    stateAccessible: StateAccessible;
    private overlayRendering;
    private fpsDisplay;
    constructor();
    onExit(e: BeforeUnloadEvent): void;
    initializeOptions(): void;
    runCurrentState(): Promise<void>;
}
