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
const State_1 = require("./State");
class StateMachine {
    constructor(startState) {
        this.fps = 0;
        // Frame timer variables
        this.lastTick = null;
        this.updateTimer = 0.0;
        this.fpsUpdateTimer = 0.0;
        this.frameCounter = 0;
        this.dt = 0.0;
        this.states = new Map();
        this.currentState = startState;
        this.firstLoop = true;
    }
    addState(stateEnum, stateType, minUpdateRate, state) {
        this.states.set(stateEnum, {
            stateType: stateType,
            minUpdateRate: minUpdateRate,
            state: state,
        });
        this.states.get(stateEnum).state.reset();
    }
    updateFrameTimers() {
        let now = Date.now();
        this.dt = (now - (this.lastTick || now)) * 0.001;
        this.lastTick = now;
        this.frameCounter++;
        this.fpsUpdateTimer += this.dt;
        if (this.fpsUpdateTimer > 0.5) {
            this.fps = this.frameCounter / this.fpsUpdateTimer;
            this.fpsUpdateTimer -= 0.5;
            this.frameCounter = 0;
        }
    }
    updateState(state, minUpdateRate) {
        this.updateFrameTimers();
        // Constant update rate
        this.updateTimer += this.dt;
        let updatesSinceRender = 0;
        if (minUpdateRate != undefined) {
            //Only update if update timer goes over update rate
            while (this.updateTimer >= minUpdateRate) {
                if (updatesSinceRender >= 20) {
                    // Too many updates, throw away the rest of dt (makes the game run in slow-motion)
                    this.updateTimer = 0;
                    break;
                }
                state.update(minUpdateRate);
                this.updateTimer -= minUpdateRate;
                updatesSinceRender++;
            }
        }
        if (updatesSinceRender == 0) {
            // dt is faster than min update rate, or no min update rate is set
            state.update(this.updateTimer);
            this.updateTimer = 0.0;
        }
        state.prepareDraw(this.dt);
        if (!this.firstLoop) {
            state.draw();
        }
        this.firstLoop = false;
    }
    runCurrentState() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.states.get(this.currentState).state.initialized) {
                yield this.states.get(this.currentState).state.init();
            }
            // Update the state
            this.updateState(this.states.get(this.currentState).state, this.states.get(this.currentState).minUpdateRate);
            // Check if we should change state
            if (this.states.get(this.currentState).state.gotoState != State_1.StatesEnum.STAY) {
                let oldState = this.currentState;
                this.currentState = this.states.get(this.currentState).state.gotoState;
                this.states.get(oldState).state.reset();
                this.states.get(oldState).state.gotoState = State_1.StatesEnum.STAY;
                // TODO: Add different ways to switch states, like for example, maybe we want to just have a state overlayed on top of another (pause menu).
            }
            requestAnimationFrame(this.runCurrentState.bind(this));
        });
    }
    start() {
        requestAnimationFrame(this.runCurrentState.bind(this));
    }
}
exports.default = StateMachine;
//# sourceMappingURL=StateMachine.js.map