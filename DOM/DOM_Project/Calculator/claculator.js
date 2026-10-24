const btn_number = document.querySelectorAll(".number");
const btn_operator = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const back = document.querySelector("#back");

let firstNumber = "";
let operator = "";
let secondNumber = "";


btn_number.forEach(btn => {
    btn.addEventListener("click", function() {
        if(operator === "") {
            firstNumber += this.dataset.value;
            display.textContent = firstNumber;
        } else {
            secondNumber += this.dataset.value;
            display.textContent = secondNumber;
        }
    });
});

clear.addEventListener("click", function() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    display.textContent = "0";
});

btn_operator.forEach(oper => {
    oper.addEventListener("click", function() {
        if(firstNumber === "") return;
        operator = this.dataset.value;
        display.textContent = firstNumber + operator;
    });
});

back.addEventListener("click", function() {
    if(operator === "") {
        firstNumber = firstNumber.slice(0,-1);
        display.textContent = firstNumber;
    } else {
        secondNumber = secondNumber.slice(0,-1);
        display.textContent = secondNumber;
    }
});

equals.addEventListener("click", function() {
    if(firstNumber === "" || operator === "" || secondNumber === "") return;
    
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result = 0;

    if(operator === "+") result = num1 + num2;
    if(operator === "-") result = num1 - num2;
    if(operator === "*") result = num1 * num2;
    if(operator === "/") result = num1 / num2;

    display.textContent = result;
    firstNumber = String(result);
    operator = "";
    secondNumber = "";
});