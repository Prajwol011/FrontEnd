// ARRAYS
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// OBJECTS
const user = { name: "Prajwol", age: 19 };
const extra = { city: "Kathmandu", country: "Nepal" };

const fullUser = { ...user, ...extra };
console.log(fullUser); // { name, age, city, country all together }

// UPDATE one property without changing the rest
const updatedUser = { ...user, age: 20 };
console.log(updatedUser); // { name: "Prajwol", age: 20 }