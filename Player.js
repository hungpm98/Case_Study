class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.speed= 3;
        this.width = width;
        this.height = height;
    }

    draw() {
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
    moveLeft(){
        this.x -= this.speed;
    }
    moveRight(){
        this.x += this.speed;
    }
}


