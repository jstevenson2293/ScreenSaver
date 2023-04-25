//set up canvas
//give access to the drawing properties
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//innderWidth refers to viewport
const width =  canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//function to generate random number

function random(min, max) { 
    return Math.floor(Math.random() * (max - min +1)) + min;
}

//function to generate a random RGB color
function randomRGB() { 
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
}

//build a ball generator constructor

class Ball{
    constructor(x, y, velX, velY, color, size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath(); //start drawing shape
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill()
    }

    update(){
        if((this.x +this.size) >= width){
            this.velX = -(this.velX)
        }

        if((this.x - this.size) <= 0){
            this.velX = -(this.velX)
        }

        if((this.y + this.size) >= height) {
            this.velY = -(this.velY)
        }

        if((this.y - this.size) <=0) {
            this.velY = -(this.velY)
        }

        this.x += this.velX;
        this.y += this.velY;
    }
}

const balls = [

]

while (balls.length < 10) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size), //x-cordinate
        random(0 + size, height - size),//y-cordinate
        random(1, 4),//velocity x
        random(1, 4),//velocity y
        randomRGB(),//assign color
        size

    )

    balls.push(ball)
}

function loop(){
    for (const ball of balls) {
        ball.draw()
        ball.update()
    }

    requestAnimationFrame(loop)
}

loop();