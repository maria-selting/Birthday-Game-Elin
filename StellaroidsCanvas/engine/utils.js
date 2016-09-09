engine.utils.assert = function (condition, msg) {
    if (!condition) {
        log("assertion failed: " + msg);
        throw new Error("assertion failed: " + msg);
    }
}

engine.utils.print = function () {
    var str = "";
    for (var i = 0; i < arguments.length - 1; i++) {
        str += arguments[i] + " ";
    }
    
    str += arguments[arguments.length - 1];
    console.log(str);
}

var keys = {
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    space: 32
};

engine.utils.degreesToRadians = function (degrees) {
    return Math.PI * degrees / 180;
}

engine.utils.checkBoundaries = function (galaxySize, objectPosition) {
    if (objectPosition.x > galaxySize.x - 5) {
        objectPosition.x -= galaxySize.x;
    }
    
    else if (objectPosition.x < 5) {
        objectPosition.x += galaxySize.x;
    }
    
    else if (objectPosition.y > galaxySize.y - 5) {
        objectPosition.y -= galaxySize.y;
    }
    
    else if (objectPosition.y < 5) {
        objectPosition.y += galaxySize.y;
    }
}
engine.utils.swapToRemove = function(array, index) {
    array[index] = array[array.length-1];
    array.length--;
}

engine.utils.checkCollision = function (object1, object2) {
    var dx = object1.position.x - object2.position.x;
    var dy = object1.position.y - object2.position.y;

    var collisionDistance = ( Math.max(object1.size.x) + Math.max(object2.size.x) ) / 2;
    if ( Math.sqrt(dx * dx + dy * dy ) < collisionDistance ) {
        return true;
    }

    return false;
}