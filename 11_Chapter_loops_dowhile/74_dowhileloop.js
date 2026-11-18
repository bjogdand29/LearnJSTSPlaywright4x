// A do...while loop runs its body first, then checks the condition.
// This means the body always runs at least once, even if the condition is false.
//
// Syntax:
// initialization;
// do {
//     code to repeat
//     update;
// } while (condition);
//
// Remember the semicolon after the while condition.
// Update the variable used by the condition so the loop eventually stops.
//
// This example prints the numbers 1 through 5:
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);

let retry = 0;
do {
    console.log("Executing the code....");
    console.log("Retrying the code...." + retry);
    retry++;
}while (retry < 3); 