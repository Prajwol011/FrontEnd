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