
var Player = function(x, y)
{
    this.startX = x
    this.startY = y
}

Player.prototype = Object.create(PDXGameObject.prototype)
Player.prototype.constructor = Player

Player.prototype.create = function()
{   
    var spawnX = this.startX | 100
    var spawnY = this.startY | 100
    
    // Setup Player Variables
    this.rotateSpeed = 100
    this.moveThrust = 400
    this.timeBetweenShots = 0.25
    this.invulnerableTime = 2.0
    
    this.sprite = game.add.sprite( spawnX, spawnY, "player-ship" );

    game.physics.p2.enable(this.sprite, GameInfo.debugPhysics);
    this.sprite.body.setRectangle(30, 120);
    this.sprite.body.damping = 0.2;        
    
    this.sprite.body.setCollisionGroup(this.galaxy.playerCollisionGroup)                         // This object belongs in the 'player objects' group of objects.
    this.sprite.body.collides(this.galaxy.asteroidCollisionGroup, this.onHitAsteroid, this)    // This object should collide with things in the 'asterdoids' group.
    
    this.shotCooldown = 0.0
    this.invulnerableTimeLeft = this.invulnerableTime
    
}

Player.prototype.loseLife = function()
{
    var spawnX = this.startX | 100
    var spawnY = this.startY | 100
    this.setPosition(spawnX, spawnY)

    this.sprite.body.setZeroRotation();
    this.sprite.body.setZeroVelocity();
    
    GameInfo.lives -= 1
    this.invulnerableTime = this.invulnerableTime
}

Player.prototype.onHitAsteroid = function(bodyA, bodyB) 
{
    if ( this.invulnerableTimeLeft <= 0 )
    {
        this.loseLife()
    }
}

Player.prototype.update = function(dt)
{
    if ( this.shotCooldown >= 0 )
    {
        this.shotCooldown -= dt
    }
    
    if ( this.invulnerableTimeLeft >= 0 )
    {
        this.invulnerableTimeLeft -= dt
        
        // Make the ship blink when invulnerable
        if ( Math.floor(this.invulnerableTimeLeft * 5) % 2 == 0 )
        {
            this.sprite.alpha = 0.2
        }
        else 
        {
            this.sprite.alpha = 1.0
        }
    }
    else 
    {
        this.sprite.alpha = 1.0
    }
    
    var cursors = Input.cursorKeys;
    var fireKey = Input.fireKey;

    if (cursors.left.isDown)
    {
        this.sprite.body.rotateLeft(this.rotateSpeed);
    }
    else if (cursors.right.isDown)
    {
        this.sprite.body.rotateRight(this.rotateSpeed);
    }
    else
    {
        this.sprite.body.setZeroRotation();
    }

    if (cursors.up.isDown)
    {
        this.sprite.body.thrust(this.moveThrust);
    }
    else if (cursors.down.isDown)
    {
        this.sprite.body.reverse(this.moveThrust);
    }      

    if (fireKey.isDown)
    {
        if ( this.shotCooldown <= 0 )
        {
            var bullet = this.galaxy.spawn( new Bullet() )
            bullet.setPosition( this.sprite.position.x, this.sprite.position.y )
            bullet.setRotation( this.sprite.body.rotation )
            bullet.sprite.z = this.sprite.z + 1
        
            this.shotCooldown = this.timeBetweenShots
        }
    }  
}
