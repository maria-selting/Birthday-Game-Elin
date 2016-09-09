var galaxy = null;
var prevTime = null;
var fileDatabase = null;
var screenSize = {x: 600, y: 600};
var ctx = null;
var states = { start: 0, game: 1, gameOver: 2, finish: 3 };
var state = states.start;

function start() {
    var canvas = document.getElementById('my_canvas');
    ctx = canvas.getContext('2d');
    canvas.width = screenSize.x;
    canvas.height = screenSize.y;
    this.document.addEventListener("keydown", keyDown);
    this.document.addEventListener("keyup", keyUp);
    
    this.fileDatabase = new FileDatabase();
    
    canvas.addEventListener("click", function(event) {
        if(state == states.start) {
            if(event.pageY < screenSize.y/2 ) {
                state = states.game;
                galaxy = new Galaxy(ctx, screenSize.x, screenSize.y);
            }
        }
        else if(state == states.gameOver || state == states.finish) { 
            state = states.start;
        }
    });

    requestAnimationFrame(gameLoop, ctx);
}

function FileDatabase() {
    this.images = {};
    this.sounds = {};
    this.dataLoaded = false;
    
    engine.file_manager.loadImages(this,
    [
        "ship",
        "asteroid_01_large",
        "asteroid_02_medium",
        "asteroid_03_medium",
        "asteroid_04_tiny",
        "plasma_projectile",
        "bg",
        "swarm_boss",
        "swarm_drone",
        "start_screen",
        "game_over"
    ]);

    engine.sound.loadSounds(this, 
    [
        "asteroid_hit_01",
        "player_fire_01",
        "player_death_01",
        "final_boss_death_01",
        "asteroid_hit_02",
        "final_boss_hit_01",
    ]);
}

function startScreen() {
    var drawData = { 
        size : screenSize, 
        position : { x: screenSize.x/2, y: screenSize.y/2 },
        angle : 0
    };
    engine.graphics.drawImage(ctx, fileDatabase.images["start_screen"], drawData);
}

function gameOver(galaxy, dt) {
    var drawData = { 
        size : screenSize, 
        position : { x: screenSize.x/2, y: screenSize.y/2 },
        angle : 0
    };
    engine.graphics.drawImage(ctx, fileDatabase.images["game_over"], drawData);
}

function gameLoop(time) {
    if (prevTime == null) {
        prevTime = time;
    }
    var delta = time - prevTime;
    prevTime = time;
    
    if (state == states.game) {
        if ( galaxy.player == null ) {
            state = states.gameOver;
        }
        else {
            updateGalaxy(galaxy, delta);
            if (state == states.game) {
                renderGalaxy(galaxy); 
            }
        }
    }
    else if (state == states.gameOver) {
        gameOver(galaxy, delta);
    }
    else {
        startScreen();
    }
    requestAnimationFrame(gameLoop);
}

function keyDown(event) {
    if (!galaxy) {
        return;
    }
    
    galaxy.isKeyDown[event.keyCode] = true;
    //print("event.keyCode", event.keyCode);
}

function keyUp(event) {
    if (!galaxy) {
        return;
    }
    galaxy.isKeyDown[event.keyCode] = false;
}