export default class AudioPlayer {
    sound_effects: object;
    sound_effects_volume_multilpliers: object;
    songs: object;
    songs_volume_multilpliers: object;
    active: boolean;
    sound_effects_dir: string;
    songs_dir: string;
    constructor();
    playAudio(key: any, loop: any, volumeMultiplier?: any): void;
    setAudioVolume(key: any, volume: any): void;
    setMusicVolume(volume: number): void;
    setSoundEffectVolume(volume: number): void;
    setAudioTime(key: any, time: any): void;
    pauseAudio(key: any): void;
    stopAll(): void;
}
