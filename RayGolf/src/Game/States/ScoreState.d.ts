import State from "../../Engine/State";
import { StateAccessible } from "../GameMachine";
export default class LobbyState extends State {
    private overlay;
    private sa;
    private participantsDiv;
    constructor(sa: StateAccessible);
    init(): Promise<void>;
    reset(): void;
    private addParticipant;
    update(dt: number): void;
    draw(): void;
}
