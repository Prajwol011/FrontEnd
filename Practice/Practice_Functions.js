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



