const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    frames: 1,
    framesCounter: 0,
    fps: 60,
    score: undefined,
    player: undefined,
    matrix:
        [[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]],
    batmans: [],
    nivel: 1,
    mainMusic: new Audio('images/batman-60.mp3'),


    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = window.innerWidth * 0.98;
        this.height = window.innerHeight * 0.98;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.start();

    },

    start() {

        this.reset();

        this.interval = setInterval(() => {
            this.mainMusic.play()

            //this.clear();
            this.drawAll()
            this.moveAll()
            this.isCollision()

            if (this.batmans.length == 0 && this.nivel >= 4) {

                this.stopMusic()
                this.WinOver()
                let audioWin = document.createElement('audio')
                audioWin.src = 'images/joker-risa.mp3'
                audioWin.volume = 1
                audioWin.play()

            }
            //NIVELES!!!!!!
            if (this.batmans.length == 0) {
                this.nivel += 1;
                this.levels();
                this.batmans = [];
                this.reset();
            }
            //HA HAAHAHA HAHAHAHAA HAHAAHAHHA HAHA HAHAHA


        }, 1000 / this.fps)
    },



    reset() {
        //reset del game
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.width, this.height);
        this.batman = new Batman(this.ctx, this.width, this.height);
        this.generateBatmans()
        this.gameover = new GameOver(this.ctx, this.width, this.height);
        this.winover = new WinOver(this.ctx, this.width, this.height);
        this.marcador = Screen;
        this.marcador.init(this.ctx);
    },

    drawAll() {
        this.background.draw();
        this.player.draw();
        this.drawObstacles();
        this.levelScreen();
        //PINTANDO CARTAAA BABYYY
        for (i = 0; i < this.player.bulletsCards.length; i++) {

            this.player.bulletsCards[i].draw();
        }

    },

    drawObstacles() {
        this.batmans.forEach(batman => batman.draw());
    },

    generateBatmans() {
        if (this.nivel == 1 || this.nivel == 1) {
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix[i].length; j++) {
                    if (this.matrix[i][j] == 1) {
                        this.batmans.push(new Batman(this.ctx, this.width, this.height, window.innerWidth / 10 * j, window.innerHeight / 8 * i))

                    }
                }

            }

        }

        if (this.nivel == 2) {
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix[i].length; j++) {
                    if (this.matrix[i][j] == 1) {
                        this.batmans.push(new Robin(this.ctx, this.width, this.height, window.innerWidth / 10 * j, window.innerHeight / 8 * i))

                    }
                }

            }
        }

        if (this.nivel == 3) {
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix[i].length; j++) {
                    if (this.matrix[i][j] == 1) {
                        this.batmans.push(new Batwoman(this.ctx, this.width, this.height, window.innerWidth / 10 * j, window.innerHeight / 8 * i))

                    }
                }

            }

        }
        if (this.nivel == 4) {
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix[i].length; j++) {
                    if (this.matrix[i][j] == 1) {
                        this.batmans.push(new BatRob(this.ctx, this.width, this.height, window.innerWidth / 10 * j, window.innerHeight / 8 * i))

                    }
                }

            }

        }

    },
    moveAll() {
        for (i = 0; i < this.player.bulletsCards.length; i++) {
            this.player.bulletsCards[i].move();
        }
        this.batmans.forEach(batman => batman.move());

    },

    clear() {  //CLEAR AUN NO HACE NADAAAAAAAAAAA , just wait!


    },

    isCollision() { // funcion para comprobar colisiones

        //metodo para eliminar y agregar elementos

        this.batmans.some((batman, idx) => {
            //comprobar que pase al menos 1
            this.player.bulletsCards.some((bulletCards, index) => {

                if (bulletCards.posX + bulletCards.width >= batman.posX &&
                    bulletCards.posY + bulletCards.height >= batman.posY &&
                    bulletCards.posX <= batman.posX + batman.width &&
                    bulletCards.posY <= batman.posY + batman.height) {
                    console.log(this.batmans)
                    this.batmans.splice(idx, 1)
                    this.player.bulletsCards.splice(index, 1)



                }


            })


        }


        );
        //bajandoOoOoOoOo         
        this.batmans.some((batman) => {
            if (batman.posY > this.height - 90) {

                this.gameOver()
            }

        })


    },
    levels() {
        if (this.nivel == 2) {


            this.matrix =
                [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]]

        }
        if (this.nivel == 3) {
            this.matrix =
                [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 0, 0]]

        }



        if (this.nivel == 4) {
            this.matrix =
                [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1 ,1],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]]



        }

    },
    gameOver() {
        //FINALLLLLLLLLLLLLLLLL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        this.gameover.draw()
        clearInterval(this.interval);
    },

    WinOver() {
        this.winover.draw()
        clearInterval(this.interval);

    },
    music() {
        this.mainMusic.volume = 0.5
        this.mainMusic.loop = true
        this.mainMusic.play()
    },
    stopMusic() {
        this.mainMusic.pause()
    },
    levelScreen() {
        this.marcador.update(this.nivel)
    }
};    