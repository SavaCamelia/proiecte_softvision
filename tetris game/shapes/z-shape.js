import { Shape } from "./shape.js";
export class Z extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, 'green');
        this.template = this.getTemplates()[this.templateIndex];
    }
    getTemplates() {
        const [template1, template2] = [
        [[1, 1, 0],
         [0, 1, 1]],

        [[0, 1],
         [1, 1],
         [1, 0]]
    ];
        return [template1, template2];
    }
}