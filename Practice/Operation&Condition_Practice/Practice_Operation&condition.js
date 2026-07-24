// Get user to input a number using prompt("Enter a number: "). Check if the number is a multiple of 5 or not.

let number = prompt("Enter a number: ");
console.log(number);

if (number % 5 == 0){
    console.log(number,"is multiple of 5");
}else{
    console.log(number,"is not multiple of 5");
}