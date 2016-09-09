function Projectile(player, dir, size, age) {
    this.dir = { x: dir.x, y: dir.y };
    this.position = {
        x: player.position.x + dir.x * player.size.y / 2.0,
        y: player.position.y + dir.y * player.size.y / 2.0
    };
    console.log("angle", dir.x, dir.y);
    this.speed = 0.5;
    this.size = { x: size.x, y: size.y };
    
    this.angle = player.angle;
    this.age = age;
}

function updateProjectile(galaxy, dt, projectile) {
   
}

function renderProjectile(galaxy, projectile) {
    engine.graphics.drawImage(galaxy.ctx, fileDatabase.images["plasma_projectile"], projectile);
}