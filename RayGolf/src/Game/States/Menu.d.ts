import State from "../../Engine/States/State";
import { StateAccessible } from "../GameMachine";
export default class Menu extends State {
    private overlayRendering;
    private sa;
    constructor(sa: StateAccessible);
    init(): Promise<void>;
    reset(): void;
    update(dt: number): void;
    draw(): void;
}
