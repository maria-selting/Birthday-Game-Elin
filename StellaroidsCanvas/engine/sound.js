engine.sound.loadSounds = function(galaxy, names) {
    var totalSounds = names.length;
    var totalSoundsLoaded = 0;
    for(var i = 0; i < names.length; i++) {
        var sound = new Audio("sound_assets/" + names[i] + ".mp3");
        galaxy.sounds[names[i]] = sound;
    }
}