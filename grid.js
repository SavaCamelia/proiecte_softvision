import { Cell } from './cell.js';
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
    recreate() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                let cell = this.cells[row][column];
                this.cells[row][column] = new Cell(row, column, cell.color);
                this.cells[row][column].isEmpty = cell.isEmpty;
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
    score() {
        //1.Get full rows
        let fullRows = [];
        for (let row = 0; row < this.rows; row++) {
            if (this.isFullRow(row)) {
                fullRows.push(row);
            }
        }
        //2.If we have full rows, delete them
        const fullRowsLength = fullRows.length;
        if (fullRowsLength) {//if 0 => false
            //delete full rows
            for (let row = 0; row < fullRowsLength; row++) {
                this.deleteRow(fullRows[row]);
            }
            //3.Add empty rows on top of the grid
            this.cells = this.atachGridRows(fullRowsLength);
            //4.Redraw/Recreate
            this.recreate();
            //5.Return score
            return fullRowsLength * 10;
        }
        return 0;
    }

    isFullRow(rowIndex) {
        return this.cells[rowIndex].every(cell => !cell.isEmpty)
    }

    deleteRow(rowIndex) {
        this.cells.splice(rowIndex, 1);
    }

    atachGridRows(rowsNumber) {
        const newRows = this.generateNewRows(rowsNumber);
        for (let row = 0; row < newRows.length; row++) {
            this.cells.unshift(newRows[row]);
        }
        return this.cells;
    }

    generateNewRows(rowsNumber) {
        const newRows = [];
        for (let row = 0; row < rowsNumber; row++) {
            newRows[row] = [];
            for (let column = 0; column < this.columns; column++) {
                newRows[row][column] = new Cell(row, column, '#f5b8ee');
            }
        }
        return newRows;
    }
}