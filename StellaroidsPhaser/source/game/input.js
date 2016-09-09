

var GameInput = function(game)
{
    this.game = game
    this.cursorKeys = null
    this.fireKey = null
    
    this.create()
}

GameInput.prototype.constructor = GameInput

GameInput.prototype.create = function()
{
    this.cursorKeys = game.input.keyboard.createCursorKeys();  
    this.fireKey = game.input.keyboard.addKey(Phaser.Keyboard.Z);          
}
