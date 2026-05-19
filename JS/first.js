fullname = "Tony Stark";
age = 19;
price = 99.99;
x = null;
y = undefined;

isFollow = true;

console.log(fullname);

let a = 10;
a = 20; // This is allowed because 'a' is declared with 'let' and can be reassigned
// let a = 20; // This will cause an error because 'a' is already declared with 'let'

const b = 30;
// b = 40; // This will cause an error because 'b' is a constant and cannot be reassigned

var c = 50;
// var c = 60; // This is allowed because 'var' allows redeclaration

console.log(a);
console.log(b);
console.log(c);
