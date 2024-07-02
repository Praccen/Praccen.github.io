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
exports.StatesEnum = void 0;
var StatesEnum;
(function (StatesEnum) {
    StatesEnum[StatesEnum["STAY"] = 0] = "STAY";
    StatesEnum[StatesEnum["LOADINGSCREEN"] = 1] = "LOADINGSCREEN";
    StatesEnum[StatesEnum["MAINMENU"] = 2] = "MAINMENU";
    StatesEnum[StatesEnum["OPTIONS"] = 3] = "OPTIONS";
    StatesEnum[StatesEnum["CONTROLS"] = 4] = "CONTROLS";
    StatesEnum[StatesEnum["GAME"] = 5] = "GAME";
    StatesEnum[StatesEnum["ENDSCREEN"] = 6] = "ENDSCREEN";
    StatesEnum[StatesEnum["DEBUGMODE"] = 7] = "DEBUGMODE";
})(StatesEnum = exports.StatesEnum || (exports.StatesEnum = {}));
class State {
    constructor() {
        this.gotoState = StatesEnum.STAY;
        this.initialized = false;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.initialized = true;
        });
    }
    reset() {
        this.initialized = false;
    }
    onExit(e) { }
    update(dt) { }
    prepareDraw(dt) { }
    draw() { }
}
exports.default = State;
//# sourceMappingURL=State.js.map