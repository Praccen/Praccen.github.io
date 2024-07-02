import State from "../../Engine/State";
import { StateAccessible } from "../GameMachine";
export default class PreLobbyState extends State {
    private overlay;
    private sa;
    private roomDiv;
    private timePassed;
    private roomName;
    constructor(sa: StateAccessible);
    private joinedGame;
    private addRoom;
    init(): Promise<void>;
    reset(): void;
    update(dt: number): void;
    draw(): void;
}
