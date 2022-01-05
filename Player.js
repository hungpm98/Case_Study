class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.width = 50;
        this.height = 50;
        this.dir = "";
    }

    draw(canvas) {
        let myImg = new Image();
        let a = this.x;
        let b = this.y;



        myImg.src = "img/player.png"
        console.log(myImg.width, myImg.height)
        ctx.beginPath();
        myImg.onload = function () {
            ctx.drawImage(myImg, a, b, 50, 50);
        }

        ctx.fill();
        ctx.closePath();

    }

    move(canvas) {
        switch (this.dir) {
            case "left":
                if(this.x>0)
                    this.x -= this.speed;
                break;
            case "right":
                if (this.x < canvas.width - 50)
                    this.x += this.speed;
        }
    }
    moveLeft()
    {
        this.x -= this.speed;
    } moveRight()
    {
        this.x += this.speed;
    }
}



