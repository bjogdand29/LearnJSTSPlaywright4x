// Interview question: What does this code print, and why?
// Pay attention to switch (true), the order of the cases, and fall-through.
let testScore = 85;

let result = "";

switch (true) {
    case testScore >= 90:
        result = "A";
        break;
    case testScore >= 80:
        result = "B";
    case testScore >= 70:
        result += "+";
        break;
    default:
        result = "Needs improvement";
}

console.log(result);
