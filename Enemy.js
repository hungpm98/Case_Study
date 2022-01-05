class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 20;
    }

    draw() {
        let myImg = new Image();
        let a = this.x;
        let b = this.y;

        myImg.src = "img/enemy.png"
        console.log(myImg.width, myImg.height)
        ctx.beginPath();
        myImg.onload = function () {
            ctx.drawImage(myImg, a, b, 50, 50);
        }

        ctx.fill();
        ctx.closePath();

    }
    moveDown(){
        this.y += this.speed;
    }

}


