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
const slug = title.toLowerCase().replaceAll(" ","-");
console.log(slug);
