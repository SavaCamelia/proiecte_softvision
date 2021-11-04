import { Shape } from "./shape.js";
export class S extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, 'red');
        this.template = this.getTemplates()[this.templateIndex];
    }
    getTemplates() {
        const [template1, template2] = [
        [[0, 1, 1],
         [1, 1, 0]
        ],

        [[1, 0],
         [1, 1],
         [0, 1]]
    ];
        return [template1, template2];
    }
}