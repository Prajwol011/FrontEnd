const title = document.querySelector("#title");
const btn = document.querySelector("#btn");
const para = document.querySelector("#counter");

let clicked = false;
let count = 0;

btn.addEventListener("click", function () {
    if (clicked === false) {
        title.textContent = "You clicked me!";
        btn.textContent = "Click again";
        clicked = true;
    } else {
        title.textContent = "Hello World";
        btn.textContent = "Click Me";
        clicked = false;
    }

    count++;
    para.textContent = `You have clicked ${count} times`;
});