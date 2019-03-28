

const imgs = ["HYFgrouppic"];
function findX() {
  if (MOUSE_X === 0) {
    return Math.floor(Math.random() * 1380);
  }
  return MOUSE_X;
}

function findY() {
  if (MOUSE_Y === 0) {
    return Math.floor(Math.random() * 680);
  }
  return MOUSE_Y;
}
function findRadius() {
  return Math.floor(Math.random() * 40);
}
function findColour() {
  return imgs[0];
}

class Circle {
  constructor(x, y, radius, startAngle, endAngle, colour) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.colour = colour;
  }

  draw() {
    // draw the circle
    const myCanvas = document.getElementById("circlesCanvas");
    const ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.fillStyle = this.colour;
    ctx.fill();
  }
}

// Add mouse event handler
function getMousePosition(event) {
  MOUSE_X = event.pageX;
  MOUSE_Y = event.pageY;
}
document.getElementById("circlesCanvas").onclick = getMousePosition;

function stopFollowingMouse(e) {
  MOUSE_X = 0;
  MOUSE_Y = 0;
}
document.getElementById("circlesCanvas").onmouseleave = stopFollowingMouse;


function myFunction(){
    const body = document.querySelector('body');
    body.innerHTML = ' <canvas id="circlesCanvas" width="1350" height="680"></canvas>'
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve();
        }, 700);
      });
    }

then.next()
function next(){
setInterval(() => {
    let x = findX()
    let y = findY()
    console.log("Drawing circle at:", x, y)
  
    let ourCircle = new Circle(x, y, findRadius(), 0, 2 * Math.PI, findColour())
    ourCircle.draw()
  }, 40)
}