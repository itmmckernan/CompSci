hide();
//Variables
var neonColors = [ //this is a list of RGB values. Each line of 3 values is Red Green and Blue, respecively
  [77,238,234],
  [116,238,21],
  [255,231,0],
  [240,0,255],
  [57, 255, 20],
  [9, 251, 211],
  [194, 76, 246],
  [0,30,255]
];
var canvasWidth = 320; //The size of the canvas so that the background function is adaptable to different canvas sizes
var canvasHeight = 450;
var houseX = randomNumber(170,200); //sets the houseX and HouseY so that they can be called with offsets in other functions, such as drawballons
var houseY = randomNumber(300,375);
//Final Functions
drawBackground(canvasWidth, canvasHeight); //draws the background
drawHouse(houseX, houseY);
drawAllTrees();
drawAllBallons(houseX+63, houseY-200, houseX+63, houseY-105, 500); //draws the balloons with offsets. The first pair of X and Y is the center of the bunch of balloons, the second pair is the chimney posiiton, and the last value is the number of balloons.
drawSun(50); //Draws the sun in the upper right corner with a size of 50
//drawSun();
allBalloons();
allWind();
allBirds();
drawSmith(houseX+34, houseY-72); //puts an image of smith in one of the windows in the house
drawAllClouds(randomNumber(2,4));

//BEGIN FUNCTIONS
//Draws Mr. Smith's face in the window
//Ian McKernan
function drawSmith(x, y) {
  createCanvas("canvas1", 15, 22); //creates the canvas where the image will be put, with a size of 15x22
  setPosition("canvas1", x, y); //moves the canvas into the right spot
  drawImageURL("https://github.com/itmmckernan/CompSci/blob/master/smith.png?raw=true"); //pulls the image from the github, and puts it on the canvas
}

