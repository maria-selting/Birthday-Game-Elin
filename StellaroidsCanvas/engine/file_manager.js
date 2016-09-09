engine.file_manager.loadImages = function(fileDatabase, names) {
    var totalImages = names.length;
    var totalImagesLoaded = 0;
    for(var i = 0; i < names.length; i++) {
        var img = new Image();
        fileDatabase.images[names[i]] = img;
        img.src = "sprites/" + names[i] + ".png";

        img.onload = function () {
            totalImagesLoaded++;
            if(totalImagesLoaded == totalImages) {
                fileDatabase.dataLoaded = true;
            }
        }
    }
}