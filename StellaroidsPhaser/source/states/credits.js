/**
 * Credits
 */

var Credits = function(game) 
{ 

}

 
Credits.prototype = 
{
  	create: function()
  	{
        // Figure out how big the screen is by taking values from the camera
        var screenWidth = this.game.camera.width
        var screenHeight = this.game.camera.height
        
        // Use the space background image as the background for the title screen
        this.background = this.game.add.sprite( 0, 0, "space-bg" )
        this.background.width = screenWidth
        this.background.height = screenHeight
        
        // Create a text label for the title and make sure it's centered horizontally
        var titleStyle = { font: "64px Futura", fill: "#ffffff", boundsAlignH: "center" }
        this.title = this.game.add.text(0, 0, "Credits", titleStyle);
        this.title.setTextBounds(0, 60, screenWidth, screenHeight)
        
        // Text style for the menu items
        var menuStyle = { font: "24px Verdana", fill: "#ffffff", boundsAlignH: "center" }      

        // Add a 'Back' button you can click on
        this.credits = this.game.add.text(0, 0, "DONE", menuStyle);
        this.credits.setTextBounds(0, screenHeight - 130, screenWidth, screenHeight)     
		this.credits.inputEnabled = true;
		this.credits.events.onInputDown.add(this.onDone, this);        
	},
	update: function()
	{

    },
	onDone: function()
	{
		this.game.state.start("titlescreen");
    },
}
