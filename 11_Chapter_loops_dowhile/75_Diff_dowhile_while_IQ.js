//Difference between while and do while loop
// A while loop checks the condition before executing the code block, so if the condition is false initially, the code block will not run at all. In contrast, a do...while loop executes the code block first and then checks the condition, ensuring that the code block runs at least once regardless of the condition's initial state. 
// Example of a while loop:
let number = 1;

while (number <= 10) {
    console.log(number);
    number++;
}

// Example of a do...while loop:
let retry = 0;
do {
    console.log("Executing the code....");
    console.log("Retrying the code...." + retry);
    retry++;
} while (retry < 3);    