function myFunction() {
    console.log("Welcome to JS");
    console.log("We are learning JS");
}

myFunction();

function Heroes(name) {
    //parameter -> input
    console.log(`My favourite hero is ${name}.`);
}
Heroes("SpiderMan"); //Argument

//default parameter
function welcome(user = "Guest"){
    console.log(`Welcome, ${user}`);
}
welcome();
welcome("Prajwol");

//Functions -> numbers, sum
function SumOfTwo(n1, n2) {
    s = n1+n2;
    return s;
}
let val = SumOfTwo(5, 4);
console.log(val);

//return
function addNumbers(a,b){
    //local variables -> scope
    return a+b;
}

let result = addNumbers(5,6);
console.log(`Sum of two numbers is ${result}`);

//arrow function(addition)
const add = (x,y) => {
    return x+y;
}
let add1 =  add(3,5);
console.log("The sum of two umbers is: ",add1);

//arrrow function (multiplication)
const multiplication = (p,q) => {
    return p*q;
}

let mul = multiplication(5,6);
console.log(`The multiplication of two numbers is ${mul}`);

//foreach loop in arrays
let arr = [1, 2, 3, 4, 5];

arr.forEach((val,arr) => {
    console.log(val,arr);
})

//map 
let heros = ["Batman", "Spiderman", "Ironman"];

let newarr = heros.map((val) => {
    return val;
});
console.log(newarr);

//filter
let num = [1,2,3,4,5,6,7,8,9,10];

let evenNum = num.filter((val) => {
    return val%2==0;
});
console.log(evenNum);

//reduce
const array = [1,2,3,40];

const output = array.reduce((prev,curr) => {
    if(prev>curr){
        return prev;
    }else{
        return curr;
    }
});
console.log(output);
