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

//Question 4: Create an array ['hello', 'world', 'javascript']. Use forEach to print the length of each word.
const array = ["hello", "world", "javascript"];
array.forEach((array) => {
    console.log(array);
    console.log(array.length);
})

//medium level
// Question 5: Create an array of numbers [1, 2, 3, 4, 5]. Use forEach to add all numbers together and store the sum in a variable. Print the final sum.
const n1 = [1, 2, 3, 4, 5];
let sum = 0;
n1.forEach((n1) => {
    sum = sum+n1;
})
console.log("The final sum of the numbers is",sum);

// Question 6: Create an array of objects representing books:
// Use forEach to print each book's title and number of pages in a formatted way like "The Hobbit has 310 pages".

const books = [
  { title: 'The Hobbit', pages: 310 },
  { title: '1984', pages: 328 },
  { title: 'Dune', pages: 682 }
];
books.forEach((books) => {
    console.log(`${books.title} has ${books.pages} pages.`);
})

// Question 7: Create an array of numbers [5, 12, 8, 3, 15]. Use forEach to count how many numbers are greater than 10 and store that count in a variable.
const n2 = [5, 12, 8, 3, 15];
n2.forEach((n2) => {
    if(n2>10){
        console.log(n2);
    }
})

//Question 8: Create an array ['javascript', 'python', 'java', 'c++']. Use forEach to create a new object that stores each programming language as a key with its length as the value. Print the final object.

// const language = ['javascript', 'python', 'java', 'c++'];
// language.forEach((language) => {
//     let obj = [
//         {name: `${language}`, length:`${language.length}`}
//     ]
//     console.log(obj);
// })

const languages = ['javascript', 'python', 'java', 'c++'];
// 1. Create an empty object BEFORE the loop starts
const languageLengths = {};

// 2. Loop through each language
languages.forEach((language) => {
    // 3. Use square bracket notation to add the key and value dynamically
    languageLengths[language] = language.length;
});

// 4. Print the final combined object AFTER the loop is totally finished
console.log(languageLengths);


