// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function example(param1, param2, ...param3) {
console.log(param1);
console.log(param2);
return param1 + param2
};

// invoke the function and pass in two numbers
example(115,22);
// invoke the function and pass in more than two numbers
example(1, 2, 3);
// invoke the function and pass in only one number
example(1);
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function example(param1, param2, ...param3) {
return param1 + param2;
};
example(1 , 2, 3, 4, 5, 6, 7);
// again, invoke the function and pass in more than two numbers
