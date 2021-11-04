import { Shape } from "./shape.js";
export class J extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells, '#db42cc');
        this.template = this.getTemplates()[this.templateIndex];
    }
    getTemplates() {
        const [template1, template2, template3, template4] = [
            [[0, 1],
             [0, 1],
             [1, 1]],

            [[1, 0, 0],
             [1, 1, 1]],

            [[1, 1],
             [1, 0],
             [1, 0]],

            [[1, 1, 1],
             [0, 0, 1]]
        ];
        return [template1, template2, template3, template4];
    }
}