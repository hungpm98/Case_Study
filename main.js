let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let player = new Player(180, 540);
let enemies = [];
let roadLines = [];
let spawnEnemies = 60;
let spawnRoadLines = 60;
let timer1 = 0;
let timer = 0;
let score = 0;
let highScore = loadData("highScore")

function randomNumber(min, max) {
    let rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;
}

function createRoadLine() {
    timer1++;
    if (timer1 > spawnRoadLines) {
        let x = 100;
        let y = -100;
        let y1 = 0;
        let y2 = 200;
        let y3 = 400;
        let roadLine = new RoadLine(x, y)
        let roadLine1 = new RoadLine(x, y1);
        let roadLine2 = new RoadLine(x, y2);
        let roadLine3 = new RoadLine(x, y3);
        roadLines.push(roadLine);
        roadLines.push(roadLine1);
        roadLines.push(roadLine2);
        roadLines.push(roadLine3);
        timer1 = 0;
    }

}

function displayRoadLine() {
    for (let i = 0; i < roadLines.length; i++) {
        roadLines[i].draw();
    }
}

function moveRoadLine() {
    for (let i = 0; i < roadLines.length; i++) {
        roadLines[i].moveDown();
    }
}

function createEnemies() {
    timer++;
    if (timer > spawnEnemies) {
        let x = randomNumber(175, canvas.width - 225);
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
    switch (evt.keyCode) {
        case 37:
            player.dir = "left";
            break;
        case 39:
            player.dir = "right";
            break;
        default:
            player.dir = "";


    }
}

window.addEventListener("keydown", movePlayer);

function checkAllCollision() {
    for (let i = 0; i < enemies.length; i++) {
        if (checkCollision(player, enemies[i])) {
            alert("Game Over")
        }
        score++;
    }
}

function checkCollision(player, enemy) {
    let left1 = player.x + 20;
    let right1 = player.x + player.width - 20;
    let top1 = player.y + 20;
    let bottom1 = player.y + player.height - 20;

    let left2 = enemy.x;
    let right2 = enemy.x + enemy.width;
    let top2 = enemy.y;
    let bottom2 = enemy.y + enemy.height;

    if (left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2) {
        return false;
    } else {
        return true;
    }
}

function displayUI() {
    document.getElementById("score").innerText = score;
    document.getElementById("high-score").innerText = highScore;
}

function saveHighScore() {
    if (score > highScore) {
        saveData("highScore", score);
    }
}

function speedUp() {
    for (let i = 0; i < enemies.length; i++) {
        if (score > 500) {
            enemies[i].y += 2;
        }
        if (score > 1500) {
            enemies[i].y += 3;
        }
        if (score > 3000) {
            enemies[i].y += 4;
        }
    }
}

function main() {
    clearScreen();

    createRoadLine();
    moveRoadLine();
    displayRoadLine();
    createEnemies();
    displayEnemies();
    moveEnemies();

    player.move(canvas);
    player.draw(canvas);
    checkAllCollision();
    speedUp();
    displayUI();
    saveHighScore();


    requestAnimationFrame(main);

}

main();
// setInterval(main, 200)




