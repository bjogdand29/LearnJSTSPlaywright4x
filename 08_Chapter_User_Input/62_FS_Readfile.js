const data = require("fs").readFileSync(0, "utf8");
const input = data.trim();
const number = Number(input);

if (input.trim() === "" || Number.isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    console.log(`You entered: ${number}`);
}

