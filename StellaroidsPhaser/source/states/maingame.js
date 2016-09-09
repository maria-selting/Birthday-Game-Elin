/**
 * Main Game State - When shown, you're playing the game!
 */

var MainGame = function(game) 
{ 
    this.debugMode = true;
}

// Global variables that we can access from within the game
var Input = null
var GameInfo = null


MainGame.prototype.create = function()
{
    GameInfo = {
        worldWidth: 1024,
        worldHeight: 1024,
        debugPhysics: false,
        lives: 3,
     
    }

    this.galaxy = new Galaxy()
    this.gui = new GameGui(this.Galaxy)

    music = game.add.audio("luminesence");
    music.play();
    
    if ( Input == null )
    {
        Input = new GameInput()        
    }
}

MainGame.prototype.update = function()
{
    var dt = game.time.elapsed / 1000.0

    this.galaxy.update(dt)
    this.gui.update(dt)
}
