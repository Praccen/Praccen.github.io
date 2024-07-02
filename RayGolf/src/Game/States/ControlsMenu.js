"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const State_1 = require("../../Engine/State");
const GameMachine_1 = require("../GameMachine");
const OverlayRendering_1 = require("../../Engine/Rendering/OverlayRendering");
class ControlsMenu extends State_1.default {
    constructor(sa) {
        super();
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.backButton = this.overlayRendering.getNewButton();
        this.backButton.position.x = 0.5;
        this.backButton.position.y = 0.1;
        this.backButton.center = true;
        this.backButton.textSize = 30;
        this.backButton.textString = "Back";
        let self = this;
        this.backButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.OPTIONS;
        });
    }
    init() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.init.call(this);
            this.overlayRendering.show();
            GameMachine_1.input.touchUsed = true;
            GameMachine_1.input.simulateTouchBasedOnMouse = true;
            GameMachine_1.input.repositionTouchControls = true;
        });
    }
    reset() {
        super.reset();
        this.overlayRendering.hide();
        GameMachine_1.input.touchUsed = false;
        GameMachine_1.input.simulateTouchBasedOnMouse = false;
        GameMachine_1.input.repositionTouchControls = false;
        GameMachine_1.input.drawTouchControls();
    }
    update(dt) { }
    draw() {
        this.overlayRendering.draw();
        GameMachine_1.input.drawTouchControls();
    }
}
exports.default = ControlsMenu;
//# sourceMappingURL=ControlsMenu.js.map