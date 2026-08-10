//1. For Loop
// for(let i = 0; i<10;i++){
//     console.log("Hello World!"); //executed 10 times
// }

// console.log("Loop has ended")

//calculate sum of 1 to 5
let sum = 0;
for(let i = 1; i<=5; i++){
    sum = sum + i;
}
console.log("Sum = ",sum);
console.log("Loop has ended");

//2. While Loop
let i =1;
while(i<=5){
    console.log("i = ",i);
    i++;
}

//3. Do...While
let j=1;
do {
    console.log("j = ",j);
    j++;
} while (j<=5);

//4. for-of loop
let str = "JavaScript";

lenght = 0;
for(let i of str){ //iterator -> characters
    console.log("i = ", i);
    length ++;
}

console.log("Size = ", length);

//5. for-in loop
let obj = {
    name: "Prajwol",
    age: 24,
    city: "Kathmandu",
    ispass: true,
}

for(let key in obj){ //iterator -> keys
    console.log("Key = ", key, " Value = ", obj[key]);
}

