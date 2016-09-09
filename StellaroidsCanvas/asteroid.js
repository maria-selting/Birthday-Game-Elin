asteroids = {
    tiny : { size: 30, image: "asteroid_04_tiny", child : null},
    medium : { size: 50, image: "asteroid_02_medium", child : "tiny"},
    large : { size: 70, image: "asteroid_01_large", child : "medium"}
}

function Asteroid(galaxy, dir, id, position) {
    this.imageData = asteroids[id];
    var size = this.imageData.size;
    this.position = { x: position.x, y: position.y };
    this.size = { x: size, y: size };
    this.dir = { x: dir.x, y: dir.y };
}

function updateAsteroid(galaxy, dt, asteroid) {
    asteroid.position.x = asteroid.position.x + asteroid.dir.x * dt;
    asteroid.position.y = asteroid.position.y + asteroid.dir.y * dt;

    engine.utils.checkBoundaries(galaxy.size, asteroid.position);
}

function renderAsteroid(galaxy, asteroid){
    var imageData = asteroid.imageData;
    engine.graphics.drawImage(galaxy.ctx, fileDatabase.images[imageData.image], asteroid);
}

function onHit(galaxy, asteroid) {
    if ( asteroid.imageData.child != null ) {
        createAsteroids(galaxy, 3, asteroid.imageData.child, asteroid.position);
    }
    
    galaxy.player.score += 1;
    fileDatabase.sounds["asteroid_hit_01"].play();
}