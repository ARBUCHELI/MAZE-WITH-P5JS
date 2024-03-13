let A;
let S;
let D;
let W;
let xVal;
let yVal;

function setup() {
  createCanvas(500, 470);
  frameRate(25);
  rectMode(CENTER);

  xVal = 450;
  yVal = 80;

  // Assign the ASCII decimal values for the keys
  A = 65;
  D = 68;
  S = 83;
  W = 87;
}

function draw() {
  background(220);

  textSize(25);
  fill(0, 180, 120);
  drawMaze();

  let newX = xVal;
  let newY = yVal;

  // Move the rectangle based on key presses
  if (keyIsDown(A)) {
    newX = xVal - 5;
  } else if (keyIsDown(D)) {
    newX = xVal + 5;
  } else if (keyIsDown(S)) {
    newY = yVal + 5;
  } else if (keyIsDown(W)) {
    newY = yVal - 5;
  }

  // Check for collision with any object before updating the position
  if (!checkCollision(newX, newY)) {
    xVal = newX;
    yVal = newY;
  }

  // Check if the rectangle reached the end point
  if (yVal - 27 > 450 && xVal - 27 < 75) {
    textSize(80);
    background(0, 0, 130, 80);
    text('YOU WON!!', 20, height / 2);
  }

  // Draw the start and end points
  textSize(30);
  textFont('Impact');
  fill('#c94c4c');
  noStroke();
  text('START', 420, 40);
  text('END', 26, 450);
  // Draw the rectangle
  fill('#87bdd8');
  rect(xVal, yVal, 25, 25);
}

// Function to draw the maze
function drawMaze() {
  stroke('#622569'); // Set the stroke color
  strokeWeight(7); // Increase the stroke weight

  line(10, 50, 410, 50);
  line(10, 50, 10, 450);
  line(490, 50, 490, 450);
  line(90, 450, 490, 450);
  line(170, 50, 170, 130);
  line(10, 290, 90, 290);
  line(90, 130, 90, 210);
  line(90, 210, 250, 210);
  line(250, 130, 250, 290);
  line(250, 290, 330, 290);
  line(330, 290, 330, 370);
  line(90, 370, 410, 370);
  line(170, 290, 170, 370);
  line(490, 130, 330, 130);
  line(330, 130, 330, 210);
  line(330, 210, 410, 210);
  line(410, 210, 410, 370);
}


// Function to check collision with maze lines and borders
function checkCollision(x, y) {
  // Check collision with each line segment and maze borders
  if (
    // Check collisions with maze borders
    x < 10 || x > 490 || y < 50 || y > 450 ||
    // Check collisions with maze lines
    (x >= 10 && x <= 410 && y >= 48 && y <= 52) ||
    (x >= 8 && x <= 12 && y >= 50 && y <= 450) ||
    // Add similar conditions for other line segments
    // Repeat the process for all maze line segments
    (x >= 168 && x <= 172 && y >= 128 && y <= 132) ||
    (x >= 88 && x <= 92 && y >= 288 && y <= 292) ||
    // Repeat for other line segments
    false // If no collision, return false
  ) {
    return true;
  }
  return false;
}
