class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 1;
        this.img = "img/enemy.png"
    }

    draw(canvas) {
        let myImg = new Image();
        myImg.src = this.img;
            ctx.drawImage(myImg, this.x, this.y, 50, 50);
    }
    moveDown(){
        this.y += this.speed;
    }

}


