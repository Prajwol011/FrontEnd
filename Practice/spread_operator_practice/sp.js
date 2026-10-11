//Q1. Add a new item to an array without using push:
const fruits = ["mango", "apple", "banana"];
// add "orange" at the end using spread
const updateFruits = [...fruits, "orange"];
console.log(updateFruits);

// Q2. Merge these two objects into one:
const personal = { name: "Prajwol", age: 19 };
const professional = { job: "Developer", city: "Kathmandu" };

const combined = {...personal,...professional};
console.log(combined);

//Q3. Update only the price in this object without changing anything else:
const product = { name: "phone", price: 20000, inStock: true };
// update price to 25000 using spread
const updatedproduct = {...product, price: 25000};
console.log(updatedproduct);
