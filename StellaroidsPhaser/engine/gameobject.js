/**
 * All GameObjects should derive from this class before being
 * spawned in the game world. Then you get some handy functions like
 * 'setPosition', 'thrust' and 'moveForward'.
 */


var PDXGameObject = function()
{
    this.sprite = null
}

PDXGameObject.prototype.constructor = PDXGameObject


PDXGameObject.prototype.create = function()
{

}


PDXGameObject.prototype.destroy = function()
{
    this.sprite.destroy()
    this.destroyed = true
}


PDXGameObject.prototype.update = function(dt)
{
    
}


PDXGameObject.prototype.setPosition = function(x, y) 
{
    if ( this.sprite != null ) 
    {
        if ( this.sprite.body != null ) 
        {
            this.sprite.body.x = x
            this.sprite.body.y = y
        }
        else 
        {
            this.sprite.position.x = x
            this.sprite.position.y = y
        }
    }
}


PDXGameObject.prototype.setRotation = function(rotation)
{
    if ( this.sprite != null ) 
    {
        if ( this.sprite.body != null )
        {
            this.sprite.body.rotation = rotation
        }
        else 
        {
            this.sprite.rotation = rotation
        }
    }
}


PDXGameObject.prototype.thrust = function(thrust)
{
    if ( this.sprite != null && this.sprite.body != null ) 
    {
        this.sprite.body.thrust(thrust)      
    }
}


PDXGameObject.prototype.moveForward = function(velocity)
{
    if ( this.sprite != null && this.sprite.body != null ) 
    {
        this.sprite.body.moveForward(velocity)
    }
}
