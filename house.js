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
  if((x-meanX)>(y-meanY)){
	  penRGB(Math.min(neonColors[randomNumber(0, neonColors.length-1)][0]+Math.pow(radius, contrast), 255), Math.min(neonColors[randomNumber(0, neonColors.length-1)][1]+Math.pow(radius, contrast), 255), Math.min(neonColors[randomNumber(0, neonColors.length-1)][2]+Math.pow(radius, contrast), 255), size/8);
  } else {
	  penRGB(Math.max(neonColors[randomNumber(0, neonColors.length-1)][0]-Math.pow(radius, contrast), 0), Math.max(neonColors[randomNumber(0, neonColors.length-1)][1]-Math.pow(radius, contrast), 0), Math.max(neonColors[randomNumber(0, neonColors.length-1)][2]-Math.pow(radius, contrast), 0), size/8);
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
