const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", (input) => {
    const num = Number(input.trim());

    if (input.trim() === "" || !Number.isInteger(num)) {
        console.log("Please enter a valid integer.");
    } else if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }

    rl.close();
});