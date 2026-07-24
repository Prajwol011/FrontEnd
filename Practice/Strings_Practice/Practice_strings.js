//qn1 Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

let fullname = prompt("Enter your Fullname without any spaces: ");
let length = fullname.length;

let result = fullname.concat(length);
let username = "@".concat(result);

console.log(username);

