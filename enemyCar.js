class EnemyCar {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 7;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#20d008"
        this.ctx.clearRect(this.x, this.y, 400, 600)
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        this.y += this.speed;
    }
}