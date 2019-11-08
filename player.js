class Player {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.gameWidth = w;
        this.gameHeight = h;



        this.image = new Image();
        this.image.src = "images/joker-playe.png";

        this.width = 120;
        this.height = 120;

        this.posX = 700
        this.posY = 600
        this.vel = 25
        //MEZCLUM 
        this.bulletsCards = []

        this.setEventListeners()
    }

    draw() {

        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
    goLeft() {
        this.posX >= 70 ? this.posX -= this.vel : null
    }
    goRight() {
        this.posX + this.width + 50 <= this.gameWidth ? this.posX += this.vel : null
    }



    setEventListeners() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case 37:
                    this.goLeft()
                    break
                case 39:
                    this.goRight()
                    break
                case 32:
                    this.bulletsCards.push( new bulletCards(this.ctx, this.width, this.height, this.posX, this.posY))
                    break
            }
        }
    }




}    