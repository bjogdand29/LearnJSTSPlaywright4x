console.log("" == 0); // Output: true
console.log("" === 0); // Output: false

console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false

console.log(NaN == NaN); // Output: false
console.log(NaN === NaN); // Output: false

console.log(Infinity == Infinity);  // Output: true
console.log(Infinity === Infinity); // Output: true

console.log(-Infinity == -Infinity);  // Output: true
console.log(-Infinity === -Infinity); // Output: true

console.log(0 == false); // Output: true
console.log(0 === false); // Output: false

console.log(1 == true); // Output: true
console.log(1 === true); // Output: false

console.log("0" == false); // Output: true
console.log("0" === false); // Output: false

console.log("1" == true); // Output: true
console.log("1" === true); // Output: false 

//transitive property of equality
console.log(null == undefined); // Output: true
console.log(undefined == 0); // Output: false
console.log(null == 0); // Output: false

console.log(NaN == NaN); // Output: false
console.log(NaN != NaN); // Output: true

console.log(Infinity == Infinity);  // Output: true
console.log(Infinity != Infinity);  // Output: false

console.log(-Infinity == -Infinity);  // Output: true
console.log(-Infinity != -Infinity);  // Output: false 
