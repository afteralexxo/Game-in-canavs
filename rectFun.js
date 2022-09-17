export default class rectangle{

    constructor(x, y, ctx){
        this.x = x
        this.y = y
        this.ctx = ctx
        this.dx = 5
        this.dy = 5
        this.keyCode = 0
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, 90, 60)
        this.ctx.stroke()
    }

    update(){
        this.draw()
        if(this.keyCode == 40){
            if(this.y > innerHeight-90 || this.y < 0){
                this.dy = -this.dy
            }
            this.y += this.dy
        }

        else if(this.keyCode == 39){
            this.x += this.dx
            console.log(this.x);
            if(this.x > innerWidth-90 || this.x < 0){
                this.dx = -this.dx
            } 
        }
    }
}



