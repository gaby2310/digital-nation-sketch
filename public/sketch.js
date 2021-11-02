let scrHeight = window.innerHeight;
let scrWidth = window.innerWidth;
let socket;

const newDrawing = (data) => {
  let rand = Math.floor(Math.random() * 255);
  let rand1 = Math.floor(Math.random() * 255);
  let rand2 = Math.floor(Math.random() * 255);

  //   noStroke();
  fill(rand1, rand2, rand);
  ellipse(data.x, data.y, 30, 30);
};

function setup() {
  createCanvas(scrWidth, scrHeight);
  background('gray');

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
}

function mouseDragged() {
  const data = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 30, 30);
}

function draw() {}
