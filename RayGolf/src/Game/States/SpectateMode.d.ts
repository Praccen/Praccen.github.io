import State from "../../Engine/State";
import { StateAccessible } from "../GameMachine";
import Game from "./Game";
export default class SpectateMode extends State {
    private game;
    private sa;
    private overlay;
    private lastMousePos;
    constructor(stateAccessible: StateAccessible, game: Game);
    init(): Promise<void>;
    reset(): void;
    update(dt: number): void;
    prepareDraw(dt: number): void;
    draw(): void;
}
