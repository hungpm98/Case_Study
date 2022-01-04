class Line{
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 6;
        this.flag = "Down";
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "#FFFFFF"
        // this.ctx.clearRect(this.x,this.y,400,600);
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();

    }
    repeatLines(){
        for(let i = 0; i<5;i++){
            this.y = i*150;
            this.draw();
        }
    }
    move(){
        this.y += this.speed;
    }

}