class AudioPlayer {
	constructor() {
        this.sounds = {
            concreteSong: new Audio("Assets/Audio/Concrete/Ove - Earth Is All We Have .m4a"), 
            //https://opengameart.org/content/oves-essential-game-audio-pack-collection-160-files-updated 
            forestSong: new Audio("Assets/Audio/Green/forest.m4a"), //https://opengameart.org/content/forest
            battleSong: new Audio("Assets/Audio/Office1/battle.m4a"), //https://opengameart.org/content/battle-bgm
            endingSong: new Audio("Assets/Audio/Nasdaq/Ove Melaa - Hero Within.m4a"), //https://opengameart.org/content/oves-essential-game-audio-pack-collection-160-files-updated 
            
            footsteps: new Audio("Assets/Audio/Effects/Footstep_Dirt_03.m4a"), //https://opengameart.org/content/fantasy-sound-effects-library
            water: new Audio("Assets/Audio/Effects/Footstep_Water_04.m4a"), //https://opengameart.org/content/fantasy-sound-effects-library
            gold: new Audio("Assets/Audio/Effects/Pickup_Gold_01.m4a"), //https://opengameart.org/content/fantasy-sound-effects-library
            wood: new Audio("Assets/Audio/Effects/Inventory_Open_01.m4a"), //https://opengameart.org/content/fantasy-sound-effects-library
            cement: new Audio("Assets/Audio/Effects/Cement_Landing.m4a"), //https://opengameart.org/content/jump-landing
            achievement: new Audio("Assets/Audio/Effects/Jingle_Achievement_00.m4a"), //https://opengameart.org/content/fantasy-sound-effects-library
            smallAchievement: new Audio("Assets/Audio/Effects/completetask_0.m4a"), //https://opengameart.org/content/completion-sound
            hit: new Audio("Assets/Audio/Effects/hit.m4a"), //https://opengameart.org/content/oves-essential-game-audio-pack-collection-160-files-updated 
            firework: new Audio("Assets/Audio/Effects/fw_04.m4a"), //https://opengameart.org/content/25-cc0-bang-firework-sfx
            paperRip: new Audio("Assets/Audio/Effects/Paper_Ripped.m4a"), //https://opengameart.org/content/202-more-sound-effects
            bell: new Audio("Assets/Audio/Effects/bell.m4a"), //https://opengameart.org/content/100-cc0-sfx
            
        }
        
        const values = Object.values(this.sounds);
        var length = values.length;
        
        for (var i = 0; i < length; i++) {
            values[i].preload = "auto";
        }
        
        this.setVolume("paperRip", 0.6);
        this.setVolume("hit", 0.3);
        this.setVolume("achievement", 0.5);
        this.setVolume("wood", 0.4);
        this.setVolume("bell", 0.3);
        this.setVolume("endingSong", 0.1);
	}
    
    playSound(key, loop) {
        //this.sounds[key].loop = loop;
        //this.sounds[key].play();
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
}
