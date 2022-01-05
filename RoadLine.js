class RoadLine {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width =50;
        this.height = 50;
        this.speed = 2;
        this.img = "img/roadLine.jpg"
    }

    draw(canvas) {
        let myImg = new Image();
        myImg.src = this.img;
        ctx.drawImage(myImg, this.x, this.y,400, 200);
    }
    moveDown(){
        this.y += this.speed;
    }

}


