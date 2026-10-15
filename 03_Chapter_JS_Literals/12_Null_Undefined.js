//Null vs Undefined in JavaScript
// 1. Null: It is an assignment value that represents the intentional absence of any object value. It is explicitly assigned to a variable to indicate that it has no value.
let nullValue = null; //Null Literal

// 2. Undefined: It is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.
let undefinedValue; //Undefined Literal (implicitly undefined)

//Typeof Null and Undefined in JavaScript
console.log(typeof nullValue); //object (this is a known quirk in JavaScript)
console.log(typeof undefinedValue); //undefined

//Comparison between Null and Undefined
console.log(nullValue == undefinedValue); //true (loose equality)
console.log(nullValue === undefinedValue); //false (strict equality)  

//Difference between Null and Undefined
// 1. Null is an assignment value, while Undefined is a type itself.
// 2. Null represents the intentional absence of any object value, while Undefined indicates that a variable has been declared but has not yet been assigned a value.
// 3. Null is explicitly assigned to a variable, while Undefined is automatically assigned by JavaScript when a variable is declared but not initialized. 
