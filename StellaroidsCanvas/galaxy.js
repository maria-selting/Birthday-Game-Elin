function Galaxy(ctx, width, height) {
    this.ctx = ctx;
    this.size = {x: width, y: height};
    this.position = {x: width / 2, y: height / 2};
    this.angle = 0;
    this.player = new Player();
    this.asteroids = [];
    this.gameOverScreen = 750;

    this.isKeyDown = [];
    for (var i = 0; i < 255; i++) {
        this.isKeyDown[i] = false;
    }
}

function createAsteroids(galaxy, numAsteroids, id, position, dt)
{
    for (var i = 0; i < numAsteroids; ++i) {
        var dir = { x: (Math.random() * 2 - 1) * 0.1, y: (Math.random() * 2 - 1) * 0.1 };
        galaxy.asteroids.push(new Asteroid(galaxy, dir, id, position));
    }
}

function updateGalaxy(galaxy, dt) {
    updatePlayer(galaxy, dt, galaxy.player);
    
    for (var i = 0; i < galaxy.asteroids.length; ++i) {
        updateAsteroid(galaxy, dt, galaxy.asteroids[i]);
    }

    for (var i = galaxy.player.projectiles.length-1; i >= 0; --i) {
        updateProjectile(galaxy, dt, galaxy.player.projectiles[i]);
    }

    for (var i = galaxy.asteroids.length-1; i >= 0; --i) {
        for (var j = galaxy.player.projectiles.length-1; j >= 0; --j) {
            if (engine.utils.checkCollision(galaxy.asteroids[i], galaxy.player.projectiles[j])) {
                engine.utils.swapToRemove(galaxy.player.projectiles, j);
                onHit(galaxy, galaxy.asteroids[i]);
                engine.utils.swapToRemove(galaxy.asteroids, i);
                break;
            }
        }
    }
}

function renderGalaxy(galaxy) {
    galaxy.ctx.clearRect(0, 0, galaxy.size.x, galaxy.size.y);
    renderBackground(galaxy);
    
    if ( galaxy.player != null ) {
        renderPlayer(galaxy, galaxy.player);
    }
    
    
    for (var i = 0; i < galaxy.player.projectiles.length; ++i) {
        renderProjectile(galaxy, galaxy.player.projectiles[i]);
    }
    
    for (var i = 0; i < galaxy.asteroids.length; ++i) {
        renderAsteroid(galaxy, galaxy.asteroids[i]);
    }
}

function renderBackground(galaxy) {
    engine.graphics.drawImage(galaxy.ctx, fileDatabase.images["bg"], galaxy);
}