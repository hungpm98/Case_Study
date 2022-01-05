class Img1 {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        let myImg = new Image();
        let a = this.x;
        let b = this.y;

        myImg.src = "img/1.jpg"
        let ratio = canvas.width / myImg.width
        console.log(myImg.width, myImg.height)
        ctx.beginPath();
        myImg.onload = function () {
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(myImg, a, b, 400, myImg.height * ratio);
        }

        ctx.fill();
        ctx.closePath();

    }

}


