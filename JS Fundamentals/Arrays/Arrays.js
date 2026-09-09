let marks = [90, 80, 70, 60, 50];
console.log(marks);
console.log(marks.length);

let heroes = ["sipderman", "batman", "ironman", 'thor', "hulk", "captain america"];
console.log(heroes);

//for loop
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//for of
let cities = ["kathmandu", "bhaktapur", "lalitpur", "pokhara", "lumbani"];
for(let city of cities){
    console.log(city.toUpperCase());
}

//push
let Fooditems = ["MoMo", "Pizza", "Burger", "Pasta", "Keema Noodels"];
console.log(Fooditems);
Fooditems.push("Chowmin");
console.log(Fooditems);

//pop
let deleteItems = Fooditems.pop();
console.log(Fooditems);
console.log("Popped Item is: ",deleteItems);


//deleting from the middle
// Start at index 2, delete 1 item
let deleted = Fooditems.splice(2, 1); 

console.log(Fooditems); 
// Output: ["MoMo", "Pizza", "Pasta", "Keema Noodels"]

console.log("Deleted item:", deleted); 
// Output: ["Burger"] (Splice returns an array of the deleted items!)

//inserting into the middle
// Start at index 2, delete 0 items, insert "Chowmin"
Fooditems.splice(2, 0, "Chowmin");

console.log(Fooditems);
// Output: ["MoMo", "Pizza", "Chowmin", "Burger", "Pasta", "Keema Noodels"]

//replacing in the middle
// Start at index 2, delete 1 item ("Burger"), and insert "Sausage"
Fooditems.splice(2, 1, "Sausage");

console.log(Fooditems);
// Output: ["MoMo", "Pizza", "Sausage", "Pasta", "Keema Noodels"]

//tostring()
console.log(Fooditems.toString());
console.log(Fooditems);

//concat
let marvelHeroes = ["Ironman", "Thor", "Captain America"];
let dcHeroes = ["Superman", "Wonder Women", "Batman"];

let heroes1 = marvelHeroes.concat(dcHeroes);
console.log(heroes1);

//unshift or shift
let val = marvelHeroes.shift();
console.log("Deleted: ",val);

//reduce
const arr = [1,2,3,40];
const output = arr.reduce((prev,curr) => {
    return prev+curr;
});
console.log(output);

const students = [
    { name: "Prajwol", score: 90 },
    { name: "Ram", score: 45 },
    { name: "Sita", score: 78 },
    { name: "Hari", score: 32 }
];
const result = students.map((res) => {
    return `${res.name} scored ${res.score}`
}) 
console.log(result)

const products = [
    { name: "phone", price: 20000, inStock: true },
    { name: "laptop", price: 80000, inStock: false },
    { name: "watch", price: 5000, inStock: true },
    { name: "tablet", price: 40000, inStock: false },
    { name: "earbuds", price: 3000, inStock: true }
];
const filtered = products.filter((prod) => prod.inStock);
const filtered2 = products.filter((prod2) => prod2.price>10000);
const filtered3 = products.filter((prod3) => prod3.inStock && prod3.price<10000);

console.log(filtered);
console.log(filtered2);
console.log(filtered3);

const products1 = [
    { name: "phone", price: 20000, inStock: true },
    { name: "laptop", price: 80000, inStock: false },
    { name: "watch", price: 5000, inStock: true },
    { name: "tablet", price: 40000, inStock: false },
    { name: "earbuds", price: 3000, inStock: true }
];
const filtered_final = products1.filter(prod => prod.inStock).map(prod => prod.name);
console.log(filtered_final);