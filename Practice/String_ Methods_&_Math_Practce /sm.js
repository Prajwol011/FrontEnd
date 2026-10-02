//1. Take the input " NEPAL " and turn it into "Nepal" using trim, toLowerCase, toUpperCase and slice.

const country = " NEPAL ";
const clean = country.trim()[0].toUpperCase() + country.trim().slice(1).toLowerCase();

console.log(clean); 