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
exports.StateAccessible = exports.options = exports.input = void 0;
const AudioPlayer_1 = require("../Engine/Audio/AudioPlayer");
const Input_1 = require("../Engine/Input/Input");
const MeshStore_1 = require("../Engine/AssetHandling/MeshStore");
const State_1 = require("../Engine/State");
const StateMachine_1 = require("../Engine/StateMachine");
const TextureStore_1 = require("../Engine/AssetHandling/TextureStore");
const ControlsMenu_1 = require("./States/ControlsMenu");
const DebugMode_1 = require("./States/DebugMode");
const Game_1 = require("./States/Game");
const LoadingScreen_1 = require("./States/LoadingScreen");
const Menu_1 = require("./States/Menu");
const OptionsMenu_1 = require("./States/OptionsMenu");
const WebUtils_1 = require("../Engine/Utils/WebUtils");
const OverlayRendering_1 = require("../Engine/Rendering/OverlayRendering");
// Globals
exports.input = new Input_1.default();
exports.options = {
    useCrt: false,
    useBloom: false,
    foldableGrass: false,
    showFps: true,
    grassDensity: 10000,
    volume: 0.05,
};
/**
 * These are the variables available to all the states
 */
class StateAccessible {
}
exports.StateAccessible = StateAccessible;
class GameMachine extends StateMachine_1.default {
    constructor() {
        super(State_1.StatesEnum.LOADINGSCREEN);
        this.initializeOptions();
        this.stateAccessible = {
            textureStore: new TextureStore_1.default(),
            meshStore: new MeshStore_1.default(),
            // fpsDisplay: null,
            audioPlayer: new AudioPlayer_1.default(),
            restartGame: false,
        };
        // Add states
        this.addState(State_1.StatesEnum.LOADINGSCREEN, LoadingScreen_1.default, 1 / 60.0, new LoadingScreen_1.default(this.stateAccessible));
        this.addState(State_1.StatesEnum.MAINMENU, Menu_1.default, 1.0 / 60.0, new Menu_1.default(this.stateAccessible));
        this.addState(State_1.StatesEnum.OPTIONS, OptionsMenu_1.default, 1.0 / 60.0, new OptionsMenu_1.default(this.stateAccessible));
        this.addState(State_1.StatesEnum.CONTROLS, ControlsMenu_1.default, 1.0 / 60.0, new ControlsMenu_1.default(this.stateAccessible));
        let game = Game_1.default.getInstance(this.stateAccessible);
        this.addState(State_1.StatesEnum.GAME, Game_1.default, 1.0 / 144.0, game);
        this.stateAccessible.restartGame = true;
        // game.load();
        this.addState(State_1.StatesEnum.DEBUGMODE, DebugMode_1.default, 1.0 / 144.0, new DebugMode_1.default(this.stateAccessible, game));
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.fpsDisplay = this.overlayRendering.getNew2DText();
        this.fpsDisplay.position.x = 0.01;
        this.fpsDisplay.position.y = 0.01;
        this.fpsDisplay.size = 18;
        this.fpsDisplay.scaleWithWindow = false;
        this.fpsDisplay.getElement().style.color = "lime";
    }
    onExit(e) {
        WebUtils_1.WebUtils.SetCookie("showFps", exports.options.showFps.valueOf().toString());
        WebUtils_1.WebUtils.SetCookie("useCrt", exports.options.useCrt.valueOf().toString());
        WebUtils_1.WebUtils.SetCookie("useBloom", exports.options.useBloom.valueOf().toString());
        WebUtils_1.WebUtils.SetCookie("foldableGrass", exports.options.foldableGrass.valueOf().toString());
        WebUtils_1.WebUtils.SetCookie("volume", exports.options.volume.toString());
        WebUtils_1.WebUtils.SetCookie("grassDensity", exports.options.grassDensity.toString());
        for (let s of this.states) {
            s[1].state.onExit(e);
        }
    }
    initializeOptions() {
        exports.options.showFps = !(WebUtils_1.WebUtils.GetCookie("showFps") == "false");
        exports.options.useCrt = WebUtils_1.WebUtils.GetCookie("useCrt") == "true";
        exports.options.useBloom = WebUtils_1.WebUtils.GetCookie("useBloom") == "true";
        exports.options.foldableGrass = WebUtils_1.WebUtils.GetCookie("foldableGrass") == "true";
        let volumeCookie = WebUtils_1.WebUtils.GetCookie("volume");
        if (volumeCookie != "") {
            exports.options.volume = parseFloat(volumeCookie);
        }
        let grassDensityCookie = WebUtils_1.WebUtils.GetCookie("grassDensity");
        if (grassDensityCookie != "") {
            exports.options.grassDensity = parseFloat(grassDensityCookie);
        }
    }
    runCurrentState() {
        const _super = Object.create(null, {
            runCurrentState: { get: () => super.runCurrentState }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.fpsDisplay.setHidden(!exports.options.showFps);
            this.fpsDisplay.textString = Math.round(this.fps) + "";
            this.overlayRendering.draw();
            _super.runCurrentState.call(this);
        });
    }
}
exports.default = GameMachine;
//# sourceMappingURL=GameMachine.js.map