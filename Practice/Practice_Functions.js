// Qn 1> Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.

function countvowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0;

    for(let i = 0;i<str.length;i++){
        if (vowels.includes(str[i])){
            count ++;
        }
        
    }
    return count;
}

console.log(countvowels("JavaScript"));


//Qn 2> Create an arrow function to perforn the same task
const arrowfunc = (str) =>{
    let vowels1 = "aeiouAEIOU";
    let count = 0;

    for(let i=0;i<str.length;i++){
        if(vowels1.includes(str[i])){
            count ++;
            
        }
         
    }
   
    return count;
    
}

console.log(arrowfunc("I love coding in JavaScript"));


