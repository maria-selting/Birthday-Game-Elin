engine.graphics.drawImage = function(ctx, image, drawData) {
    ctx.save();
    ctx.translate(drawData.position.x, drawData.position.y);
    ctx.rotate(drawData.angle);
    ctx.drawImage(image, -drawData.size.x/2, -drawData.size.y/2, drawData.size.x, drawData.size.y);
    ctx.restore();
}