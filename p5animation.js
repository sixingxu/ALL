var canvas;
var y;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(0,0);
  //canvas.style('z-index','-1');
  y = height;
}

function draw() {
  background(220);
  textSize(32);
text('word', 0, y);
fill(0, 102, 153);

y--;
}