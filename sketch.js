let particle = [];


function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    for(let j = 0; j < 2; j++) {
        let p = new Particle();
        particle.push(p);
    }

    for(let i = particle.length - 1 ; i >= 0; i--) {
       particle[i].update();
       particle[i].show();
       if(particle[i].finished()) {
           particle.splice(i, 1);
       }
    }
}

class Particle {

    constructor() {
        this.x = 300;
        this.y = 380;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        fill(255, random(0,180), 0, this.alpha);
        ellipse(this.x, this.y, 16)
    }
}
