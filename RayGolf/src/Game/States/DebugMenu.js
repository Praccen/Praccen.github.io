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
class DebugMenu {
    constructor(stateAccessible, game) {
        this.overlay = new OverlayRendering_1.OverlayRendering();
        this.stateAccessible = stateAccessible;
        this.game = game;
        this.downloadOctreesButton = this.overlay.getNewButton();
        this.downloadOctreesButton.position.x = 0.8;
        this.downloadOctreesButton.position.y = 0.1;
        this.downloadOctreesButton.center = true;
        this.downloadOctreesButton.textSize = 40;
        this.downloadOctreesButton.getInputElement().style.backgroundColor =
            "purple";
        this.downloadOctreesButton.getInputElement().style.color = "white";
        this.downloadOctreesButton.getInputElement().style.borderRadius = "4px";
        this.downloadOctreesButton.getInputElement().style.padding = "10px";
        this.downloadOctreesButton.textString = "Download \nOctrees";
        let self = this;
        this.downloadOctreesButton.onClick(function () {
            self.stateAccessible.meshStore.downloadOctrees();
        });
        this.downloadTransformsButton = this.overlay.getNewButton();
        this.downloadTransformsButton.position.x = 0.6;
        this.downloadTransformsButton.position.y = 0.1;
        this.downloadTransformsButton.center = true;
        this.downloadTransformsButton.textSize = 40;
        this.downloadTransformsButton.getInputElement().style.backgroundColor =
            "purple";
        this.downloadTransformsButton.getInputElement().style.color = "white";
        this.downloadTransformsButton.getInputElement().style.borderRadius = "4px";
        this.downloadTransformsButton.getInputElement().style.padding = "10px";
        this.downloadTransformsButton.textString = "Download \nTransforms";
        this.downloadTransformsButton.onClick(function () {
            self.game.objectPlacer.downloadTransforms();
        });
        this.placementMenuText = this.overlay.getNew2DText();
        this.placementMenuText.position.x = 0.05;
        this.placementMenuText.position.y = 0.01;
        this.placementMenuText.size = 20;
        this.placementMenuText.getElement().style.color = "white";
        this.placementMenuText.getElement().style.textShadow =
            "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
        this.actionText = this.overlay.getNew2DText();
        this.actionText.position.x = 0.2;
        this.actionText.position.y = 0.01;
        this.actionText.size = 20;
        this.actionText.getElement().style.color = "white";
        this.actionText.getElement().style.textShadow =
            "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.overlay.show();
        });
    }
    reset() {
        this.overlay.hide();
    }
    draw() {
        this.overlay.draw();
    }
}
exports.default = DebugMenu;
//# sourceMappingURL=DebugMenu.js.map