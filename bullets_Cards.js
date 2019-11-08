class bulletCards {
  constructor(ctx, width, height, playerPosX, playerposY) {
    this.ctx = ctx
    this.bulletWidth = width
    this.bulletHeight = height

    this.image = new Image()
    this.image.src = "./images/cards.png"

    this.width = 35;
    this.height = 35;


    this.posX = playerPosX
    this.posY = playerposY
    this.velY = 5


  }
  draw() {

    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  move() {

    this.posY -= this.velY;

  }


  // setEventListeners() {
  //   document.onkeydown = e => {
  //     switch (e.keyCode) {
  //       case 32:
  //         this.posY -= this.velY
  //         break



  //     }
  //   }

  // }  


}

