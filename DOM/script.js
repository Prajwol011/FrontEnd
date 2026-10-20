let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//    console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX, evt.clientY);
// };

// btn1.addEventListener("click", (evt) => {
//     console.log("button 1 was clicked - handeler1");
   
// });

// btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked - handler2");
// });

// const handler3 = () => {
//     console.log("button 1 was clicked - handler3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked - handler4");
// });

// btn1.removeEventListener("click", handler3);

let div = document.querySelector("div");

let currmode = "Light";
let body = document.querySelector("body");
let toggle = document.querySelector('#toggle');
toggle.addEventListener("click", () => {
    if(currmode === "Light"){
        currmode = "Dark";
        body.classList.add("Dark");
    } else {
        currmode = "Light";
        body.classList.remove("Dark");
    }

    console.log(currmode);  
})

const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
    console.log('Mouse entered the button!');
});
