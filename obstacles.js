class Batman {
    constructor(ctx, w, h, posX, posY) {
        this.ctx = ctx;
        this.gameWidth = w;
        this.gameHeight = h;

        this.image = new Image();
        this.image.src = "images/batman-clip.png";

        this.width = 90;
        this.height = 90;

        this.posX = posX
        this.posY = posY


    }
    draw() {

        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)

    }
    move() {

        this.posY += 0.3

    }
};
class Robin extends Batman {
    constructor(ctx, w, h, posX, posY) {
        super(ctx, w, h, posX, posY)
        this.image = new Image();
        this.image.src = "images/robin_bat.png";

    }
}
class Batwoman extends Batman {
    constructor(ctx, w, h, posX, posY) {
        super(ctx, w, h, posX, posY)
        this.image = new Image();
        this.image.src = "images/bat-woman.png";

    }
}

class BatRob extends Batman {
    constructor(ctx, w, h, posX, posY) {
        super(ctx, w, h, posX, posY)
        this.image = new Image();
        this.image.src = "images/batman_robin.png";

    }

}

