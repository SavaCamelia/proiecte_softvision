export class Cell {
    constructor(x, y, color) {
        [this.x, this.y, this.color] = [x, y, color];
        [this.width, this.height, this.isEmpty] = [30, 30, true];
        this.canvas = document.getElementById('canvasId');
        this.context = this.canvas.getContext("2d");
    }
    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.y * this.height, this.x * this.width, 30, 30);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}

//comentariu