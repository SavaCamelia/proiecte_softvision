import { Shape } from "./shape.js";
export class I extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, '#03cffc');
        this.template = this.getTemplates()[this.templateIndex];
    }
    getTemplates() {
        const template1 = [
            [1],
            [1],
            [1],
            [1]
        ],
            template2 = [[1, 1, 1, 1]];
        return [template1, template2];
    }
}