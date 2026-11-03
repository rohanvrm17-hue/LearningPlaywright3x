function car(name){
    return `the name of the car is ${name}`;
}

console.log(car("BMW"));

//Arrow function

// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

const car1 = (name) => `the name of the car is ${name}`;    
console.log(car1("BMW"));   