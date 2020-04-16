const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.getElementById('playground').append(canvas);
const context = canvas.getContext('2d');


//rezolvare exercitiul 1
context.beginPath();
context.ellipse(150, 200, 100, 150, 10, 0, 2 * Math.PI);
context.stroke();
context.fillStyle = "purple";
context.fill();
context.closePath();
context.clearRect(0, 0, canvas.width, canvas.height);

//rezolvare exercitiul 2
class Square {
    constructor(color, latura) {
        this.color = color;
        this.latura = latura;
    }
    draw() {
        context.beginPath();
        context.rect(300, 200, this.latura, this.latura);
        context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}
const mySquare = new Square("magenta", 150);
mySquare.draw();
context.clearRect(0, 0, canvas.width, canvas.height);

//rezolvare exercitiul 3
class Circle {
    constructor(x, y, radius, colors) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colors = colors;
        this.dx = 1;
        this.dy = 1;
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
        if (this.dx==1)
            context.fillStyle = this.colors[0];
        else
            context.fillStyle = this.colors[1];
        context.fill();
        context.closePath();
    }
    getRandom(min, max) {
        return  Math.ceil(Math.random() * (max - min));
    }
    move(stepX) {
        this.x += stepX * this.dx;
        this.changeDirectionIfExceededBounds();
        if (this.dx == 1){
            this.radius += 3;
        }
        else{
            this.radius -= 3;
        }
        this.draw();
    }
    changeDirectionIfExceededBounds() {
        if (this.x > canvas.width - this.radius) {
            this.dx = -1;
            this.x = canvas.width - this.radius;
        }
        if (this.y > canvas.height - this.radius) {
            this.y = canvas.height - this.radius;
        }
        if (this.x < this.radius) {
            this.dx = 1;
            this.x = this.radius;
        }
        if (this.y < this.radius) {
            this.y = this.radius;
        }
    }
}
function Random(min, max) {
    return  Math.floor(Math.random() * (max - min));
}

const colors = ["purple", "yellow"];
const mycircle = new Circle(Random(0, 250), Random(0, 250), Random(10, 30), colors);

function animateCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    mycircle.move(30);
}

setInterval(animateCircle, 500);
context.clearRect(0, 0, canvas.width, canvas.height);



