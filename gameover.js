class GameOver {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.gameWidth = w
        this.gameHeight = h

        this.image = new Image();
        this.image.src = 'images/game-over.png';

    }
    draw() {
        this.ctx.drawImage(this.image, 500, 50, 570, 300);
    }






}