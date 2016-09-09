// Use this function to load all of your images and audio files while the game
// is loading. Each asset that you load will be given a name (key) which you use
// later in the game to refer to the image.
//
// For instance, we load the space background with the name "space-bg" from the 
// file at the path "assets/images/space-bg.png" and whenever we want to use the 
// sprite from in our game, we refer to it using it's name "space-bg".


/**
 * This function is also called by the engine and is used to setup the different game states.
 * If you add a new game state (like a game over screen) you will need to add it here 
 * before you can switch to it.
 */
function preloadStates(game)
{
    game.state.add('titlescreen', TitleScreen);
    game.state.add('maingame', MainGame);   
    game.state.add('credits', Credits)
}


/**
 * Preload the actual game assets, such as sprites, music and audio.
 * Each asset is given a short-name (like 'space-bg'), which you will 
 * then use in the game when you want to create a sprite using this image.
 */
function preloadAssets(game)
{
    game.load.image("space-bg", "assets/images/space-bg.png"); 
    game.load.image("player-ship", "assets/images/player-ship.png"); 
    game.load.image("asteroid-medium-01", "assets/images/asteroid-medium-01.png");
    game.load.image("bullet-plasma", "assets/images/bullet-plasma.png"); 
    game.load.audio("luminesence", "assets/music/luminesence.mp3");
}
