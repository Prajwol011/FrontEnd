//1.  Trim
const email = "  ram@gmail.com  ";
console.log(email.trim()); // "ram@gmail.com"

//2. toUppercase and toLowercase
const city = "Kathmandu";
console.log(city.toUpperCase()); // "KATHMANDU"
console.log(city.toLowerCase()); // "kathmandu"

//2.1 Case-insensitive comparison
const input = "KATHMANDU";
console.log(input.toLowerCase() === city.toLowerCase()); // true

const word = "pokhara";
const capitalized = word[0].toUpperCase() + word.slice(1);
console.log(capitalized); // "Pokhara"

//3. includes
const title = "Samsung Galaxy S24";

console.log(title.includes("Galaxy")); // true
console.log(title.includes("galaxy")); // false (case matters)

//3.1 Proper search: lowercase both sides
const query = "GALAXY";
console.log(title.toLowerCase().includes(query.toLowerCase())); // true

//3.2 real product search
const products = ["Samsung Galaxy S24", "iPhone 15", "Xiaomi Redmi Note 13"];
const query1 = "redmi";

const results = products.filter(p =>
  p.toLowerCase().includes(query1.toLowerCase())
);
console.log(results); // ["Xiaomi Redmi Note 13"]

//4. Slice
const text = "JavaScript";

console.log(text.slice(0, 4));  // "Java"
console.log(text.slice(4));     // "Script"
console.log(text.slice(-6));    // "Script" (last 6 characters)

//5. Replace
const msg = "I like React. React is fun.";

console.log(msg.replace("React", "Vue"));     // "I like Vue. React is fun."
console.log(msg.replaceAll("React", "Vue"));  // "I like Vue. Vue is fun."

//5.1 URL slugs
const title1 = "My First Blog Post";
const slug = title1.toLowerCase().replaceAll(" ", "-");
console.log(slug); // "my-first-blog-post"

const phone = "+977-9812345678";
console.log(phone.replace("-", "")); // "+9779812345678"





