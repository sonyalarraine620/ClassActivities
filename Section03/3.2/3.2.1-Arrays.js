// create an Array using an Array literal
const kids = [Mike, Sam, Lily];

// access the 1st item in the Arra

kids[0];

// access the last item in the Array

kids[2];

// print the length of the Array

console.log(kids.length);

// use the length property to access the last item in the Array

console.log(kids[kids.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
for (let kid of kids) {
  console.log(kids);
};

