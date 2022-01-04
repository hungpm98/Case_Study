class Car {
    constructor(x, y, witdh,height) {
        this.x = x;
        this.y = y;
        this.width = witdh;
        this.height = height;
        this.speed = 20;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#dd2019"
        // this.ctx.clearRect(this.x,this.y,400,600);
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();
    }
    moveLeft(){
       this.ctx.clearRect(this.x,this.y,400,600);
        this.x -= this.speed;
        this.draw();
    }
    moveRight(){
        this.ctx.clearRect(this.x,this.y,400,600);
        this.x += this.speed;
        this.draw();
    }
    moveUp(){
        this.ctx.clearRect(this.x,this.y,400,600);
        this.y -= this.speed;
        this.draw();
    }
    moveDown(){
        this.ctx.clearRect(this.x,this.y,400,600);
        this.y += this.speed;
        this.draw();
    }
}