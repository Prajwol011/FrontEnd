const decrement = document.querySelector("#decrement");
const increment = document.querySelector("#increment");
const reset = document.querySelector("#reset");
let count = 0;
const countElement = document.querySelector("#count");

decrement.addEventListener("click", function() {
    if(count > 0) {
        count --;
        countElement.textContent = `${count}`;
        countElement.style.color = count === 0 ? "red" : "green";
    }
});

increment.addEventListener("click", function() {
    count++;
    countElement.textContent = count;
    countElement.style.color = "green";
});

reset.addEventListener("click", function() {
    countElement.textContent = "0";
    count = 0;
    countElement.style.color = "red";

});