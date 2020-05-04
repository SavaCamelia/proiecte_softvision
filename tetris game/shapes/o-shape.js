import { Shape } from "./shape.js";
export class O extends Shape{
    constructor(row,column,cells) {
        super(row,column,cells,'yellow');
        this.template = this.getTemplates()[this.templateIndex];
    }
    getTemplates() {
        const template = [
            [1, 1],
            [1, 1]
        ];
        return [template];
    }
}