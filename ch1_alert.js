alert("I'm a program written by Javascript to calculate to hypotenuse side of your right-angle triangle!");
alert("So let's get started, enter the values for the adjacent and opposite sides in the next prompt");


var num1 = window.prompt('Enter the value for the ADJACENT side');
var num2 = window.prompt('Enter the value for the OPPOSITE side');

let result = (num1**2 + num2**2)**0.5;

alert(`The value for the hypotenuse side is ${result}`);

console.log(result);