/**
 * The boot state literally just loads the loading bar that will be shown during the "preloader".
 * We then move to the "preloading" state - which renders the loading bar while we load our assets.
 */


/**
 * PDX Boot Constructor 
 * Does nothing at this time.
 */
var PDXBoot = function(game) 
{ 

}
  

/**
 * Preload the "Boot" state which is used by the game engine during loading.
 * We literally just want to load up enough things to show the loading screen.
 */
PDXBoot.prototype.preload = function()
{
    // Load the image we will use as a loading bar for the 'preloading' state.
    game.load.image("loading-bar", "assets/images/loading-bar.png")

    // We also load up the assets script from the game so that we can call functions from it in the next state.
    game.load.script('assets.js', 'source/assets.js')        
}


/**
 * As soon as the 'Boot' state is ready (the preload has finished), we want to move 
 * straight on to the preload state which will show a basic loading bar while we load
 * up all of the game assets.
 */
PDXBoot.prototype.create = function()	
{
    // As soon as we've finished creating this state, we should move to the 'preloader'.
    game.state.start("preloader");
}
