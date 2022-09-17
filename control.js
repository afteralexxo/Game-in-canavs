import rectangle from './rectFun.js'
    const animatRect = setInterval(animatRectangle, 30)
        const canvas = document.querySelector('canvas')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const ctx = canvas.getContext('2d')

        const rect = new rectangle((innerWidth/2)-45, (innerHeight/2)-30, ctx)
        
        function animatRectangle()
        {
            ctx.clearRect(0, 0, innerWidth, innerHeight)
            document.onkeydown = (e) => 
            {
                if(e.keyCode == 37){
                    rect.keyCode = 37
                }
                if(e.keyCode == 38){
                    rect.keyCode = 38
                }
                if(e.keyCode == 39){
                    rect.keyCode = 39
                }
                if(e.keyCode == 40){
                    rect.keyCode = 40
                }
            } 
            rect.update()
        }

