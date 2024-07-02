import State from "../../Engine/States/State";
import { StateAccessible } from "../GameMachine";
export default class OptionsMenu extends State {
    private overlayRendering;
    private backButton;
    private crtCB;
    private bloomCB;
    private grassCB;
    private grassDensitySlider;
    private fpsDisplayCB;
    private controlsButton;
    private musicVolume;
    private effectVolume;
    private stateAccessible;
    constructor(sa: StateAccessible);
    init(): Promise<void>;
    reset(): void;
    update(dt: number): void;
    draw(): void;
}
