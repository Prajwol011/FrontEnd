//qn1 Q1. Create an object for a phone with these properties: name, brand, price, inStock. Then print each property individually.

const phone = {
  name: "iPhone 17 Pro",
  brand: "Apple",
  price: 230000,
  inStock: true
};
console.log(phone.name);
console.log(phone.brand);
console.log(phone.price);
console.log(phone.inStock);

//Q2. Given this object — access the city using both dot notation AND bracket notation:
const user = { name: "Prajwol", age: 20, city: "Kathmandu" };
console.log(user.city);
console.log(user["city"]);

//Q3. Update the object — change the age to 20 and add a new property country with value "Nepal". Print the final object:
const user2 = { name: "Lisa", age: 18, city: "Bhaktapur" };
user2.age = 20;
user2.country = "Nepal";
console.log(user2);

//Q4. Access the nested value — print the street:
const person = {
    name: "Ram",
    address: {
        city: "Pokhara",
        street: "Lakeside Road"
    }
};
console.log(person.address.street);

