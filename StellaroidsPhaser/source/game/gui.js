/**
 * Handles the in game graphical user interface.
 * Responsible for rendering the score, lives, etc.
 */

var GameGui = function(game, gameWorld)
{
    this.game = game
    this.world = gameWorld
    
    this.create()
}


GameGui.prototype.constructor = GameGui 


/**
 * Create the gui by building the label objects etc.
 */
GameGui.prototype.create = function()
{
    // Figure out how big the screen is by taking values from the camera
    var screenWidth = game.camera.width
    var screenHeight = game.camera.height
    
    // Default style for gui elements
    var defaultStyle = { font: "20px Tahoma", fill: "#ffffff", boundsAlignH: "center" }
    
    this.livesTitleLabel = game.add.text(screenWidth - 120, 20, "Lives", defaultStyle)
    this.livesTitleLabel.fixedToCamera = true
    this.livesTitleLabel.setShadow(2, 2, 'rgba(0, 0, 0, 0.75)', 1);
    this.livesTitleLabel.setTextBounds(0, 0, 100, 40)
    
    this.livesLabel = game.add.text(screenWidth - 120, 60, "0", defaultStyle)
    this.livesLabel.fixedToCamera = true
    this.livesLabel.setShadow(2, 2, 'rgba(0, 0, 0, 0.75)', 1);
    this.livesLabel.setTextBounds(0, 0, 100, 40)       
    
    this.livesLabelValue = 0
}


/** 
 * Called every frame by the MainGame state.
 * Updates all labels with the current score etc.
 */
GameGui.prototype.update = function(dt)
{
    if ( this.livesLabelValue != GameInfo.lives ) 
    {
        this.livesLabel.setText(GameInfo.lives)
        this.livesLabelValue = GameInfo.lives
    }    
}
