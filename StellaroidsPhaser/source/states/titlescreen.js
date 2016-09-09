/**
 * Title Screen
 */

var TitleScreen = function(game) 
{ 

}

 
TitleScreen.prototype.create = function()
{
    // Figure out how big the screen is by taking values from the camera
    var screenWidth = this.game.camera.width
    var screenHeight = this.game.camera.height

    // Use the space background image as the background for the title screen
    this.background = this.game.add.sprite( 0, 0, "space-bg" )
    this.background.width = screenWidth
    this.background.height = screenHeight

    // Horizontal bar behind the title
    var horizontalBar = this.game.add.graphics()
    horizontalBar.beginFill(0x000000, 0.2)
    horizontalBar.drawRect(0, 50, screenWidth, 110)        

    // Create a text label for the title and make sure it's centered horizontally
    var titleStyle = { font: "64px Futura", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" }
    this.title = this.game.add.text(0, 0, "STELLAROIDS", titleStyle);
    this.title.setShadow(2, 2, 'rgba(0, 0, 0, 0.75)', 1);
    this.title.setTextBounds(0, 60, screenWidth, 100)

    // Add a spinning asteroid to the middle of the screen
    this.asteroid = this.game.add.sprite( screenWidth * 0.5, screenHeight * 0.5, "asteroid-medium-01" )
    this.asteroid.anchor.setTo(0.5, 0.5)

    // Text style for the menu items
    var menuStyle = { font: "24px Verdana", fill: "#ffffff", boundsAlignH: "center" }

    // Add a 'Start Game' menu item you can click on
    this.startGame = this.game.add.text(0, 0, "START GAME", menuStyle);
    this.startGame.setTextBounds(0, screenHeight - 180, screenWidth, screenHeight)
    this.startGame.inputEnabled = true;
    this.startGame.events.onInputDown.add(this.onStartGame, this);        

    // Add a 'Credits' menu item you can click on
    this.credits = this.game.add.text(0, 0, "CREDITS", menuStyle);
    this.credits.setTextBounds(0, screenHeight - 130, screenWidth, screenHeight)
    this.credits.inputEnabled = true;
    this.credits.events.onInputDown.add(this.onCredits, this);        
}


TitleScreen.prototype.update = function()
{
    this.asteroid.angle += 0.2
}


TitleScreen.prototype.onStartGame = function()
{
    this.game.state.start("maingame");
}


TitleScreen.prototype.onCredits = function()
{
    this.game.state.start("credits");
}
