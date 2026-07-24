// Qn 1> Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.

function countvowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }

    }
    return count;
}

console.log(countvowels("JavaScript"));


//Qn 2> Create an arrow function to perforn the same task
const arrowfunc = (str) => {
    let vowels1 = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels1.includes(str[i])) {
            count++;

        }

    }

    return count;

}

console.log(arrowfunc("I love coding in JavaScript"));


//Qn 3 -> For a given array of nymbers, print the square of each value using foreach loop.

let arr = [10, 20, 30, 40, 50];

arr.forEach((val) => {
    console.log(val * val);
});

//Qn 4 -> We are given array of marks of students. Filter out of the marks of students that stored 90+.

const marks = [90, 28, 91, 96, 99, 20, 34, 55, 67];

let newmarks = marks.filter((val) => {
    if(val>90){
        return val;
    }
});
console.log(newmarks);

//Qn 5 -> Take a number n as input from user. Creste an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number: ");
let arr1 = [];
for(let i =1; i<=n;i++){
    arr1[i-1]=i;
}
console.log(arr1);
const output = arr1.reduce((prev,curr) =>{
    return prev + curr;
})
console.log("Sum = ",output);
const product = arr1.reduce((prev,curr) => {
    return prev*curr;
})
console.log("Product = ",product);

// Challenge 1: The Price Doubler (.map)
// Imagine your delivery app introduces a surge price during heavy rain in Kathmandu. You need to create a new array where every item's price is doubled.

// Your Task: 1. Use .map() on the currentPrices array.
// 2. Name your callback parameter something meaningful (like price).
// 3. Return the price multiplied by 2.
// 4. Log your new surgePrices array to the console.

let currentPrices = [120, 150, 200, 350];
let price = currentPrices.map(doubled => {
    return doubled*2;
})
console.log(`The new sugePrices are ${price}`);

// Challenge 2: The Spicy Finder (.filter)
// You are building a food filter for a restaurant website. A user clicks a button to see only items that have the word "Spicy" in their name.
// Your Task
// Use .filter() on the menu array.
// Use .includes() inside your condition to check if the dish string contains "Spicy".
// Save the result in a variable called spicyOptions and log it.

let menu = ["Spicy MoMo", "Veg Pizza", "Spicy Chowmin", "Crunchy Burger"];
let spicyOptions = menu.filter(filtered => {
    return filtered.includes("Spicy");
})
console.log("Spicy Items: ",spicyOptions);

// Challenge 3: Making HTML Lists (.map)
// This is exactly what you will do in React! You have an array of daily tasks, and you want to wrap each one inside HTML <li> (list item) tags so they can be rendered on a web page.
// Your Task:
// Use .map() to transform each string in todoList.
// Use a template literal (backticks `) to wrap the item inside <li> and </li>.
// Store the result in a variable called htmlTasks and log it.

let todoList = ["Buy groceries", "Clean the room", "Practice JavaScript"];
let items = todoList.map(item => {
    return `<li>${item}</li>`
});
console.log(items);

//Scenario 1: The React Render Test (.map)
// You have an array of recipe objects. You need to transform this data into strings that look like titles with their cook times.

const myRecipes = [
  { title: "Momo", time: 30 },
  { title: "Chowmin", time: 20 }
];
const array = myRecipes.map(recipe => {
    return `${recipe.title} takes ${recipe.time} minutes`;
})
console.log(array);

//cenario 2: The Delete Button Test (.filter)
// A user clicks "Delete" on the dish with the ID of 2. You need to filter out that dish completely.

const originalMenu = [
  { id: 1, name: "Veg Pizza" },
  { id: 2, name: "Chicken Burger" },
  { id: 3, name: "Paneer Butter" }
];
let updatedMenue = originalMenu.filter(menue => {
    return menue.id != 2;
})
console.log(updatedMenue)