//Q1. Generate a random number between 1 and 100 and print it.
console.log(Math.floor(Math.random() * 100 + 1));

//Q2. Generate a random number between 1 and 6 (like a dice roll) and print a message like "You rolled a 4"
const dice = Math.floor(Math.random() * 6 + 1);
console.log(`You rolled a ${dice}`);