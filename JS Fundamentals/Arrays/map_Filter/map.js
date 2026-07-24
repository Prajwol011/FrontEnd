//Easy Level - map
// Question 1: Create an array of numbers [1, 2, 3, 4, 5]. Use map to create a new array where each number is multiplied by 2.
const numbers = [1, 2, 3, 4, 5];
const doublenumbers = numbers.map((number) => number*2);
console.log(doublenumbers);

// Question 2: Create an array of strings ['hello', 'world', 'javascript']. Use map to create a new array where each string is converted to uppercase.
const strings = ['hello', 'world', 'javascript'];
const stringUpper = strings.map((upper) => upper.toUpperCase());
console.log(stringUpper);

//Question 3: Create an array of numbers [10, 20, 30, 40]. Use map to create a new array where each number is increased by 5.
const numbers1 = [10, 20, 30, 40];
const increasenumbers = numbers1.map((number) => number + 5);
console.log(increasenumbers);

//Question 4: Create an array of strings ['apple', 'banana', 'orange']. Use map to create a new array with the length of each string.
const str = ['apple', 'banana', 'orange'];
const newarr = str.map((s) => s.length);
console.log(newarr);

//Question 5: Create an array of objects representing students: use map to create a new array containing only the names.
const students = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 21 }
];
const name = students.map((name) => name.name);
console.log(name); 

//Medium Level - map
// Question 6: Create an array of objects representing books:Use map to create a new array of objects with the same titles but pages converted to words (e.g., "310 pages").
const books = [
  { title: 'The Hobbit', pages: 310 },
  { title: '1984', pages: 328 },
  { title: 'Dune', pages: 682 }
];
const newbooks = books.map((book) => ({ ...book, pages: `${book.pages} pages` }));
console.log(newbooks);

//Question 7: Create an array of numbers [1, 2, 3, 4, 5]. Use map to create a new array of objects where each object has number and squared properties.
const numbers2 = [1, 2, 3, 4, 5];
const newarr1 = numbers2.map((number) => ({
  number: number, squared: number**2
}));
console.log(newarr1);

//Question 8: Create an array of user objects: Use map to create a new array where each object has a fullName property (combined first and last name in title case).
const users = [
  { firstName: 'alice', lastName: 'smith' },
  { firstName: 'bob', lastName: 'jones' },
  { firstName: 'charlie', lastName: 'brown' }
];
const newUser = users.map((newname) => ({
    fullName: `${newname.firstName[0].toUpperCase() + newname.firstName.slice(1)} ${newname.lastName[0].toUpperCase() + newname.lastName.slice(1)}`
}));

console.log(newUser);

//Question 9: Create an array of prices [10.5, 25.3, 15.7, 8.9]. Use map to create a new array where each price has a currency symbol added (e.g., "$10.5").
const prices = [10.5, 25.3, 15.7, 8.9];
const newPrice = prices.map((price) => `$${price}`);
console.log(newPrice);

//Question 10: Create an array of objects representing orders:Use map to create a new array with objects containing the product name and total cost (quantity × price).
const orders = [
  { product: 'Laptop', quantity: 2, price: 1000 },
  { product: 'Mouse', quantity: 5, price: 25 },
  { product: 'Keyboard', quantity: 1, price: 75 }
];
const final = orders.map((order) => ({
  product: order.product, totalCost: order.quantity*order.price
}))
console.log(final);
