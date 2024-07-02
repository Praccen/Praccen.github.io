import TextObject2D from "../../Engine/Rendering/GUI/Objects/Text/TextObject2D";
import { StateAccessible } from "../GameMachine";
import DebugMode from "./DebugMode";
import Game from "./Game";
export default class DebugMenu {
    private overlay;
    private stateAccessible;
    private game;
    private placementMenu;
    private movingPlacementBox;
    private entitiesBox;
    private movingEntitiesBox;
    private propsBox;
    private movingPropsBox;
    private propsVisibleMemory;
    private hidden;
    mouseOverGuiElement: boolean;
    actionText: TextObject2D;
    constructor(stateAccessible: StateAccessible, game: Game, debugMode: DebugMode);
    init(): Promise<void>;
    private parseConsoleInput;
    update(dt: number): void;
    reset(): void;
    toggleHidden(): void;
    draw(): void;
}
