/**
 * The galaxy is responsible for managing everything in the game world.
 * The galaxy will spawn asteroids 
 */

var Galaxy = function()
{
    this.entities = []
    
    this.create()
}


Galaxy.prototype.constructor = Galaxy

Galaxy.prototype.create = function()
{
    game.world.setBounds(0, 0, GameInfo.worldWidth, GameInfo.worldHeight)
    this.background = game.add.sprite( 0, 0, "space-bg" )

    // Setup Physics
    game.physics.startSystem(Phaser.Physics.P2JS)
    game.physics.p2.defaultRestitution = 0.8				// Default Restitution 
    
    this.playerCollisionGroup = game.physics.p2.createCollisionGroup()
    this.playerBulletCollisionGroup = game.physics.p2.createCollisionGroup()
    this.asteroidCollisionGroup = game.physics.p2.createCollisionGroup()
    
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.updateBoundsCollisionGroup();

    // Create Player
    this.player = this.spawn( new Player(100, 100) )
    
    // Create a couple of asteroids
    this.spawn( new Asteroid(300, 100) )
    this.spawn( new Asteroid(100, 300) )
    
    // Camera should follow player
    game.camera.follow(this.player.sprite); 
}
    
Galaxy.prototype.spawn = function(entity)
{
    entity.galaxy = this
    entity.create()

    this.entities.push(entity)
    return entity
}

Galaxy.prototype.numberOfAsteroids = function()
{
    var total = 0
    
    for( var i = 0; i < this.entities.length; i++ )
    {
        if ( this.entities[i] instanceof Asteroid )
        {
            total += 1
        }
    }
    
    return total
}

Galaxy.prototype.update = function(dt)
{
    for( var i = 0; i < this.entities.length; i++ ) 
    {
        if ( this.entities[i].update && this.entities[i].destroyed !== true )
        {
            this.entities[i].update(dt)
        }
    }
    
    // Go backwards through all of the objects in the world so that if we 
    // remove a destroyed object, it doesn't break the for loop
    for( var i = this.entities.length-1; i >= 0; i-- )
    {
        if ( this.destroyed == true )
        {
            this.entities[i].destroy()
            this.entities.splice(i, 1)
        }
    }
}
