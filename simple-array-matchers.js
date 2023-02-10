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
