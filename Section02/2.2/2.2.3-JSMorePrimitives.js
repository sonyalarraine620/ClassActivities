// Create a variable "timeOfDay" and assign it a string

let timeOfDay = "6 AM";

// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"

let greeting = "Good morning! It is " + timeOfDay;

// Print "greeting"

console.log(greeting);

// Create a new variable, but do not assign it a value

let evening ;

// Print the new variable and its type
// What type should we expect?

console.log(evening, typeof evening);
// expecting undefined
//typeof tells us variable as a string,

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
evening = null;

// Print the variable and its type again
// What type should we expect?
console.log(evening, typeof evening);
//null object

// Try to print a variable that does not exist
// What should we expect to print in the CLI?

console.log(afternoon);
//referenceerror & the code breaks. Nothing works after referenceError

// Print "greeting" again
// Will this line run?

console.log(greeting);
