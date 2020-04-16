
const canvas = document.getElementById('canvasId');
const context = canvas.getContext("2d");

//rezolvare exercitiul 4
const rows = 20;
const columns = 10;
const width = 30;
const height = 30;

let grid = [];

const createGrid = () => {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let column = 0; column < columns; column++) {
            grid[row][column] = new Cell(row, column, (row+column) % 2 ? 'red' : 'blue');
        }
    }
}

const drawGrid = () => {
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            grid[row][column].draw();
        }
    }
}

createGrid();
drawGrid();

//rezolvare exercitiul 5
class Square{
    constructor(row,column){
        this.row=row;
        this.column=column;
    }
    draw(){
        const color="orange";
        context.beginPath();
        context.fillStyle=color;
        context.rect(this.column*30-30,this.row*30-30,60,60);
        context.fill();
        context.stroke();
        context.closePath();
    }
}

const square = new Square(2,3);
const square2 = new Square(5,7); 
square.draw();
square2.draw();
