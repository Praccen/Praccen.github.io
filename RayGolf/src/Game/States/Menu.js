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
const OverlayRendering_1 = require("../../Engine/Rendering/OverlayRendering");
const State_1 = require("../../Engine/State");
const WebUtils_1 = require("../../Engine/Utils/WebUtils");
class Menu extends State_1.default {
    constructor(sa) {
        super();
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        let startButton = this.overlayRendering.getNewButton();
        startButton.position.x = 0.5;
        startButton.position.y = 0.2;
        startButton.center = true;
        startButton.textString = "Start";
        let self = this;
        startButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.GAME;
            startButton.textString = "Resume";
        });
        let restartButton = this.overlayRendering.getNewButton();
        restartButton.position.x = 0.5;
        restartButton.position.y = 0.4;
        restartButton.center = true;
        restartButton.textString = "Restart";
        restartButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.GAME;
            sa.restartGame = true;
            startButton.textString = "Resume";
            WebUtils_1.WebUtils.SetCookie("debug", "false");
        });
        let optionsButton = this.overlayRendering.getNewButton();
        optionsButton.position.x = 0.5;
        optionsButton.position.y = 0.6;
        optionsButton.center = true;
        optionsButton.textString = "Options";
        optionsButton.onClick(function () {
            self.gotoState = State_1.StatesEnum.OPTIONS;
        });
        let fullscreenButton = this.overlayRendering.getNewButton();
        fullscreenButton.position.x = 0.5;
        fullscreenButton.position.y = 0.8;
        fullscreenButton.center = true;
        fullscreenButton.textString = "Fullscreen";
        fullscreenButton.onClick(function () {
            document.getElementById("gameDiv").requestFullscreen();
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
    update(dt) { }
    draw() {
        this.overlayRendering.draw();
    }
}
exports.default = Menu;
//# sourceMappingURL=Menu.js.map