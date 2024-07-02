import State from "../../Engine/State";
import { StateAccessible } from "../GameMachine";
export default class LobbyState extends State {
    private overlay;
    private sa;
    private participantsDiv;
    private timePassed;
    private startButton;
    private addBotButton;
    private removeParticipantButton;
    constructor(sa: StateAccessible);
    private addParticipant;
    init(): Promise<void>;
    reset(): void;
    update(dt: number): void;
    draw(): void;
}
