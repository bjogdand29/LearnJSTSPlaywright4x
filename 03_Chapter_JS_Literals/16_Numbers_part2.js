//Numeric separators

let largeNumber = 1_000_000; // Numeric Literal with separators
console.log(largeNumber); // Output: 1000000
console.log(typeof largeNumber); // Output: number

let anotherLargeNumber = 123_456_789; // Numeric Literal with separators
console.log(anotherLargeNumber); // Output: 123456789
console.log(typeof anotherLargeNumber); // Output: number  


//bigint
let bigIntNum = 1234567890123456789012345678901234567890n; //BigInt Literal
console.log(bigIntNum); // Output: 1234567890123456789012345678901234567890n
console.log(typeof bigIntNum); // Output: bigint 

let bigIntNum2 = BigInt(1234567890123456789012345678901234567890n); //BigInt Literal
//For Automation purposes, we can use BigInt() constructor to create BigInt values from numeric literals or strings.
console.log(bigIntNum2); // Output: 1234567890123456789012345678901234567890n
console.log(typeof bigIntNum2); // Output: bigint   