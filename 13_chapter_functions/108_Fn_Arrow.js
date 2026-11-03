function greet(name){

   return `Hello, ${name}`

}
console.log(greet("Rohan"));

const greet1 = function (name1){
   return `Hello, ${name1}`
}
console.log(greet1("Rohan"));

//Arrow function

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

const greet2 = (name2) => `Hello, ${name2}`
console.log(greet2("Rohan"))

