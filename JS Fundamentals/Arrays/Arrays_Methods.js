// Easy Level

// Question 1: Create an array of numbers [1, 2, 3, 4, 5]. Use forEach to print each number to the console.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((numbers) => {
    console.log(numbers);
})

//Q1. Loop through this array and print each number multiplied by 2:
const nums = [1, 2, 3, 4, 5];
nums.forEach((nums) => {
    console.log(nums * 2);
})

// Q2. Loop through this array and print each name in uppercase:
const names = ["prajwol", "ram", "sita"];
names.forEach((names) => {
    console.log(names.toUpperCase());
})

// Q3. Loop through this array and print only the price of each item:
const items = [
    { name: "phone", price: 20000 },
    { name: "laptop", price: 80000 },
    { name: "watch", price: 5000 }
];
items.forEach((items) => {
    console.log(`The Price of ${items.name} is ${items.price} Rs`);
})