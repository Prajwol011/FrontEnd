//qn 1 for a given array with marks of students -> [85,97,44,37,76,60] find the average marks of the entire class.

const marks = [85,97,44,37,76,60];

let sum = 0;
let avg;

for(let i = 0; i<marks.length;i++){
    sum = sum+marks[i];
}
console.log("Sum = ",sum);

avg = sum/marks.length;
console.log(`The average marks of students is ${avg}`);


//qn2 For a given array with prices of 5 items -> [250,645,300,900,50] All items have an offer of 10% OFF on them. change the array to store final price after applying offer

const items = [250,645,300,900,50];

let discount;
let finalPrice;

for(let i = 0;i<items.length;i++){
    discount = (10/100)*items[i];
    finalPrice = items[i]-discount;
    items[i] = finalPrice;
}
console.log(items)

//qn 3 Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end.

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(2,1,"Ola");
console.log("After removing Uber and adding ola in its place: ", companies);

companies.push("Amazon");
console.log(companies);

//Challenge 1: The Out-of-Stock Fixer
// A local café has an array of available bakery items. However, they just ran out of "Donut" and need to replace it with "Croissant" immediately.

// Your Task: 1. Find which index "Donut" is sitting at.
// 2. Directly modify that specific index to overwrite it with "Croissant".
// 3. Log the updated array to the console.

let bakeryItems = ["Muffin", "Donut", "Cookie", "Scone"];

bakeryItems.splice(1,1,"Ceoissant");
console.log("After replacing Donut with Croissant we get: ",bakeryItems);

// Challenge 2: The Price Calculator
// You have an array tracking the price of various street food plates in rupees. You want to know how much it would cost if a customer ordered one of everything.
// Your Task:
// Create a variable called totalBill and set it to 0.
// Use a for...of loop to go through the prices array.
// Inside the loop, add each price to your totalBill.
// After the loop finishes, log a message like: "Total cost is: X rupees".

let prices = [150, 220, 90, 300, 120];
let totalBill = 0;

for(let i of prices){
    console.log(i);
    totalBill = totalBill+i;
}
console.log(`Total cost is: ${totalBill} rupees`)

// Challenge 3: Dynamic Greeting Finder
// Imagine you are building a social media dashboard. You want to print out a special custom alert for the very last user who signed up, but the list of users changes constantly.
// Your Task:
// Dynamically access the last item in the newUsers array using .length - 1 (do not hardcode index 3).
// Store that last name in a variable named latestUser.
// Log the message: "Welcome to our newest member, [name]!".

let newUsers = ["Aayush", "Sita", "Niranjan", "Pooja"];
let latestUser = newUsers[newUsers.length-1];

console.log("Welcome to our newest member, ",latestUser,"!");

// Challenge 4: The Selective Index Printer
// You have a list of tourist destinations around the Kathmandu Valley. Your boss wants a clean report, but they want to see the index number alongside each place so they can sort them later.
// Your Task:
// Write a classic for loop (using let i = 0) to loop through the array.
// Inside the loop, log a string formatted exactly like this: "Destination #0 is Bhaktapur", "Destination #1 is Patan", etc.

let places = ["Bhaktapur", "Patan", "Kirtipur", "Nagarkot"];


for(let i = 0;i<places.length;i++){
    console.log(`Destination #${i} is ${places[i]}`); 
}

