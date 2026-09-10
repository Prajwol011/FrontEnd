//Q1. Create an object for yourself with name, age, and city. Print each property:

const details = {
    name: "Prajwol Shrestha",
    age: 20,
    city: "Bhaktapur"
};

console.log(details.name);
console.log(details.age);
console.log(details.city);

//Q2. Access properties two ways — dot notation AND bracket notation:

const car = { brand: "Toyota", model: "Corolla", year: 2022 };
console.log(car.brand);
console.log(car["model"]);
console.log(car.year);

//Q3. Update properties after creating the object:

const student = { name: "Prajwol", grade: "A", score: 90 };
student.score = 95;
student.passed = true;
console.log(student);

//Q4. Loop through all properties of an object using for...in:
const phone = { brand: "Samsung", color: "black", price: 30000 };
for(const key in phone){
    console.log(`${key}: ${phone[key]}`)
}

//Q5. Nested object — access deeply:
const user = {
    name: "Prajwol Shrestha",
    address: {
        country: "Nepal",
        city: "Bhaktapur"
    }
};

console.log(user.address.country);

//Q6. Update a nested property:
const employee = {
    name: "Ram",
    salary: {
        basic: 30000,
        bonus: 5000,
        
    }
};
// update bonus to 8000
// add a new property "total" inside salary that is basic + bonus
// print the full salary object

employee.salary.bonus = 8000;
employee.salary.total = employee.salary.bonus+employee.salary.basic;

console.log(employee.salary);

//Q7. Array of objects — access and print:
const students = [
    { name: "Prajwol", score: 90 },
    { name: "Ram", score: 75 },
    { name: "Sita", score: 85 }
];
// loop through and print each student's name and score
// output: "Prajwol scored 90"

for(const student of students){
    console.log(`${student.name} scored ${student.score}`);
}

//Q8. Array of objects — combine with filter:
const products = [
    { name: "phone", price: 20000, inStock: true },
    { name: "laptop", price: 80000, inStock: false },
    { name: "watch", price: 5000, inStock: true },
    { name: "tablet", price: 40000, inStock: false }
];
// filter only products that are inStock
// print the name and price of each available product

const availableProducts = products.filter(product => product.inStock);

for (const product of availableProducts) {
    console.log(`${product.name}: Rs. ${product.price}`);
}

//q9. Create & Read
// Create an object named book with the following properties:
// title: "The Hobbit"
// author: "J.R.R. Tolkien"
// pages: 310

// Questions:
// Log the title using dot notation.
// Log the author using bracket notation.
// Create a variable const property = "pages"; and use it to log the page count.

const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310
};
console.log(book.title);
console.log(book["author"]);

const property = 'pages';
console.log(book[property])

//q10.Update, Add & Delete
// Starting with this object:
// JavaScript
// const laptop = {
//   brand: "Dell",
//   ram: "8GB",
//   inStock: true
// };
// Questions:
// Update ram to "16GB".
// Add a new property storage set to "512GB SSD".
// Delete the inStock property.
// Log the modified object.

const laptop ={
    brand: "Dell",
    ram: "8GB",
    instock: true
};
console.log("Before Updating",laptop);

laptop.ram = "16GB";
laptop.SSD = "512GB SSD";

delete laptop.instock;

console.log("After Updating",laptop);


//q11.Nested Objects
// Working with this nested object:
// JavaScript
// const user = {
//   id: 101,
//   profile: {
//     fullName: "Aisha Khan",
//     address: {
//       city: "Kathmandu",
//       zip: 44600
//     }
//   }
// };
// Questions:
// How do you log "Aisha Khan"?
// How do you change city from "Kathmandu" to "Pokhara"?
// Add a new property country: "Nepal" inside the address object.

const user2= {
    id: 101,
    profile: {
        fullName: "Aisha Khan",
        address: {
            city: "Kathmandu",
            zip: 44600
        }
    }
};

console.log(user2.profile.fullName);
user2.profile.address.city = "Pokhara";
user2.profile.address.country = "Nepal";

console.log(user2);

//q12. Array of Objects
// working with this dataset:
// const products = [
//   { id: 1, name: "Laptop", price: 1000, inStock: true },
//   { id: 2, name: "Phone", price: 600, inStock: false },
//   { id: 3, name: "Headphones", price: 150, inStock: true }
// ];
// Questions:

// How do you log the name of the second product ("Phone")?

// How do you update the inStock status of "Phone" to true?

// How would you loop through the array and log only the names of products that are inStock: true?


const productss = [
    {id: 1, name: "Laptop", price: 1000, instock: true },
    {id: 2, name: "Phone", price: 600, instock: false },
    {id: 3, name: "Headphones", price: 150, instock: true },
];

console.log(productss[1]);

productss[1].instock = true;
console.log(productss)

productss.forEach((product) => {
    if(product.instock){
        console.log(product.name)
    }
});


