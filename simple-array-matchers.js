// ## length

// Given an array of numbers, write a function that returns the number of even numbers in the array using the length property.

function evenNum(num) {
  let len = []; // creating empty variable to store the array.
  for (let i = 0; i < num.length; i++) {
    // creating loop for the array
    if (num[i] % 2 === 0) {
      // checking if Reminder is 0 while dividing with 2.
      len.push(num[i]); // Pushing the result to the Empty Arrays
    }
  }
  //   console.log(len.length);
}
evenNum([2, 3, 4, 6, 5, 7, 78, 9, 11, 12, 15]);

// Write a function that takes an array of strings and returns the longest string in the array using the length property.

function longestVel(string) {
  let arr = []; // created an empty array to store the filter result arrays
  for (let i = 0; i < string.length; i++) {
    // created a loop to get all the value
    arr.push(string[i].length); // pushing the filter list to Empty array with each string length.
  }
  //   console.log(Math.max(...arr));
}
longestVel(["kunal", "love", "react", "webDeveloper"]);
