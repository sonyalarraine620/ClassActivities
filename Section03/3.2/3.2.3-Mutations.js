/*
  3.2.3-Mutation
  ========================
*/

// us 'let' to assign values to 3 variables

let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  loggedIn: false,
};
console.log("before mutation x = " + x + ", y =" + y + " and Z =" + z);
// reassign x, y, and z to FALSY values

x = null;
y = 0;
z = '';

// print x, y, and z

console.log("\n after mutation", x, y, z);

// us 'const' to assign values to 3 variables

const a = "name";
const b = [];
const c = {};

// print a, b, and c

console.log("\n before mutation a, b, and c are...", a, b, c);

// try to reassign a, b, and c to FALSY values

a = null;
b= false;
c = 0;

// using BRACKET NOTATION, assign a value to b

b[0] = 1;

console.log("b after mutation", b);
// using DOT NOTATION, assign a PROPERTY to c

c.prop = "true";

// using DOT NOTATION, assign a METHOD to c

c.greet = () => "Hello There";
console.log(c.greet());

// using BRACKET NOTATION, call the method in c

console.log(c["greet"]());

// Bracket notation is horrible, this is simpler...

console.log("\n simpler method call...", c.greet());
// print a, b, and c again
console.log(a, b, c);
