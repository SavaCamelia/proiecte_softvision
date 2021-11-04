import { Grid } from './grid.js';
import { Movement } from './shapes/movement.js';
import { generateNewShape, getRandomInt } from './shapes/shape-generator.js';

const [rows, columns] = [20, 10];

const grid = new Grid(rows, columns);
grid.make();

let [tetrisScore, shape] = [0, generateNewShape(grid.cells)];
shape.draw();
document.body.style.background = `radial-gradient(${shape.color}, transparent)`;

let intervalId;

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
        movement.down(intervalId);
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
        document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
        [shape, movement, intervalId]=[generateNewShape(grid.cells), new Movement(shape, grid.cells), setInterval(animate, 500)];
    }
}


function firstCanvas(){
    const canvas = document.getElementById("titleGame");
    const context = canvas.getContext("2d");
    context.font = "900 15px Arial ";
    context.fillText("T", 150, 45);
    context.fillText("E", 150, 60);
    context.fillText("T", 150, 75);
    context.fillText("R", 150, 90);
    context.fillText("I", 150, 105);
    context.fillText("S", 150, 120);
}
firstCanvas();

function thirdCanvas() {
    const canvas = document.getElementById("utils");
    const context = canvas.getContext("2d");
    document.getElementById("startGame").addEventListener('click', () => {
        intervalId = setInterval(animate, 500);
        document.getElementById("startGame").disabled = true;
    });
}
thirdCanvas();