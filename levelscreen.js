const Screen = {
    ctx: undefined,
    init: function (ctx) {
        this.ctx = ctx
        this.ctx.font = "30px sans-serif"
    },

    update: function (nivel) {
        this.ctx.fillStyle = "red";
        this.ctx.fillText("Nivel " + nivel , 50 , 50);
    }
};