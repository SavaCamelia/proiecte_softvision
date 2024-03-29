export class Shape {
    constructor(row, column, cells, color) {
        [this.row, this.column, this.cells, this.color, this.templateIndex] = [row, column, cells, color, 0];
    }
    draw() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    const cell = this.cells[this.row + row][this.column + column];
                    cell.color = this.color;
                    cell.draw(this.color);
                    cell.isEmpty = false;
                }
            }
        }
    }
    clear() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    const cell = this.cells[this.row + row][this.column + column];
                    cell.color = '#f5b8ee';
                    cell.draw('#f5b8ee');
                    cell.isEmpty = true;
                }
            }
        }
    }
    rotate() {
        this.templateIndex++;
        this.template = this.getTemplate(this.templateIndex);
        this.draw();
    }
    getTemplate(index) {
        const templIndex = index || this.templateIndex;
        const length = this.getTemplates().length;
        return this.getTemplates()[templIndex % length];
    }
}