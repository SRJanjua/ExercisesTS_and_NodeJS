//Q22.
//Intentional Error
var numbers = [1, 2, 3, 4, 5];
// Producing an index error
var index = 6; // Incorrect index (out of range)
console.log("Generating Error, on purpose " + numbers[index]);
// Correcting the error
index = 2; // Correct index
console.log("Valid index number " + numbers[index]);
