/**
 * A simple bullet class that moves forward at a fixed speed.
 */

var Bullet = function()
{

}

Bullet.prototype = Object.create(PDXGameObject.prototype)
Bullet.prototype.constructor = Bullet

Bullet.prototype.create = function()
{
    // Settings for this bullet
    this.speed = 600            // Speed it should move at
    this.life = 1.5             // How many seconds until it disappears?
    
    // Create the image for this bullet
    this.sprite = game.add.sprite( 100, 100, "bullet-plasma" );
    
    game.physics.p2.enable(this.sprite, GameInfo.debugPhysics);
    this.sprite.body.setCircle(20);
    this.sprite.body.damping = 0;    
    
    this.sprite.body.setCollisionGroup(this.galaxy.playerBulletCollisionGroup)        
    this.sprite.body.collideWorldBounds = false    
    this.sprite.body.collides(this.galaxy.asteroidCollisionGroup, this.onHitAsteroid, this)
    
}

Bullet.prototype.update = function(dt)
{
    // Move forward at a fixed speed
    this.sprite.body.moveForward(this.speed)
    
    // As bullets might fly off and never hit anything, they could live forever (eating up engine time)
    // So, we tick down a counter for how long we want the bullet to live for before we clear it away
    this.life -= dt
    
    // If a bullet has less than half a second of life left, start to fade it out
    if ( this.life < 0.5 )
    {
        this.sprite.alpha = this.life * 2.0
    }
    
    // When a bullet has no life left, destroy it
    if ( this.life < 0 )
    {
        this.destroy()
    }
    
    
}

Bullet.prototype.onHitAsteroid = function(bodyA, bodyB)
    {
    this.destroy();
    }