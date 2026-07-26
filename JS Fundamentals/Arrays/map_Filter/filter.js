// FILTER Questions
// Easy Level - filter
// Question 1: Create an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use filter to create a new array with only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter((even) => {
    if (even % 2 === 0) {
        return even;
    }
});
console.log(even);

//Question 2: Create an array of strings ['apple', 'apricot', 'banana', 'blueberry', 'cherry']. Use filter to create a new array with only fruits that start with 'a'.
const strings = ['apple', 'apricot', 'banana', 'blueberry', 'cherry'];

const fruits = strings.filter((fruit) => fruit.startsWith('a'));

console.log(fruits);

//Question 3: Create an array of numbers [5, 12, 8, 3, 15, 20, 7]. Use filter to create a new array with only numbers greater than 10.
const arrayOfnum = [5, 12, 8, 3, 15, 20, 7];
const newarr = arrayOfnum.filter((greater) => greater > 10);
console.log(newarr);

//Question 4: Create an array of strings ['hello', 'hi', 'javascript', 'code', 'programming']. Use filter to create a new array with only words that have more than 4 characters.
const strings2 = ['hello', 'hi', 'javascript', 'code', 'programming'];
const newstr = strings2.filter((string) => string.length > 4);
console.log(newstr);

//Question 5: Create an array of objects representing products:Use filter to create a new array with only available products.
const products = [
    { name: 'Laptop', available: true },
    { name: 'Mouse', available: false },
    { name: 'Keyboard', available: true }
];
const availabel = products.filter((available) => available.available == true);
console.log(availabel);

//Medium Level - filter
// Question 6: Create an array of numbers [15, 23, 8, 42, 35, 6, 50]. Use filter to create a new array with only numbers that are between 20 and 40 (inclusive).
const num = [15, 23, 8, 42, 35, 6, 50];
const inbetween = num.filter((between) => between >= 20 && between <= 40);
console.log(inbetween);

//Question 7: Create an array of objects representing employees:Use filter to create a new array with only IT department employees.
const employees = [
  { name: 'Alice', department: 'IT', salary: 80000 },
  { name: 'Bob', department: 'HR', salary: 60000 },
  { name: 'Charlie', department: 'IT', salary: 85000 }
];
const filtered = employees.filter((it) => it.department === 'IT');
console.log(filtered);

//Question 8: Create an array of strings ['javascript', 'python', 'c', 'go', 'typescript', 'rust']. Use filter to create a new array with only programming languages that have more than 6 characters.
const languages = ['javascript', 'python', 'c', 'go', 'typescript', 'rust'];
const newlang = languages.filter((new1) => new1.length > 6);
console.log(newlang);

