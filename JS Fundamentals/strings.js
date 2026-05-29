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