//Background
//Ian McKernan with an idea by Nathan Melcher
function drawBackground(canvasWidth, canvasHeight) {
  penUp(); //always good to start with this so that there aren't random lines everywhere
  var step = 1; //the step size that the turtle takes every time. Decrease the number (But not below 1) for more resolution, but slower drawing.
  var brightningCoeff = 1; //change this to make the sun appear brighter or darker
  var rCoeff = 135/255; //sky blue's red value divided by 255 so that it can be multiplied by the distance function later in this function
  var gCoeff = 206/255; //sky blue's green value divided by 255 so that it can be multiplied by the distance function later in this function
  var bCoeff = 245/255; //sky blue's blue value divided by 255 so that it can be multiplied by the distance function later in this function
  turnTo(90);
  for(var i = 0; i < canvasHeight; i++){ //loops through the number of horizontal lines in the canvas
    moveTo(0, i); //moves to the beginning of the line, with the line number being the iteration of the loop that it is on
	  for(var j = 0; j < canvasWidth/step; j++) { //loops the number of times that there are pixels horizontally
            var brightnessCoeff = brightningCoeff*(canvasWidth-distance(getX(), getY(), canvasWidth, 0)); //sets the brigtnessCoeff by taking the global brightining coeff and multipliing it by the distance away from the Sun in order to create a gradient brightness affect.
	    penRGB(Math.max(Math.min(135+(rCoeff*brightnessCoeff), 255), 0), Math.max(Math.min(206+(gCoeff*brightnessCoeff), 255), 0), Math.max(Math.min(245+(bCoeff*brightnessCoeff), 255), 0), 1-i/canvasHeight); //sets the color of the pen as a brighter or darker sky blue,, affected by the distance from the sun. The Math.min and Math.max functions are there to limit the maximum and minumum brightness and darkness the function can be, so that penRGB doesn't make a lot of warnings.
	    penDown(); // puts the pen down with the new color, moves forward the step size, then picks up the pen again.
  	    moveForward(step);
	    penUp();
         }
  }
  turnTo(0); //turns to face upwards at the end
}
//Draw House - Nathan Melcher
function drawHouse(x,y){
  penUp();
  moveTo(x,y);
//side panels 
  moveTo(x+4, y-4.5);
  penDown();
colorPanel();
function colorPanel() {
  turnTo(90);
    //penRGB(252, 214, 124);
    penRGB(219, 96, 96);
    penWidth(10);
    moveForward(24);
    turnLeft(90);
    moveForward(5);
    turnLeft(90);
    moveForward(24);
    turnRight(90);
    moveForward(5);
    turnRight(90);
    moveForward(24);
    turnLeft(90);
    moveForward(25);
    turnLeft(90);
    moveForward(24);
    turnLeft(90);
    moveForward(25);
    penUp();
}
moveTo(x+57, y-4);
penDown();
colorPanel();
//rest of front
moveTo(x+35, y-34);
penDown();
turnTo(90);
moveForward(15);
turnLeft(90);
moveForward(5);
turnLeft(90);
moveForward(15);
penUp();
moveTo(x+5, y-47);
dot(1);
penDown();
turnTo(90);
moveForward(24);
turnRight(90);
moveForward(3);
turnLeft(90);
moveForward(26);
turnLeft(90);
moveForward(3);
turnRight(90);
moveForward(25);
turnLeft(134);
penWidth(9);
moveForward(54);
turnLeft(90);
moveForward(25);
moveForward(25);
penUp();
moveTo(x+18, y-55);
  penDown();
  turnTo(90);
  moveForward(10);
  turnLeft(90);
  moveForward(10);
  turnLeft(130);
  moveForward(5);
  penUp();
  moveTo(x+57, y-55);
  penDown();
  turnTo(90);
  moveForward(10);
  turnLeft(140);
  moveForward(13);
  turnLeft(130);
  moveForward(10);
  turnRight(180);
  moveForward(18);
  penUp();
  moveTo(x+40, y-75);
  penDown();
  turnTo(90);
  moveForward(10);
  moveBackward(18);
  penUp();
//Base
  moveTo(x,y);
  penDown();
  turnTo(0);
  penWidth(1);
  penColor("black");
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
//Draws all of the Balloons in the clump of balloons.
//Ian McKernan
function drawAllBallons(meanX, meanY, chimneyX, chimneyY, numBallons) {
  var sdX = 40; //the standard deviation of the X values of the ballons
  var sdY = 60; //the standard deviation of the Y values of the ballons
  for(var i = 0; i < numBallons; i++){ //loops the number of times that we need to draw a ballon
	var radius = 51; //the radius of the big clump of ballons
	var coordX; //the x coordinate of ballon that will be drawn
	var coordY; //the y coordinate of ballon that will be drawn
	while(radius>50){
  	coordX = randomGaussian(meanX, sdX); //calls the randomGaussian function for the X value of the ballon
  	coordY = randomGaussian(meanY, sdY); //calls the randomGaussian function for the y value of the ballon
	radius = distance(meanX, meanY, coordX, coordY); //finds the distance of the two generated points from the center of the ballon clump
  }
  drawBallon(coordX, coordY, chimneyX, chimneyY, randomGaussian(4, 1), radius, meanX, meanY); // calls the drawBallon fuction with the variables it has gotten. The Radius is called so that the ballons will have a mean of 4 with a standard deviation of 1.
  }
}
//Draws each individual balloon
//Ian McKernan
function drawBallon(x, y, chimneyX, chimneyY, size, radius, meanX, meanY) {
  moveTo(chimneyX, chimneyY); //moves to the correct stating position of the chimney passed in when its called
  if(y-30 > meanY) { //this only runs the drawstring sequence if the ballon is towards the bottom of the pack of ballons
  penRGB(225, 225, 225, 0.01); //sets the mostly-translucent grey color of the string
  penDown();//puts the pen down so when it moves it draws the string
  }
  var contrast = 1.1; //the exponential value of the contrastning algorithm less than 1 is anti-shadow, more than 1 is more shadow
  moveTo(x, y); //moves to where the position of the ballon is and draws the string
  var neonColorPos = randomNumber(0, neonColors.length-1); //picks a random rgb triplet from the list so that we're able to add colors as we want and not have to change this code
  if((x-meanX)>(y-meanY)){ // determines if the ballon is on the upper or lower side of the ballons, and picks the shading command accoridngly
	  penRGB(Math.min(neonColors[neonColorPos][0]+Math.pow(radius, contrast), 255), Math.min(neonColors[neonColorPos][1]+Math.pow(radius, contrast), 255), Math.min(neonColors[neonColorPos][2]+Math.pow(radius, contrast), 255), size/8); //sets the pen color to what the random neon color is, adds highlight, then sees if that value is greater than 255. If it is it just returns 255 to avoid errors. This is done for each color channel of the ballon. Then the opacity of the colr is set based off the size of the ballon.
  } else { // if the if statement is not true, then it runs this
	  penRGB(Math.max(neonColors[neonColorPos][0]-Math.pow(radius, contrast), 0), Math.max(neonColors[neonColorPos][1]-Math.pow(radius, contrast), 0), Math.max(neonColors[neonColorPos][2]-Math.pow(radius, contrast), 0), size/8); //same as the line 2 lines above it, but instead of adding highlights it adds shadows
  }
  dot(size);//draws the actual balloon
  penUp(); //end with this to not have random lines everywere
}
//Finds the distance Between 2 points
//Ian McKernan
function distance(pt1X, pt1Y, pt2X, pt2y) {
  return Math.sqrt(Math.pow((pt2X-pt1X),2)+Math.pow((pt2y-pt1Y), 2)); //finds the distance between two points. Derived from Pythagorean theorem
}

//Gaussian Random (Random with a set mean and standard deviation)
//Ian McKernan
function randomGaussian(m, sd) { //gets passed mean and standard deviation, as m and sd, respectively, and returns the Gaussian random
  return m + 2*sd*(Math.random() + Math.random() + Math.random() - 1.5); //this is an approxiamtion of the box-muller transform. It's more than good enough for the project
}
//Nathan Melcher
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
//Applying all the random balloons
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
  var neonColorPos = randomNumber(0, neonColors.length-1);
  penRGB(neonColors[neonColorPos][0], neonColors[neonColorPos][1], neonColors[neonColorPos][2], 0.75);
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
//Ian McKernan and Jason Hermann
function drawSun() {
  penUp(); //should need to start out with penUp, but just to be safe we do it again
  moveTo(320, 0); //moves to the upper right corner cause thats where the sun is
  penColor("yellow");// starts out with yellow
  dot(63); //makes the biggest dot
  for(var i = 0; i < 50; i++){ // starts drawing the outer sun first then slowly makes the inner suns
    var fadeCoeffG = 2; //how quickly the green fades away per iteration of the for loop so that it can transition into red in the middle from orange
    penRGB(255, 180-fadeCoeffG*i, 0); //sets the pen color and tranisitions into red for the middle
    dot(50-i); //smaller dot every iteration of the for loop
  }
  turnTo(0); //points up
  penWidth(7); //the pen gets bigger to make the sun rays
  turnLeft(90); //turns left to start
  moveForward(65); // gets into starting position
  turnTo(45); //turns again
  penDown(); // puts the pen down
  penColor("yellow"); // pen color yellow
  for (var j = 0; j < 18; j++) {
    arcLeft(70, 20); // draws the arcs of the sun
    turnLeft(270);
  }
  penUp(); //pulls the pen up in the end
}

//Clouds

function drawCloud(size){
  penUp();
  turnTo(270);
  moveTo(randomNumber(30, 250), randomNumber(50, 20));
  penRGB(randomNumber(220, 233), randomNumber(230, 237), randomNumber(245, 245), 0.9);
  dot(size);
  moveForward(size);
  turnRight(90);
  moveForward(2.5);
  dot(1.25 * size);
  turnLeft(90);
  moveForward(size);
  turnLeft(90);
  moveForward(2.5);
  dot(size);
  penUp();
}

function drawAllClouds(cloudNum){
  for (var i = 0; i < cloudNum; i++) {
  drawCloud(randomNumber(12.5, 20));
  turnTo(270);
  }
}
