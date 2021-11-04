import { Validator } from "./validator.js";
export class Movement {
    constructor(shape, cells) {
        [this.shape, this.cells] = [shape, cells];
        [this.validator, this.canMove] = [new Validator(this.shape, this.cells), true];
    }
    down(intervalId) {
        const { row, column } = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row + 1, column);
        if (nextNotAvailable) {
            this.shape.draw();
            this.canMove = false;
            if (row === 0){
                clearInterval(intervalId);
                alert("Game Over!!");
                document.getElementById("startGame").disabled = false;
            }
            return;
        }
        this.shape.row++;
        this.shape.draw();
    }
    right() {
        const { row, column } = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column + 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }
        this.shape.column++;
        this.shape.draw();
    }
    left() {
        const { row, column } = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column - 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }
        this.shape.column--;
        this.shape.draw();
    }
    rotate() {
        const { row, column } = this.shape;

        this.shape.clear();
        const nextTemplate = this.shape.getTemplate(this.shape.templateIndex + 1);
        const nextNotAvailable = this.validator.checkNext(row, column, nextTemplate);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }
        this.shape.rotate();
    }
}