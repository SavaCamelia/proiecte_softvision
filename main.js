import { Grid } from './grid.js';
import { Movement } from './shapes/movement.js';
import { generateNewShape, getRandomInt } from './shapes/shape-generator.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.make();

let shape = generateNewShape(grid.cells);
shape.draw();

let movement = new Movement(shape, grid.cells);
document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            movement.up();
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

let score = 0;

const animate = () => {
    if (movement.canMove) {
        movement.down();
        console.log("Moving");
    }
    else {
        console.log("Stopped");
        clearInterval(intervalId);
        shape = generateNewShape(grid.cells);
        intervalId = setInterval(animate, 500);
        movement = new Movement(shape, grid.cells);
    }
    for (let row = rows; row > 0; row--){
            if (check(row)){
                clear(row);
                score+=10;
                console.log(score);
            }
    }
}

let intervalId = setInterval(animate, 500);

function check(row) {
    let isFilled = true;
    for (let column = 0; column < grid.cells[row].length; column++) {
        if (grid.cells[row][column] === 0)
            isFilled = false;
    }
return isFilled;
}

function clear(row){
    for (let column = 0; column < grid.cells[row].length; column++) {
        grid.cells[row][column].draw('f5b8ee');
    }
}