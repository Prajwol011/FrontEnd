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