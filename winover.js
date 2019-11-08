class WinOver {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.gameWidth = w
        this.gameHeight = h

        this.image = new Image();
        this.image.src = 'images/joker_wiiin.JPEG';


    }
    draw() {
        this.ctx.drawImage(this.image, 0, 0, window.innerWidth * 0.98, window.innerHeight * 0.98);
    }






}