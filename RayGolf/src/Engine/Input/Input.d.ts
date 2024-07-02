import { vec2 } from "gl-matrix";
export default class Input {
    keys: boolean[];
    buttons: Map<string, boolean>;
    gamepads: Gamepad[];
    mousePosition: {
        x: number;
        y: number;
        previousX: number;
        previousY: number;
    };
    mousePositionOnCanvas: {
        x: number;
        y: number;
        previousX: number;
        previousY: number;
    };
    mouseClicked: boolean;
    mouseRightClicked: boolean;
    simulateTouchBasedOnMouse: boolean;
    touchUsed: boolean;
    joystickLeftDirection: vec2;
    joystickRightDirection: vec2;
    repositionTouchControls: boolean;
    private joystickLeftRadius;
    private joystickRightRadius;
    private screenAspectRatio;
    private joystickLeftCenter;
    private joystickLeftBorder;
    private joystickRightCenter;
    private joystickRightBorder;
    private buttonRadius;
    private aButton;
    private bButton;
    private mouseMovementSinceLast;
    constructor();
    mouseMoveCallBack(event: MouseEvent): void;
    handleTouch(touches: any): void;
    getMouseMovement(): vec2;
    updateGamepad(): void;
    drawTouchControls(): void;
}
