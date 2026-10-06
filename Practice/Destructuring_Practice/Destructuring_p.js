//Q1. Destructure this object and print each value:
const phone = { brand: "Apple", model: "iPhone 15", price: 150000 };
// destructure and print brand, model, price

const { brand, model, price } = phone;
console.log(brand);
console.log(model);
console.log(price);

//Q2. Destructure inside a function parameter:
const product = { name: "laptop", price: 80000, inStock: true };

function printProduct({name, price, inStock} = product) {
    console.log(`${name} costs Rs ${price}`);
}
printProduct(product);

//Q3. Array destructuring — get only first and second item:
const fruits = ["mango", "apple", "banana", "orange"];
// destructure only first two
// print both
const [first,second,third,fourth]=fruits;
console.log(first);
console.log(second);

//Q4. Destructure with a default value:
const user = { name: "Prajwol", age: 19 };
// destructure name, age, and city (with default value "Kathmandu")
// print all three
const {name,age,city = "Kathmandu"} = user;
console.log(name);
console.log(age);
console.log(city);