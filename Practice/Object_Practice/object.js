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

