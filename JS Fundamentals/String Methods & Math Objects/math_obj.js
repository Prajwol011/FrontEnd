// 1. Math.random()
// Math.random() gives you a random decimal number from 0 up to, but never including, 1. Every call gives a different number.
console.log(Math.random()); // 0.7341928... (different every time)
console.log(Math.random()); // 0.0192834...

// 2. Math.floor()
// Math.floor() rounds a number down to the nearest whole number. It always goes down, not to the nearest value.
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4
console.log(Math.floor(-4.2)); // -5 (down means more negative)

// 3. The Most Important Pattern: A Random Whole Number
// To get a random whole number, you multiply Math.random() by how many options you want and then floor the result:
// Random number from 0 to 9 (10 possible values)
const num = Math.floor(Math.random() * 10);

// Dice roll: 1 to 6
const dice = Math.floor(Math.random() * 6) + 1;
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 6));     // dice
console.log(randomInt(100, 999)); // random 3-digit number

// 4. Picking a Random Item from an Array
// This is the most common real use. A "quote of the day" button, a random banner image, or a random greeting all work this way. You use the array's length as the multiplier, so it keeps working even when you add more items:
const quotes = [
  "Practice every day.",
  "Small steps lead to big results.",
  "Build projects, not just tutorials."
];
const randomIndex = Math.floor(Math.random() * quotes.length);
console.log(quotes[randomIndex]);

// 5. Math.round(), Math.ceil()
// Math.round() rounds to the nearest whole number, so .5 and above goes up and below .5 goes down. Math.ceil() always rounds up, the opposite of floor.
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.floor(4.9)); // 4

// Math.ceil() is the one you need for pagination. If you have 25 products and show 10 per page, you need 3 pages, not 2.5:
const totalPages = Math.ceil(25 / 10);
console.log(totalPages); // 3

//Math.round() is useful for percentages and discounts, for example when you show "Rs. 1,499 (23% off)":
const original = 2000;
const sale = 1540;
const discount = Math.round(((original - sale) / original) * 100);
console.log(discount); // 23

//6. Math.max() and Math.min()
// These return the largest or smallest of the numbers you give them. To use them with an array, add the spread operator (...) in front of the array so its items are passed in one by one:
console.log(Math.max(3, 9, 5)); // 9

const prices = [1200, 450, 3000, 800];
console.log(Math.max(...prices)); // 3000 (highest price)
console.log(Math.min(...prices)); // 450 (lowest price)

const random = Math.floor(Math.random() * 10) + 1;
console.log(random);

