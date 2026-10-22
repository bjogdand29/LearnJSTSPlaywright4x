let responseTime = 850;
let sla = 1000;
let testResult = responseTime < sla ? "Test Passed ✅" : "Test Failed ❌";
console.log(testResult); // Output: Test Passed 

//Template literals
let name = "Balaji";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Balaji and I am 30 years old.
