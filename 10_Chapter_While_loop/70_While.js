// A while loop repeats a block of code as long as its condition is true.
//
// Syntax:
// initialization;
// while (condition) {
//     code to repeat
//     update;
// }
//
// The condition is checked before each iteration. Make sure to update the
// variable used in the condition; otherwise, the loop may run forever.
//
// This loop prints the numbers 1 through 10:
let number = 1;

while (number <= 10) {
    console.log(number);
    number++;
}