export default class rectangle{

    constructor(x, y, ctx){
        this.x = x
        this.y = y
        this.ctx = ctx
        this.dx = 10
        this.dy = 10
        this.keyCode = 0
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, 90, 60)
        this.ctx.stroke()
    }

    update(){
        this.draw()
        if(this.keyCode == 37)
        {
            this.x -= Math.abs(this.dy)
            if(this.x+90 < 0){
                this.x = innerWidth
            }
        }
        if(this.keyCode == 38)
        {
            this.y -= Math.abs(this.dy)
            if(this.y+60 < 0){
                this.y = innerHeight
            }
        }
        if(this.keyCode == 39)
        {
            this.x += Math.abs(this.dx)
            if(this.x > innerWidth){
                this.x = 0
            }
        }
        if(this.keyCode == 40)
        {
            this.y += Math.abs(this.dy)
            if(this.y > innerHeight){
                this.y = 0
            }
        } 
    }// end of update()
}// end of class rectangle
