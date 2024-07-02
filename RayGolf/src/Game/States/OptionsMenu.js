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
const GameMachine_1 = require("../GameMachine");
const State_1 = require("../../Engine/State");
const OverlayRendering_1 = require("../../Engine/Rendering/OverlayRendering");
class OptionsMenu extends State_1.default {
    constructor(sa) {
        super();
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.crtCB = this.overlayRendering.getNewCheckbox();
        this.crtCB.position.x = 0.4;
        this.crtCB.position.y = 0.25;
        this.crtCB.textString = "CRT-effect ";
        this.crtCB.getElement().style.color = "cyan";
        this.crtCB.getInputElement().style.accentColor = "red";
        this.crtCB.getInputElement().checked = GameMachine_1.options.useCrt;
        this.bloomCB = this.overlayRendering.getNewCheckbox();
        this.bloomCB.position.x = 0.4;
        this.bloomCB.position.y = 0.3;
        this.bloomCB.textString = "Bloom-effect ";
        this.bloomCB.getElement().style.color = "cyan";
        this.bloomCB.getInputElement().style.accentColor = "red";
        this.bloomCB.getInputElement().checked = GameMachine_1.options.useBloom;
        this.grassCB = this.overlayRendering.getNewCheckbox();
        this.grassCB.position.x = 0.4;
        this.grassCB.position.y = 0.35;
        this.grassCB.textString = "Foldable grass ";
        this.grassCB.getElement().style.color = "cyan";
        this.grassCB.getInputElement().style.accentColor = "red";
        this.grassCB.getInputElement().checked = GameMachine_1.options.foldableGrass;
        this.grassDensitySlider = this.overlayRendering.getNewSlider();
        this.grassDensitySlider.position.x = 0.4;
        this.grassDensitySlider.position.y = 0.4;
        this.grassDensitySlider.textString = "Grass density \r\n(requires restart)";
        this.grassDensitySlider.getElement().style.color = "cyan";
        this.grassDensitySlider.getInputElement().style.accentColor = "red";
        this.grassDensitySlider.getInputElement().min = "1000";
        this.grassDensitySlider.getInputElement().max = "100000";
        this.grassDensitySlider.getInputElement().value = GameMachine_1.options.grassDensity + "";
        this.fpsDisplayCB = this.overlayRendering.getNewCheckbox();
        this.fpsDisplayCB.position.x = 0.4;
        this.fpsDisplayCB.position.y = 0.5;
        this.fpsDisplayCB.textString = "Fps counter ";
        this.fpsDisplayCB.getElement().style.color = "cyan";
        this.fpsDisplayCB.getInputElement().style.accentColor = "red";
        this.fpsDisplayCB.getInputElement().checked = GameMachine_1.options.showFps;
        this.controlsButton = this.overlayRendering.getNewButton();
        this.controlsButton.position.x = 0.5;
        this.controlsButton.position.y = 0.75;
        this.controlsButton.center = true;
        this.controlsButton.textString = "Controls";
        let self = this;
        this.controlsButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.CONTROLS;
        });
        this.backButton = this.overlayRendering.getNewButton();
        this.backButton.position.x = 0.5;
        this.backButton.position.y = 0.85;
        this.backButton.center = true;
        this.backButton.textString = "Back to main menu";
        this.backButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.MAINMENU;
        });
    }
    init() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.init.call(this);
            this.overlayRendering.show();
        });
    }
    reset() {
        super.reset();
        this.overlayRendering.hide();
    }
    update(dt) {
        GameMachine_1.options.useCrt = this.crtCB.getChecked();
        GameMachine_1.options.useBloom = this.bloomCB.getChecked();
        GameMachine_1.options.foldableGrass = this.grassCB.getChecked();
        GameMachine_1.options.showFps = this.fpsDisplayCB.getChecked();
        GameMachine_1.options.grassDensity = this.grassDensitySlider.getValue();
    }
    draw() {
        this.overlayRendering.draw();
    }
}
exports.default = OptionsMenu;
//# sourceMappingURL=OptionsMenu.js.map