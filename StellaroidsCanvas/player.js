function Player() {
    this.size = {x: 60, y: 99};
    this.position = {x: 256 + this.size.x, y: 256};
    this.dir = {x: 0, y: 0};
    this.angle = engine.utils.degreesToRadians(0);
    this.acceleration = 0.01;
    this.projectiles = [];
    this.lastShootTime = 0;
    this.score = 0;
}

function addProjectile(galaxy, player) {
    var size = { x: 9.8, y: 14.6 }
    var dir = { x: Math.sin(player.angle), y: -Math.cos(player.angle) };
    player.projectiles.push(new Projectile(player, dir, size, 0));
    fileDatabase.sounds["player_fire_01"].play();
}

function removeDeadProjectiles(player) {
    for (var i = 0; i < player.projectiles.length; ++i)
    {
        if ( player.projectiles[i].age > 1000 )
            player.projectiles.splice(i,1);
    }
}

function updatePlayer(galaxy, dt, player) {
    removeDeadProjectiles(player);

    if (galaxy.isKeyDown[keys.up]) {
        player.dir.x += Math.sin(player.angle) * player.acceleration;
        player.dir.y -= Math.cos(player.angle) * player.acceleration;
    }
    
    if (galaxy.isKeyDown[keys.down]) {
        player.dir.x -= Math.sin(player.angle) * player.acceleration;
        player.dir.y += Math.cos(player.angle) * player.acceleration;
    }

    if (galaxy.isKeyDown[keys.left]) {
        player.angle -= engine.utils.degreesToRadians(0.2) * dt;
    }
    
    if (galaxy.isKeyDown[keys.right]) {
        player.angle += engine.utils.degreesToRadians(0.2) * dt;
    }
    
    player.position.x += player.dir.x * dt;
    player.position.y += player.dir.y * dt;

    engine.utils.checkBoundaries(galaxy.size, player.position);

    player.lastShootTime -= dt;
}

function renderPlayer(galaxy, player) {
    engine.graphics.drawImage(galaxy.ctx, fileDatabase.images["ship"], player);
}