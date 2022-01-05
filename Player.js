class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 6;
        this.width = 50;
        this.height = 50;
        this.dir = "";
        this.img = "img/player.png"
    }

    draw(canvas) {
        let myImg = new Image();
        myImg.src = this.img;
            ctx.drawImage(myImg, this.x, this.y, 50, 50);
    }

    move(canvas) {
        switch (this.dir) {
            case "left":
                if(this.x>-8)
                    this.x -= this.speed;
                break;
            case "right":
                if (this.x < canvas.width - 42)
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



