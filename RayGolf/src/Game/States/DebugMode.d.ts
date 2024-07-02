import State from "../../Engine/States/State";
import { StateAccessible } from "../GameMachine";
import Game from "./Game";
export default class DebugMode extends State {
    private game;
    private stateAccessible;
    private debugMenu;
    private mouseWasPressed;
    private cWasPressed;
    private lastMousePos;
    private checkpointNeeded;
    private checkpointTriggeredThisFrame;
    private actionString;
    private oWasPressed;
    private pWasPressed;
    constructor(sa: StateAccessible, game: Game);
    init(): Promise<void>;
    reset(): void;
    private handleInput;
    update(dt: number): void;
    prepareDraw(dt: number): void;
    draw(): void;
}
