let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
// let roadLines1 = new Img1(0, 0, canvas.width, canvas.height);
// let roadLines2 = new Img1(0, 200, canvas.width, canvas.height);
// let roadLines3 = new Img1(0, 400, canvas.width, canvas.height);
let player = new Player(180, 540);



let enemies = [];
let spawnEnemies = 10;
let timer = 0;

function randomNumber(min, max) {
    let rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;
}

function createEnemies() {
    timer++;
    if (timer > spawnEnemies) {
        let x = randomNumber(0, canvas.width);
        let y = randomNumber(-5, -15);
        let enemy = new Enemy(x, y);
        enemies.push(enemy);
        timer = 0;
    }

}


function displayEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].draw();
    }
}

function moveEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].moveDown();
    }

}

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function movePlayer(evt) {
    switch (evt.key) {
        case "a":
            player.dir = "left";

            break;
        case "d":

            player.dir = "right";
            break;
        default:
            player.dir = "";


    }
}

window.addEventListener("keydown", movePlayer);
function checkCollision(player , enemy) {
    let left1 = player.x;
    let right1 = player.x + player.width;
    let top1 = player.y;
    let bottom1 = player.y + player.height;

    let left2 = enemy.x;
    let right2 = enemy.x + enemy.width;
    let top2 = enemy.y;
    let bottom2 = enemy.y + enemy.height;

    if(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2){
        return false;
    }else {
        return true;
    }
}



function main() {
    clearScreen();
    createEnemies();
    displayEnemies();
    moveEnemies();
    player.move(canvas);
    player.draw(canvas);
    checkCollision();

    // requestAnimationFrame(main);

}

// main();
setInterval(main, 200)




