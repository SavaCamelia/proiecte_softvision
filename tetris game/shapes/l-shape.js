import { Shape } from "./shape.js";
export class L extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, 'orange');
        this.template = this.getTemplates()[this.templateIndex];
    }
    getTemplates() {
        const template1 = [
            [1, 0],
            [1, 0],
            [1, 1]
        ],
            template2 = [
                [1, 1, 1],
                [0, 0, 1]
            ],
            template3 = [
                [0, 1],
                [0, 1],
                [1, 1]
            ],
            template4 = [
                [1, 0, 0],
                [1, 1, 1]
            ];
        return [template1, template2, template3, template4];
    }
}