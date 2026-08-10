//strings

let str = "Prajwol Shrestha";
str.length;
console.log(str[0],str[1],str[2],str[3],str[4]);
console.log(str.trim());

//Template Literals
let SpecialString = `This is a template literals`;
console.log(typeof SpecialString);

let obj = {
    item: "pen",
    price: 20,
};

let output = `The cost of ${obj.item} is ${obj.price}Rs`;
console .log(output);

let strr = "0123456";
console.log(strr.slice(0,3)); //slice(startIndex, endIndex) - extracts a part of the string from startIndex to endIndex (not inclusive)

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); //joins str1 and str2 with a space in between

let str3 = "JavaScript is awesome";
console.log(str3.replaceAll("a","p")); //replace J with p using str.replace(searchVal, newVal)
 
let str4 = "ILoveJS";
console.log(str4.charAt(3));

const text = "Hello World";
console.log(text.slice(0, 5));      // "Hello"
console.log(text.slice(6));         // "World" (from position 6 to end)
console.log(text.slice(-5));        // "World" (last 5 characters)
console.log(text.slice(0, -6));     // "Hello" (everything except last 6)
