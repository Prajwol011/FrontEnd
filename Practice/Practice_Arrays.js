//qn 1 for a given array with marks of students -> [85,97,44,37,76,60] find the average marks of the entire class.

const marks = [85,97,44,37,76,60];

let sum = 0;
let avg;

for(let i = 0; i<marks.length;i++){
    sum = sum+marks[i];
}
console.log("Sum = ",sum);

avg = sum/marks.length;
console.log(`The average marks of students is ${avg}`);


//qn2 For a given array with prices of 5 items -> [250,645,300,900,50] All items have an offer of 10% OFF on them. change the array to store final price after applying offer

const items = [250,645,300,900,50];

let discount;
let finalPrice;

for(let i = 0;i<items.length;i++){
    discount = (10/100)*items[i];
    finalPrice = items[i]-discount;
    items[i] = finalPrice;
}
console.log(items)

//qn 3 Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end.

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(2,1,"Ola");
console.log("After removing Uber and adding ola in its place: ", companies);

companies.push("Amazon");
console.log(companies);





