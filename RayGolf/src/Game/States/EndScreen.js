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
const Game_1 = require("./Game");
class EndScreen extends State_1.default {
    constructor(sa) {
        super();
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.endText = this.overlayRendering.getNew2DText();
        this.endText.position.x = 0.5;
        this.endText.position.y = 0.2;
        this.endText.center = true;
        this.endText.textString = "Game End!";
        this.endText.getElement().style.borderColor = "white";
        this.scoreText = this.overlayRendering.getNew2DText();
        this.scoreText.position.x = 0.5;
        this.scoreText.position.y = 0.3;
        this.scoreText.center = true;
        this.scoreText.textString = "Completion time:";
        this.scoreTextNumber = this.overlayRendering.getNew2DText();
        this.scoreTextNumber.position.x = 0.5;
        this.scoreTextNumber.position.y = 0.35;
        this.scoreTextNumber.center = true;
        this.scoreTextNumber.textString = "0";
        let restartButton = this.overlayRendering.getNewButton();
        restartButton.position.x = 0.5;
        restartButton.position.y = 0.45;
        restartButton.center = true;
        restartButton.textString = "Restart";
        restartButton.onClick(function () {
            this.gotoState = State_1.StatesEnum.GAME;
            sa.restartGame = true;
        }.bind(this));
    }
    init() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.init.call(this);
            this.overlayRendering.show();
            this.game = Game_1.default.getInstanceNoSa();
            document.exitPointerLock();
        });
    }
    reset() {
        super.reset();
        this.overlayRendering.hide();
    }
    update(dt) { }
    draw() {
        this.overlayRendering.draw();
        this.scoreTextNumber.textString = Math.floor(this.game.gameTimer).toString();
    }
}
exports.default = EndScreen;
//# sourceMappingURL=EndScreen.js.map