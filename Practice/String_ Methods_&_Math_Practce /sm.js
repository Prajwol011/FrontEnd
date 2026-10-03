//1. Take the input " NEPAL " and turn it into "Nepal" using trim, toLowerCase, toUpperCase and slice.
const country = " NEPAL ";
const clean = country.trim()[0].toUpperCase() + country.trim().slice(1).toLowerCase();

console.log(clean); 

//2. Build a search filter for an array of 5 city names that works no matter how the user types the case.
const cities = ["Kathmandu", "Bhaktapur", "Lalitpur", "Pokhara", "Dhorpatan"];
const searchQuery = "  pOk ";

const query = searchQuery.trim().toLowerCase();

const filteredCities = cities.filter(city =>
  city.toLowerCase().includes(query)
);

console.log(filteredCities); 

//3. Convert "Learn JavaScript Fast" into the slug "learn-javascript-fast".
const title = "Learn JavaScript Fast";
const slug = title.trim().toLowerCase().replaceAll(" ","-");
console.log(slug);

//4. Write a function shorten(text, max) that cuts text to max characters and adds "..." only if the text was actually longer.
function shorten(text, max) {
  if (text.length > max) {
    return text.slice(0, max) + "...";
  }
  return text;
}

console.log(shorten("JavaScript", 5));
console.log(shorten("Hello", 10));
console.log(shorten("Nepal", 5));

//5. Write a function that checks whether a Nepali mobile number is plausible: after trimming, it should start with "98" or "97" and have 10 characters.
function isPlausible(number) {
  number = String(number).trim(); 

  return number.length === 10 && (number.startsWith("98") || number.startsWith("97"));
}

console.log(isPlausible(9861620357));   
console.log(isPlausible(98616203575));   
console.log(isPlausible(" 9741234567 ")); 


