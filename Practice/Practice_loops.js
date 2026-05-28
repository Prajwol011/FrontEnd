//qn1 print all even numbers from 0 to 100.

// for(let i = 0;i<=100;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }


//qn 2 create a game where yoy start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// const GameNumber = 27;


// let userNum = prompt("Guess a Number: ");

// while(userNum != GameNumber){
//     userNum = prompt("The number you entered is incorrect. Please try again! Guess a Number: ");

// }

// console.log("Conguratilations you have entered the right number");


const GameNum = 29;

let userNum = prompt("Guess a Number: ");
while(userNum != GameNum){
    if(userNum>GameNum){
        userNum = prompt("The number that you have entered is greater than the og number. please try again! Guess a Number: ");
    }
    if(userNum<GameNum){
        userNum = prompt("The number that you have entered is smaller than the og number. please try again! Guess a Number: ");
    }
}

console.log("Conguratilations you have entered the right number");


