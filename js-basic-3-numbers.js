
let num1 = 5;
let num2 = 4;

function add(num1, num2) {

    let result = num1 + num2;
    return result;

}console.log(add(num1, num2));



function subtraction(num1, num2) {

    let result = num1 - num2;
    return result;
} console.log(subtraction(num1, num2));


function multiply(num1, num2) {

    let result = num1 * num2;
    return result;
} console.log(multiply(num1, num2));


function split(num1, num2) {
    let result = num1 / num2;
    return result;
} console.log(split(num1, num2));



function power(num1, num2) {
    let result = num1 ** num2;
    return result;
} console.log(power(num1, num2));



function mod(num1, num2) {

    let result = num1 % num2;
    return result;

} console.log(mod(num1, num2)); 



let $num = 25;

function squareRoot ($num ){

let result = Math.sqrt($num);
return result;

} console.log(squareRoot($num));


let num = 8;

function absoluteValue(num) {
  let result = Math.abs(num);
  return result;
}

console.log(absoluteValue(num));

function roundToN(number) {
  return Math.round(number);
}


console.log(roundToN(3.2));  
console.log(roundToN(3.5));  
console.log(roundToN(-1.2)); 
console.log(roundToN(-1.5)); 

function getRandomNumber() {
  return Math.random();
}


console.log(getRandomNumber());

function getRandomNumberInRange(min, max) {
  return Math.random() * (max - min) + min;
}


console.log(getRandomNumberInRange(0, 10));    
console.log(getRandomNumberInRange(5, 15));    
