hide();
//Variables
var neonColors = [
  [77,238,234],
  [116,238,21],
  [255,231,0],
  [240,0,255],
  [0,30,255]
];
var canvasWidth = 320;
var canvasHeight = 450;
var houseX = randomNumber(170,200);
var houseY = randomNumber(300,375);
//Final Functions
drawBackground(canvasWidth, canvasHeight);
drawHouse(houseX, houseY);
drawAllTrees();
drawAllBallons(houseX+63, houseY-200, houseX+63, houseY-105, 500);
drawSun(50);
//drawSun();
allBalloons();
allWind();
allBirds();
drawSmith(houseX+34, houseY-72);

//BEGIN FUNCTIONS

function drawSmith(x, y) {
  createCanvas("canvas1", 15, 22);
  setPosition("canvas1", x, y);
  drawImageURL("https://github.com/itmmckernan/CompSci/blob/master/smith.png?raw=true");
}

//Backround

function drawBackground(canvasWidth, canvasHeight) {
  penUp();
  turnTo(90);
  for(var i = 0; i < canvasHeight; i++) {
	moveTo(0, i);
	penRGB(135, 206, 245, 1-i/canvasHeight);
	penDown();
	moveForward(canvasWidth);
	penUp();
  }
  turnTo(0);
}
//Draw House
function drawHouse(x,y){
//Location/Color
  penUp();
  moveTo(x,y);
  penDown();
  penColor("black");
//Base
  moveForward(50);
  turnRight(45);
  moveForward(60);
  turnRight();
  moveForward(60);
  turnRight(45);
  moveForward(50);
  turnRight();
  moveForward(32.5);
  turnRight();
  moveForward(30);
  turnLeft();
  moveForward(20);
  turnLeft();
  moveForward(30);
  turnLeft();
  moveForward(20);
  turnRight(180);
  moveForward(17);
  penUp();
  turnRight();
  moveForward(15);
  penDown();
  arcRight(360,1);
  penUp();
  moveBackward(15);
  turnLeft();
  penDown();
  moveForward(35.5);
//Trim
  turnRight();
  moveForward(50);
  turnLeft(135);
  moveForward(5);
  turnRight();
  moveForward(5);
  turnRight();
  moveForward(70);
  turnRight();
  moveForward(70);
  turnRight();
  moveForward(5);
  turnRight(90);
  moveForward(5);
  penUp();
  turnLeft(45);
  moveForward(52.5);
  turnRight();
  //windows
  penDown();
  drawWindow(20);
  turnRight(180);
  moveForward(70);
  turnRight();
  moveForward(33.5);
  turnRight();
  moveForward(20);
  penDown();
  drawWindow(15);
  penUp();
  turnRight(180);
  moveForward(35);
  turnLeft();
  moveForward(45);
  turnLeft();
  moveForward(20);
  penDown();
  drawWindow(15);
  //chimney
  penUp();
  moveForward(39);
  penDown();
  moveForward(25);
  turnLeft();
  moveForward(15);
  turnLeft();
  moveForward(10);
  turnLeft(180);
  moveForward(10);
  turnLeft();
  arcRight(180,2);
  moveForward(15);
  arcRight(180,2);
  penUp();
  moveForward(7.5);
  turnRight();
  moveForward(2);
}
//ballons
function drawAllBallons(meanX, meanY, chimneyX, chimneyY, numBallons) {
  var sdX = 40;
  var sdY = 60;
  for(var i = 0; i < numBallons; i++){
	var radius = 51;
	var coordX;
	var coordY;
	while(radius>50){
  	coordX = randomGaussian(meanX, sdX);
  	coordY = randomGaussian(meanY, sdY);
  	radius = Math.sqrt(Math.pow((coordX-meanX),2)+Math.pow((coordY-meanY), 2));
  }
  drawBallon(coordX, coordY, chimneyX, chimneyY, randomGaussian(4, 1), radius, meanX, meanY);
  }
}
function drawBallon(x, y, chimneyX, chimneyY, size, radius, meanX, meanY) {
  moveTo(chimneyX, chimneyY);
  if(y-30 > meanY) {
  penRGB(225, 225, 225, 0.01);
  penDown();
  }
  var contrast = 1.1;
  moveTo(x, y);
  var neonColorPos = randomNumber(0, neonColors.length-1);
  if((x-meanX)>(y-meanY)){
	  penRGB(Math.min(neonColors[neonColorPos][0]+Math.pow(radius, contrast), 255), Math.min(neonColors[neonColorPos][1]+Math.pow(radius, contrast), 255), Math.min(neonColors[neonColorPos][2]+Math.pow(radius, contrast), 255), size/8);
  } else {
	  penRGB(Math.max(neonColors[neonColorPos][0]-Math.pow(radius, contrast), 0), Math.max(neonColors[neonColorPos][1]-Math.pow(radius, contrast), 0), Math.max(neonColors[neonColorPos][2]-Math.pow(radius, contrast), 0), size/8);
  }
  dot(size);
  penUp();
}
function randomGaussian(m, sd) {
  return m + 2*sd*(Math.random() + Math.random() + Math.random() - 1.5);
}
function drawWindow(size){
  drawSquare(size);
  penRGB(0,0,0,0.5);
  moveForward(size/2);
  turnRight();
  moveForward(size);
  turnRight();
  moveForward(size/2);
  turnRight();
  moveForward(size/2);
  turnRight();
  moveForward(size);
  penUp();
  penRGB(0,0,0);
}
function drawSquare(size){
for (var i = 0; i < 4; i++) {
    moveForward(size);
  turnRight();
  }  
}
//sun rays
function drawAllRays(){
  Ray(randomNumber(75,100));
  turnTo(randomNumber(-80, -200));
}
function Ray(length){
  penUp();
  penWidth(randomNumber(1, 3));
  moveTo(300, 20);
  penDown();
  penRGB(255, 224, 66, 0.5);
  moveForward(length);
  penUp();
}
//sun
function drawSun(size){
  penUp();
  moveTo(300, 20);
  for (var i = 0; i < 30; i++) {
  drawAllRays();
}
turnTo(0);
moveTo(300,20);
  penRGB(255, 224, 66, 1);
  dot(size);
  penRGB(255, 201, 66, 0.2);
  dot(0.5 * size);
  penUp();
}
//tree tops
moveTo(0, 450);
function treeTop(size){
  penRGB(19, randomNumber(115, 150), randomNumber(0, 50), 1);
  penWidth(size);
  penDown();
  turnTo(45);
  moveForward(1.5 * size);
  turnTo(135);
  moveForward(1.5 * size);
  turnTo(270);
  moveForward(1.5 * size);
  penUp();
}
function tree(size){
  penRGB(161, 94, 2, 1);
  moveTo(randomNumber(0, 320), 450);
  turnTo(0);
  penDown();
  penWidth(10);
  moveForward(randomNumber(25, 35));
  penUp();
  turnLeft(90);
  moveForward(size);
  treeTop(size);
}
function drawAllTrees() {
for (var i = 0; i <10; i++){
  tree(randomNumber(10, 15));
}
for(var j = 0; j < 10; j++) {
  treeTop(randomNumber(10, 15));
  moveTo(randomNumber(0, 320), 450);
}
}
//Applying all balloons
function allBalloons() {
  for (var i = 0; i < 8; i++) {
    drawBalloons(randomNumber(2, 5));
  }
}
//Model of Balloons
function drawBalloons(size) {
  moveTo(randomNumber(30, 290), randomNumber(10, 100));
  penWidth(1.5);
  penDown();
  penRGB(neonColors[randomNumber(0, neonColors.length-1)][0], neonColors[randomNumber(0, neonColors.length-1)][1], neonColors[randomNumber(0, neonColors.length-1)][2], 0.75);
  turnTo(randomNumber(-30, 30));
  dot(size-1);
  penUp();
  moveForward(size);
  penDown();
  dot(size+0.5);
  penUp();
}
//Applying all Wind
function allWind() {
  for (var i = 0; i < 5; i++) {
    drawWind(randomNumber(5, 10));
  }
}
//Model of Wind
function drawWind(size) {
  moveTo(randomNumber(10,130), randomNumber(245,380));
  penWidth(1);
  penDown();
  penRGB(171, 171, 171, 0.75);
  turnTo(90);
  moveForward(size*2);
  arcLeft(180, size);
  arcLeft(180, size/2);
  penUp();
}
//Model of Birds
function drawBirds() {
  penWidth(2);
  penColor("black");
  penDown();
  turnTo(0);
  arcRight(120, 5);
  turnTo(0);
  turnTo(randomNumber(0,10));
  arcRight(120, 5);
  penUp();
}
//Applying all Birds
function allBirds() {
  moveTo(randomNumber(30, 100), randomNumber(50,125));for (var i = 0; i < 3; i++) {
    drawBirds();
    turnTo(randomNumber(120, 270));
    moveForward(50);
  }
}
//New Sun Model
function drawSun() {
  penUp();
  moveTo(320, 0);
  penColor("yellow");
  dot(63);
  
  //penColor("orange");
  //dot(50);
  for(var i = 0; i < 50; i++){
    var fadeCoeffG = 2;
    penRGB(255, 180-fadeCoeffG*i, 0);
    dot(50-i);
  }
  turnTo(0);
  penWidth(7);
  turnLeft(90);
  moveForward(65);
  turnTo(45);
  penDown();
  penColor("yellow");
  for (var j = 0; j < 18; j++) {
    arcLeft(70, 20);
    turnLeft(270);
  }
  penUp();
}
