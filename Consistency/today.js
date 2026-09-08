const numbers = [1, 2, 3, 4, 5];

// map — transform every item
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter — keep only matching items
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

const students = [
    { name: "Prajwol", score: 90 },
    { name: "Ram", score: 45 },
    { name: "Sita", score: 78 },
    { name: "Hari", score: 32 }
];
const names = students.map(n => n.name)
console.log(names)
const above = students.filter(std => std.score > 60);
console.log(above)