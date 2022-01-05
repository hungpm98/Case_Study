let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let roadLines1 = new Img1(0, 0, canvas.width, canvas.height);
let roadLines2 = new Img1(0, 200, canvas.width, canvas.height);
let roadLines3 = new Img1(0, 400, canvas.width, canvas.height);
let player = new Player(200, 400, canvas.width, canvas.height)

let enemyS = [];

function play() {
    window.addEventListener("keydown", function (event) {
        switch (event.keyCode) {
            case 37:
                if (player.x > 0) {
                    player.moveLeft();
                }

                break;
            case 39:
                if (player.x < 350) {
                    player.moveRight();
                }
                break;
        }
    })
}

function random(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

function createEnemies() {
    let num = random(1, 100);
    if (num < 40) {
        let enemy = new Enemy(random(0, canvas.width), -20, canvas.width, canvas.height)
        enemyS.push(enemy);
    }
}

function showEnemies() {
    for (let i = 0; i < enemyS.length; i++) {
        if (enemyS[i].y >= enemyS[i].height) {
            enemyS.splice(i, 1);
            i--
        } else {
            enemyS[i].move();
            enemyS[i].draw();
        }
    }
}


function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    play();
    roadLines1.draw();
    createEnemies();
    showEnemies();


}

setInterval(main, 1000)



