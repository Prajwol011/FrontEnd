//Arithmetic Operators

let a = 10;
let b = 2;

console.log("a = ", a, "b = ", b);

console.log("a + b = ", a + b); // Addition
console.log("a - b = ", a - b); // Subtraction
console.log("a * b = ", a * b); // Multiplication
console.log("a / b = ", a / b); // Division
console.log("a % b = ", a % b); // Modulus
console.log("a ** b = ", a ** b); // Exponentiation

//Unary Operators 
console.log("++a = ", ++a); // Pre-increment
console.log("a++ = ", a++); // Post-increment
console.log("--b = ", --b); // Pre-decrement
console.log("b-- = ", b--); // Post-decrement

//here dont be confused in pre and post increment and decrement because it will change the value of a and b respectively but the output will be different as pre increment and decrement will change the value before using it and post increment and decrement will change the value after using it.

//Assignment Operators
let c = 5;
console.log("c = ", c);

c += 4;
console.log("c = ", c);

c -= 4;
console.log("c = ", c);

c *= 4;
console.log("c = ", c);

c /= 4;
console.log("c = ", c);  //do not get confused because the value of c is changing here as i am printing or changing the value of in each console.log so why the output comes different if we have supposed the valu of c = 5 in all the operations then the answer will differ.

//Comparison Operators
let x = 10;
let y = '10';

console.log("x = ", x, "y = ", y);

console.log("x == y: ", x == y); // Equality
console.log("x != y: ", x != y); // Inequality
console.log("x > y: ", x > y); // Greater than
console.log("x < y: ", x < y); // Less than
console.log("x >= y: ", x >= y); // Greater than or equal to
console.log("x <= y: ", x <= y); // Less than or equal to
console.log("x === y: ", x === y); // Strict equality
console.log("x !== y: ", x !== y); // Strict inequality

//Logical Operators
let p = 5;
let q = 10;

console.log("p = ", p, "q = ", q);

console.log("p > 3 && q < 15: ", p > 3 && q < 15); // Logical AND
console.log("p > 3 || q < 15: ", p > 3 || q < 15); // Logical OR
console.log("!(p > 3): ", !(p > 3)); // Logical NOT

//Conditional Statements

//if statement
let age = 18;

if (age >= 18) {
    console.log("The candidate is eligiable.")
}
if (age < 18) {
    console.log("The candidate is not eligible.")
}

//if-else statement
let mode = 'light';
let color;
if (mode === 'dark') {
    color = 'black';
} else {
    color = 'white';
}

console.log(color);

//else if statement
let score = 85;
let grade;

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score < 90) {
    grade = 'B';
} else if (score >= 70 && score < 80) {
    grade = 'C';
} else if (score >= 60 && score < 70) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log("Score: ", score, "\tGrade: ", grade);

//Ternary Operator(simpler,conpact if-else)
let n = 5;
let m = 4;

let result = n > m ? n : m;
console.log(result);


//if you want more theory related you can go to "mdn" for proper theory related problems.
