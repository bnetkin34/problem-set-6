/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let helloDrawing = document.querySelector('canvas').getContext('2d');
  helloDrawing.font = '48px sans-serif';
  helloDrawing.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

  let rectangle = document.getElementById("canvas2").getContext("2d");
  let rectHeight;
  let rectWidth;
  let rectX;
  let rectY;
  do{rectHeight = Number(prompt("Height:"))
}while(rectHeight >= canvas2.height && rectHeight < 1);
console.log(rectHeight)

  do{rectWidth = Number(prompt("Width:"))
}while(rectWidth >= canvas2.width && rectWidth < 1);
console.log(rectWidth)

  do{rectX = Number(prompt("X-Coordinate:"))
}while(rectX <= canvas2.width && rectX < 5)
console.log(rectX)

do{rectY = Number(prompt("Y-Coordinate:"))
}while(rectY <= canvas2.height && rectY < 5)

if(rectHeight > canvas2.height && rectWidth > canvas2.width && rectX > canvas2.width && rectY > canvas2.height){
  alert("These rectangle dimensions are improper! Please try again!");
}
else{
  console.log(rectY)
  rectangle.clearRect(0, 0, canvas2.width, canvas2.height);
  rectangle.strokeRect(rectX, rectY, rectWidth, rectHeight);
}
}
/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
let rectangleColor = document.getElementById('canvas3');
let context = rectangleColor.getContext('2d');
context.clearRect(0, 0, canvas3.width, canvas3.height);

let color;
while(true){
color = prompt('Please enter one of these colors: black, blue, green, orange, purple, red, or yellow.');
if(color=="black" || color=="blue" || color=="green" || color=="orange" || color=="purple" || color=="red" || color=="yellow") {
  break;
} else {
  window.alert(`${color} is not a supported color`);
  break;
}
}
context.fillStyle = color;
context.fillRect(10, 10, 100, 50);
}
/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

let canvas = document.getElementById("canvas4")
let triangle = canvas.getContext("2d");
let side1 = Number(prompt("Please enter a positive integer for your left side length."));
let side2 = Number(prompt("Please enter a positive integer for your bottom side length."));
let side3 = Number(prompt("Please enter a positive integer for your hypotenuse length."));
let x = 10
let y = 10;
triangle.clearRect(0, 0, canvas4.width, canvas4.height);

while(true){
if(((side1 ** 2) + (side2 ** 2) == (side3 ** 2)) && side1 > 0 && side2 > 0 && side3 > 0 && canvas.width - x - side1 >= 0 && canvas.height - y - side2 >= 0){
  break;
}else{
  alert("That is not a valid right triangle.");
  break;
}
}
if(Math.pow(side1, 2) + Math.pow(side2, 2) == Math.pow(side3, 2)){
triangle.beginPath();
triangle.moveTo(x,y);
triangle.lineTo(x, y + side1);
triangle.stroke();

triangle.beginPath();
triangle.moveTo(x,y + side1);
triangle.lineTo(x + side2, y + side1);
triangle.stroke();

triangle.beginPath();
triangle.moveTo(x,y);
triangle.lineTo(x + side2, y + side1);
triangle.stroke();
}
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
let canvas = document.getElementById('canvas5');
let ctx = canvas.getContext('2d');
 ctx.clearRect(0, 0, canvas.width, canvas.height);
let radius;

while(true){
  radius = Number(prompt("Please enter a good radius."));
  if(radius >= 1 && radius <= canvas5.width && Number.isInteger(radius)){
    break;
}else if (radius > 380) {
    alert("Your smiley face does not fit on the canvas.");
} else {

}

}

