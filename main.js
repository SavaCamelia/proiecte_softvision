import { Grid } from './grid.js';
import { Movement } from './shapes/movement.js';
import { generateNewShape, getRandomInt } from './shapes/shape-generator.js';

const rows = 20;
const columns = 10;
let tetrisScore = 0;

const grid = new Grid(rows, columns);
grid.make();

let shape = generateNewShape(grid.cells);
shape.draw();

let movement = new Movement(shape, grid.cells);
document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            movement.rotate();
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            movement.left();
            break;
        case 'ArrowRight':
            movement.right();
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red', 'purple', 'yellow', 'orange'];
            shape.color = colors[getRandomInt(colors.length)];
            shape.draw();
            break;
    }
});


const animate = () => {
    if (movement.canMove) {
        movement.down();
        console.log("Moving");
    }
    else {
        console.log("Stopped");
        clearInterval(intervalId);

        //score
        let score = grid.score();
        if (score > 0) {
            tetrisScore += score;
            document.getElementById("score").innerText = tetrisScore;
            grid.draw();
        }
        shape = generateNewShape(grid.cells);
        movement = new Movement(shape, grid.cells);
        intervalId = setInterval(animate, 500);
    }
}

let intervalId = setInterval(animate, 500);
