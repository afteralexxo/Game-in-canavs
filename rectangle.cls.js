export default class rectangle {

<<<<<<< HEAD
    constructor(x, y, ctx) {
        this.appleX = Math.random() * (innerWidth - 200) + 100
        this.appleY = Math.random() * (innerHeight - 200) + 100
        this.ctx = ctx
        this.x = x; this.y = y
        this.dx = 5; this.dy = 5
        this.width = 100; this.height = 30
=======
    constructor(x, y, ctx){
        this.appleX = Math.random()*innerWidth
        this.appleY = Math.random()*innerHeight
        this.ctx = ctx
        this.x = x; this.y = y
        this.dx = 5; this.dy = 5
        this.width = 90; this.height = 30
>>>>>>> a2b7b92dbba6a01803f9ca3fe703206e3f1aca27
        this.keyCode = 0; this.color = '#E3371E'
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, this.width, this.height)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.beginPath()

        this.ctx.fillStyle = 'black'
        this.ctx.arc(this.x + this.width, this.y + 15, 15, 0, Math.PI * 2, false)
        this.ctx.fill()
        this.ctx.beginPath()

        this.ctx.fillStyle = 'black'
        this.ctx.arc(this.x, this.y + 15, 15, 0, Math.PI * 2, false)
        this.ctx.fill()
    }

<<<<<<< HEAD
    apple() {
        this.ctx.beginPath()
        this.ctx.arc(this.appleX, this.appleY, 10, 0, Math.PI * 2, false)
        this.ctx.fillStyle = ''
        this.ctx.fill()
    }

    eatApple() {


        if (this.appleX - this.x < this.width + 10 &&
            this.appleX - this.x > - 10 &&
            this.appleY - this.y < this.height + 10 &&
            this.appleY - this.y > -10) {
            this.appleX = Math.random() * (innerWidth - 200) + 100
            this.appleY = Math.random() * (innerHeight - 200) + 100
            this.width += 10
            this.dx += .5
            this.dy += .5

        }
        this.apple()
    }

    move() {
        this.draw()
        this.eatApple()
        if (this.keyCode == 37) {
=======
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
>>>>>>> a2b7b92dbba6a01803f9ca3fe703206e3f1aca27
            this.color = '#5FCDD9'
            this.x -= Math.abs(this.dy)
            if (this.x < -this.width) {
                this.x = innerWidth
            }
        }
<<<<<<< HEAD
        if (this.keyCode == 38) {
=======
        if(this.keyCode == 38)
        {
>>>>>>> a2b7b92dbba6a01803f9ca3fe703206e3f1aca27
            this.color = '#591C21'
            this.y -= Math.abs(this.dy)
            if (this.y < -this.height) {
                this.y = innerHeight
            }
        }
<<<<<<< HEAD
        if (this.keyCode == 39 || this.keyCode == 0) {
=======
        if(this.keyCode == 39)
        {
>>>>>>> a2b7b92dbba6a01803f9ca3fe703206e3f1aca27
            this.color = '#04BF9D'
            this.x += Math.abs(this.dx)
            if (this.x > innerWidth) {
                this.x = 0
            }
        }
<<<<<<< HEAD
        if (this.keyCode == 40) {
            this.color = '#f02f2f'
=======
        if(this.keyCode == 40)
        {
            this.color = '#172026'
>>>>>>> a2b7b92dbba6a01803f9ca3fe703206e3f1aca27
            this.y += Math.abs(this.dy)
            if (this.y > innerHeight) {
                this.y = 0
            }
        }
    }// end of update()
}// end of class rectangle
