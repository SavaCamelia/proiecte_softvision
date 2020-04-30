import {Cell} from './cell.js';
export class Grid {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        this.cells = [];
    }
    create() {
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column] = new Cell(row, column, '#f5b8ee');
            }
        }
    }
    draw() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column].draw(this.color);
            }
        }

    }
    make() {
        this.create();
        this.draw();
    }

}