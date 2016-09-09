/**
 * The preloader is the first thing the user will see. It will show a 
 * loading bar while we load up all of the assets we need for the game.
 * In the workshop, this will be very fast - but when a user plays the
 * game over the internet, this could take a while.
 */

var PDXPreloader = function(game)
{
	this.loadingBar = null;
	this.ready = false;
}

PDXPreloader.prototype.preload = function()  
{
    // Create a sprite which will act as a loading bar
    var loadingBar = this.add.sprite(512, 384, "loading-bar")
    loadingBar.anchor.setTo(0.5, 0.5)
    
    // This is a special function to tell Phaser to use the given sprite as a loading bar
    this.load.setPreloadSprite(loadingBar)

    // Load up all of the game engine scripts 
    game.load.script('gameobject.js', 'engine/gameobject.js')

    // Call these functions from the game's assets.js file
    preloadAssets(game)   
}

PDXPreloader.prototype.create = function () 
{
    preloadStates(game)

    // When we're done loading, move straight to the title screen
    game.state.start("titlescreen");
}
