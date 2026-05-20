// using var
var name = "Prajwol";
console.log(name);

// using let
let age = 25;
console.log(age);

// using const
const country = "Nepal";
console.log(country);

// trying to reassign a const variable (this will cause an error)
// country = "India"; // Uncommenting this line will throw an error because 'country' is a constant and cannot be reassigned

// using var to declare a variable that can be redeclared
var city = "Kathmandu";
console.log(city);
var city = "Pokhara"; // This is allowed with 'var'
console.log(city);


//if the constant holds an object or array, the contents of that object can still change.
const arr = [1,2,3,4];
arr.push(5);
console.log(arr);