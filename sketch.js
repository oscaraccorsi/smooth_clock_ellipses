var width;
var height;
var upupa;


function preload() {
  upupa = loadSound("assets/upupa.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
 
 
  
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(-90);
  let d = new Date();

  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let mill = d.getMilliseconds();

  let dhr = hr;
  let dmin = min;
  let dsec = sec;

  sec += mill / 1000;
  min += sec / 60;
  hr += min / 60;
  
  let s = second();
  
  push();
  fill(255);
  rotate(90);
  noStroke();
  textSize(25);
  if (dsec < 10) {
    dsec = "0" + dsec;
  }
  if (dmin < 10) {
    dmin = "0" + dmin;
  }
  if (dhr % 12 == 0) {
    dhr = "12";
  } else if (dhr % 12 < 10) {
    dhr = "0" + (dhr % 12);
  }
  pop();
  noFill();
  strokeWeight(2);

  stroke(0, 255, 0);
  let secAngle = map(sec, 0, 60, 0, 360); //second
  let minAngle = map(min, 0, 60, 0, 360); //minute
  let hourAngle = map(hr % 12, 0, 12, 0, 360); //hour
  push();
  fill(50, 50, 50, 90);
  rotate(-minAngle * 15);
  ellipse(0 - windowWidth / 8, 0, windowWidth / 5, windowHeight / 4);

  pop();

  fill(50, 50, 50, 90);
  stroke(255, 0, 0);
  push();
  rotate(-minAngle);
  ellipse(0 - windowWidth / 8, 0, windowWidth / 4, windowHeight / 4);
  pop();
  fill(50, 50, 50, 90);
  stroke(0, 0, 255);
  push();
  rotate(-hourAngle);
  ellipse(0 - windowWidth / 8, 0, windowWidth / 3, windowHeight / 4);
  pop();
  
  
  if (secAngle <= 0.2) {
    
    //saveCanvas('myCanvas', 'png')
    upupa.setVolume(1);
    upupa.play();
    upupa.playMode("untilDone");
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function mousePressed() {
  save();
}
