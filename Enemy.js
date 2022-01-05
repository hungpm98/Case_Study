class Enemy {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 8;
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
    move(){
        this.y += this.speed;
    }

}


