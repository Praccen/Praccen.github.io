"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AudioPlayer {
    constructor() {
        this.sounds = {
        // bell: new Audio("Assets/Audio/Effects/bell.m4a"), //https://opengameart.org/content/100-cc0-sfx
        };
        this.active = false;
        for (let sound in this.sounds) {
            this.sounds[sound].preload = "auto";
        }
        // this.setVolume("bell", 0.3);
    }
    playSound(key, loop) {
        this.sounds[key].loop = loop;
        this.active && this.sounds[key].play();
    }
    setVolume(key, volume) {
        this.sounds[key].volume = volume;
    }
    setTime(key, time) {
        this.sounds[key].currentTime = time;
    }
    pauseSound(key) {
        this.sounds[key].pause();
    }
    stopAll() {
        // for(const s of Object.values(this.sounds)) {
        //     const playPromise = s.play();
        //     playPromise.then(() => {
        //         s.pause();
        //         s.currentTime = 0.0;
        //     })
        // }
    }
}
exports.default = AudioPlayer;
//# sourceMappingURL=AudioPlayer.js.map