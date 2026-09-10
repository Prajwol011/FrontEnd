const user = {
  name: "Aisha",
  age: 24,
  isAdmin: false,
  skills: ["html", "css"],
};

console.log(user.name)
console.log(user["name"])

const key = "age";
console.log(user[key]);
console.log(user.age);

//Create, update, delete

console.log(user.email = "a@x.com");   // add
console.log(user.age = 25);            // update (same syntax — key exists, so it overwrites)
delete user.isAdmin;      // remove

console.log(user)

//Nested objects
const user1 = {
  name: "Aisha",
  address: {
    city: "Pune",
    geo: { lat: 18.52, lng: 73.85 },
  },
};

user1.address.city;         // "Pune"
user1.address.geo.lat;      // 18.52
user1.address.pincode = 411001;   // add deeper in

//Arrays of object
const products = [
  { id: 1, title: "Keyboard", price: 1200, inStock: true },
  { id: 2, title: "Mouse", price: 700, inStock: false },
  { id: 3, title: "Monitor", price: 9000, inStock: true },
];

products[0].title;          // "Keyboard"
products.length;            // 3


// map → transform each item, returns a NEW array of the same length
products.map(p => p.title);
// ["Keyboard", "Mouse", "Monitor"]

// filter → keep items that pass a test, returns a NEW shorter array
products.filter(p => p.inStock);
// [Keyboard object, Monitor object]

// find → the FIRST matching item itself (or undefined)
products.find(p => p.id === 2);
// { id: 2, title: "Mouse", ... }

// reduce → squash the list into one value
products.reduce((total, p) => total + p.price, 0);
// 10900
