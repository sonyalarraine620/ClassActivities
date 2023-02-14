const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");
// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(array, duplicatedValues){
  let firstInstance = array.indexOf(duplicatedValues);
  let lastInstance = array.lastIndexOf(duplicatedValues);

  while (firstInstance !== lastInstance) {
    array.splice(lastInstance, 1);
    lastInstance = array.lastIndexOf(duplicatedValues);
  }
  return array;
}

let singleAList = removeDuplicates(arr, "a");
let singleB = removeDuplicates(arr, "b");
let singleC = removeDuplicates(arr, "c");
