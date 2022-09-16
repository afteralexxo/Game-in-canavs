const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

class Rectfun{
constructor(x, y){
    this.x = x
    this.y = y
}

    draw(){
        ctx.beginPath()
        ctx.rect(this.x, this.y, 90, 60)
        ctx.stroke()
    }

    update(){
        this.draw()
        if(this.x > innerWidth-90){
            this.x = this.x
            return
        }

        this.x++
    }
}

const rect = new Rectfun(0,10)

const animatRectangle = function(){
    requestAnimationFrame(animatRectangle)
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    rect.update()
}

animatRectangle()