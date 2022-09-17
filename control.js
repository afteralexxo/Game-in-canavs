import rectangle from './rectFun.js'
    
        const canvas = document.querySelector('canvas')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const ctx = canvas.getContext('2d')

        const rect = new rectangle(0, 10, ctx)
        
        function animatRectangle(){

            requestAnimationFrame(animatRectangle)
            ctx.clearRect(0, 0, innerWidth, innerHeight)
            document.onkeydown = (e) => {
                if(e.keyCode == 40){
                    rect.keyCode = 40
                }
                if(e.keyCode == 39){
                    rect.keyCode = 39
                }
                if(e.keyCode == 40){
                    rect.keyCode = 40
                }
                if(e.keyCode == 40){
                    rect.keyCode = 40
                }
                console.log(e.keyCode)
            } 
            rect.update()
        }

animatRectangle()
       

