//Simple Ternary Operator
// Age > 18 - Go goa , age > 25 - Go Goa and drink also
let age =  26;
let is_balajiEnjoy = age > 18 ? "Go Goa" : "No Goa";
console.log(is_balajiEnjoy);
console.log(`Balaji you can ${is_balajiEnjoy}`);

//Nested Ternary Operator
age = 26
let is_balajiEnjoy_Drink= age > 18 ? (age > 24 ? "Go Goa & Drink Also" : "No drink just travel goa") 
: "No Goa";

console.log(is_balajiEnjoy_Drink);
console.log(`Balaji you can ${is_balajiEnjoy_Drink}`);
