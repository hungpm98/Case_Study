let Car1 = new Car(100, 100, 60, 50);
let line1 = new Line(200,0,5,50)

Car1.draw();

window.addEventListener('keydown', function (event) {

    switch (event.keyCode) {


            case 39:
                if (Car1.x < 400 - Car1.width) {
                    Car1.moveRight();
                    line1.draw();
                    line1.repeatLines();

                }
                break;
            case 37:
                if (Car1.x > 0) {
                    Car1.moveLeft();
                    line1.draw();
                    line1.repeatLines();


                }
                break;
            case 38:
                if (Car1.y > 0) {
                    Car1.moveUp();
                    line1.draw();
                    line1.repeatLines();


                }
                break;
            case 40:
                if (Car1.y < 600 - Car1.height) {
                    Car1.moveDown();
                    line1.draw();
                    line1.repeatLines();

                }
                break;
        }

    }
)
// function moveLines() {
//     if(line1.y>=700){
//         line1.y = line1.y - 750
//     }
//     line1.y += line1.speed;
//     line1.draw();
// requestAnimationFrame(moveLines)
// }
// moveLines();