let eyeRadius = radius * .1
let mouthRadius = radius * .7
ctx.beginPath();
ctx.arc(radius + 10, radius + 10, radius, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(radius + 10 - radius/3, radius + 10 - radius/4, eyeRadius,0, Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.arc(radius + 10 + radius/3, radius + 10 - radius/4, eyeRadius, 0, Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.arc(radius + 10, radius + 10, mouthRadius, 0, Math.PI);
ctx.stroke();
}



/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let ctx = document.getElementById("canvas6").getContext("2d");
  ctx.clearRect(0,0,1024,760);

  let outerRadius;
  let innerRadius;
  do {
    outerRadius = Number(prompt("Outer Radius:"));
  } while (isNaN(outerRadius));
  do {
    innerRadius = Number(prompt("Inner Radius:"));
  } while (isNaN(innerRadius));

  let degrees = 0;

  if (innerRadius > outerRadius){
    alert("Your outer radius must be larger than your inner radius.");
  } else if (outerRadius<2){
    alert("Your outer radius is too small.");
  } else if (innerRadius<1){
    alert("Your inner radius is too small");
  } else {
    ctx.beginPath();

    ctx.moveTo(125,125-outerRadius);
    for (let i=0; i<=5; i++){
      ctx.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*outerRadius)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*outerRadius)));
      degrees +=36;
      ctx.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*innerRadius)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*innerRadius)));
      degrees +=36;
    }
    ctx.stroke();
    ctx.closePath();
  }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
let ctx = document.getElementById('canvas7').getContext("2d");
let s = 80;
let c = Number((80/Math.sqrt(2)).toFixed(0));
let x = 70;
let y = 10;
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x+s,y);
ctx.lineTo(x+s+c,y+c);
ctx.lineTo(x+s+c,y+s+c);
ctx.lineTo(x+s,y+s+c+c);
ctx.lineTo(x,y+s+c+c);
ctx.lineTo(x-c,y+s+c);
ctx.lineTo(x-c,y+c);
ctx.lineTo(x,y);
ctx.fillStyle="#f00";
ctx.fill();
ctx.closePath();
ctx.fillStyle="#fff";
ctx.font="65px sans-serif";
ctx.fillText("STOP", 22, 133);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById('canvas8');
   let ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   let length=Number(prompt("Please enter a side length"));
   let x = 10;
   let y = canvas.height-10;
   let i = 0;
   lineNumber = 1;
   while(i < 5){
     for(let j = 0+lineNumber;j <= 5; j++){
       ctx.strokeRect(x, y - length, length, length);
       x += length;
     }
     x = 10 + (length / 2) * lineNumber;
     y -= length;
     lineNumber++;
     i++;
   }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let ctx = document.getElementById("canvas9").getContext("2d");
  ctx.clearRect(0,0,1024,760);
  let houseColor = prompt("House Color:");
  let doorColor = prompt("Front Door Color:");
  if ((houseColor == "blue" || houseColor == "brown"|| houseColor == "green" || houseColor == "orange" || houseColor == "purple" || houseColor == "red" || houseColor == "yellow") && (doorColor == "blue" || doorColor == "brown"|| doorColor == "green" || doorColor == "orange" || doorColor == "purple" || doorColor == "red" || doorColor == "yellow")){

    ctx.fillStyle="black";
    ctx.fillRect(150,300,724,450);
    ctx.fillStyle=houseColor;
    ctx.fillRect(151,301,722,448);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(150,300);
    ctx.lineTo(512,10);
    ctx.lineTo(874,300);
    ctx.lineTo(150,300);
    ctx.fillStyle="black";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(153,299);
    ctx.lineTo(512,12);
    ctx.lineTo(871,299);
    ctx.lineTo(151,299);
    ctx.fillStyle="gray";
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle="black";
    ctx.fillRect(260,620,80,80);
    ctx.fillRect(260,400,80,80);
    ctx.fillRect(684,620,80,80);
    ctx.fillRect(684,400,80,80);
    ctx.fillStyle="lightblue";
    ctx.fillRect(261,621,78,78);
    ctx.fillRect(261,401,78,78);
    ctx.fillRect(685,621,78,78);
    ctx.fillRect(685,401,78,78);

    ctx.fillStyle="black"
    ctx.fillRect(462,590,100,160);
    ctx.fillStyle=doorColor;
    ctx.fillRect(463,591,98,158);

    ctx.beginPath();
    ctx.arc(545,670,8,0,Math.PI*2,true);
    ctx.fillStyle="black";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(545,670,7,0,Math.PI*2,true);
    ctx.fillStyle="gold";
    ctx.fill();
    ctx.closePath();

  } else {
    alert("One of your colors is not supported");
  }
}
