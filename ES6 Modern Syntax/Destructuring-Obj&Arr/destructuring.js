const user = { name: "Prajwol", age: 19, city: "Kathmandu" };

// 1. object destructuring with a default value
const { name, age, country = "Nepal" } = user;
console.log(country);

// 2. array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);