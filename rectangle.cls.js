export default class rectangle{

    constructor(x, y, ctx){
        this.appleX = Math.random()*innerWidth
        this.appleY = Math.random()*innerHeight
        this.ctx = ctx
        this.x = x; this.y = y
        this.dx = 5; this.dy = 5
        this.width = 90; this.height = 30
        this.keyCode = 0; this.color = '#E3371E'
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, this.width, this.height)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
    }

    apple(){
       this.ctx.beginPath()
       this.ctx.arc(this.appleX, this.appleY, 10, 0, Math.PI*2,false)
       this.ctx.fill()
    }

    eatApple(){
         if(this.appleX - this.x < this.width + 10 && 
            this.appleX - this.x > - 10 &&
            this.appleY - this.y < this.height+ 10 && 
            this.appleY - this.y > -10)
             {
                this.appleX = Math.random()*innerWidth
                this.appleY = Math.random()*innerHeight
                this.width += 10
                this.dx += .5
                this.dy += .5
                
             }
        this.apple()     
    }

    move(){
        this.draw()
        this.eatApple()
        if(this.keyCode == 37)
        {
            this.color = '#5FCDD9'
            this.x -= Math.abs(this.dy)
            if(this.x < 0){
                this.x = innerWidth
            }
        }
        if(this.keyCode == 38)
        {
            this.color = '#591C21'
            this.y -= Math.abs(this.dy)
            if(this.y < 0){
                this.y = innerHeight
            }
        }
        if(this.keyCode == 39)
        {
            this.color = '#04BF9D'
            this.x += Math.abs(this.dx)
            if(this.x > innerWidth){
                this.x = 0
            }
        }
        if(this.keyCode == 40)
        {
            this.color = '#172026'
            this.y += Math.abs(this.dy)
            if(this.y > innerHeight){
                this.y = 0
            }
        } 
    }// end of update()
}// end of class rectangle
