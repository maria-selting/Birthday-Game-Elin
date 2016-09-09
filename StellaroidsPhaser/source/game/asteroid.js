/**
 * Represents a single Asteroid in the game.
 */

var Asteroid = function(x, y)
{
    this.startX = x
    this.startY = y
}

Asteroid.prototype = Object.create(PDXGameObject.prototype)
Asteroid.prototype.constructor = Asteroid

Asteroid.prototype.create = function()
{
    var spawnX = this.startX | 200
    var spawnY = this.startY | 200
    
    this.sprite = game.add.sprite( spawnX, spawnY, "asteroid-medium-01" );

    game.physics.p2.enable(this.sprite, GameInfo.debugPhysics);
    this.sprite.body.setCircle(60);
    this.sprite.body.damping = 0.2;      
    
    this.sprite.body.setCollisionGroup(this.galaxy.asteroidCollisionGroup)       
    this.sprite.body.collides(this.galaxy.playerCollisionGroup)              
    this.sprite.body.collides(this.galaxy.playerBulletCollisionGroup, this.onHitAsteroid, this)
    

}

Asteroid.prototype.onHitAsteroid = function(bodyA, bodyB)
{
    this.destroy();
}


//
//this.sprite.body.setCollisionGroup(this.galaxy.playerCollisionGroup)                         // This object belongs in the 'player objects' group of objects.
    //this.sprite.body.collides(this.galaxy.asteroidCollisionGroup, this.onHitAsteroid, this)    // This object should collide with things in the 'asterdoids' group.