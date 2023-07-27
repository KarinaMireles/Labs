function getAreaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
  } 
function getAreaOfSquare(side) {
    return side * side;
  }
function getAreaOfTriangle(base, height) {
    return 0.5 * base * height;
  }

const radius = 10;
console.log("Area of Circle with radius", radius, ":", getAreaOfCircle(radius));
console.log("Circumference of Circle with radius", radius, ":", getCircumferenceOfCircle(radius));  
  
const side = 3;
console.log("Area of Square with side length", side, ":", getAreaOfSquare(side));


const base = 4;
const height = 12;
console.log("Area of Triangle with base", base, "and height", height, ":", getAreaOfTriangle(base, height));