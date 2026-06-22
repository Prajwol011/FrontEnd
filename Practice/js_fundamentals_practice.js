//Qn 1 -> Age checker
const age = 20;
const name = "Prajwol Shrestha";
function vote(){
    if(age>=18){
        console.log("You can vote");
    }else{
        console.log("Too young to vote.");
    }
}
vote();

//Qn 2 -> Create two variables with any numbers. Print the result of adding, subtracting, multiplying, and dividing them. Also print the remainder when first number is divided by second.

let a = 20;
let b = 10;

const add = a+b;
console.log("Addition of two numbers: ",add);

const subtract = a-b;
console.log("Subtraction of two numbers: ",subtract);

const multiply = a*b;
console.log("Multiplication of two numbers is: ", multiply);

const divide = a/b;
console.log("Division of two numbers is: ", divide);

const remainder = a%b;
console.log("Remainder of two numbers is: ", remainder);

//Qn 3 -> Write code that checks if a number is even or odd and prints the result. Try it with at least 3 different numbers.

// Create a function once
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is an Even Number");
    } else {
        console.log(number + " is an Odd Number");
    }
}

checkEvenOdd(0);
checkEvenOdd(15);
checkEvenOdd(28);

//Qn 4 -> Print numbers 1 to 30. But for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both 3 and 5 print "FizzBuzz". 

