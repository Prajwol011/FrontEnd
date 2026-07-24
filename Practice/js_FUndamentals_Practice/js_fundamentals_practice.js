//Qn 1 -> Age checker
const age = 20;
const name = "Prajwol Shrestha";
function vote() {
    if (age >= 18) {
        console.log("You can vote");
    } else {
        console.log("Too young to vote.");
    }
}
vote();

//Qn 2 -> Create two variables with any numbers. Print the result of adding, subtracting, multiplying, and dividing them. Also print the remainder when first number is divided by second.

let a = 20;
let b = 10;

const add = a + b;
console.log("Addition of two numbers: ", add);

const subtract = a - b;
console.log("Subtraction of two numbers: ", subtract);

const multiply = a * b;
console.log("Multiplication of two numbers is: ", multiply);

const divide = a / b;
console.log("Division of two numbers is: ", divide);

const remainder = a % b;
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

//Write a function that takes a number and returns whether it's even or odd

function EvenOdd(number) {
    if (number % 2 == 0) {
        console.log(number + " is an Even Number");
    } else {
        console.log(number + " is an Odd Number");
    }
}
EvenOdd(10);

//Write a for loop that prints 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Write an if/else that checks if someone can vote (age >= 18)

// const age = 19;

// function CheckAge(age) {
//     if (age >= 18) {
//         console.log("He/She is eligble for voting.");
//     } else {
//         console.log("He/She is not eligble for voting.");
//     }
// }
// CheckAge(age);

//Write a function that takes a year and returns true if it's a leap year. Rule: divisible by 4, but NOT by 100 unless also divisible by 400.

function LeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(LeapYear(2020));
console.log(LeapYear(2021));
console.log(LeapYear(2000));
console.log(LeapYear(1900));

//rite a function that takes a number N and returns the sum of all numbers from 1 to N using a loop (not a formula).

let sum = 0;
function TakeSum(N) {
    for (let i = 1; i <= N; i++) {
        sum = sum + i;
    }
    return sum;
}
TakeSum(5);

//Convert this to an arrow function. Keep the same behavior.
// function isAdult(age) {
//   return age >= 18;
// }

// const isAdult = (age) => {
//     return age >= 18;
// }
// console.log(isAdult(19));

//Write a function that takes three numbers and returns the smallest one (not largest this time — make sure you're not just memorizing the old answer).

const numbers = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    } else {
        if (b < a && b < c) {
            return b;
        } else {
            return c;
        }
    }
}
console.log(numbers(10,20,30));

//Print numbers 1 to 20. For even numbers print "Even", for odd numbers print "Odd" — but for any number divisible by 7, print "Lucky" instead (overrides even/odd).

for (let i = 1; i <= 20; i++) {
    if (i % 7 === 0) {
        console.log(i + " Lucky");
    } else if (i % 2 === 0) {
        console.log(i + " Even");
    } else {
        console.log(i + " Odd");
    }
}
