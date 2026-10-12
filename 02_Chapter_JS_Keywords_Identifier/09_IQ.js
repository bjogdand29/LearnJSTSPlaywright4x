// Javascript identifies rules for naming variables, functions, and other identifiers. The rules are as follows:

let myVariable = 10; // Valid identifier
let _myVariable = 20; // Valid identifier
let $myVariable = 30; // Valid identifier
let myVariable2 = 40; // Valid identifier

// Invalid identifiers
let 2myVariable = 50; // Invalid identifier (cannot start with a number)
let my Variable = 60; // Invalid identifier (cannot contain spaces)
let my-Variable = 70; // Invalid identifier (cannot contain hyphens)    

let function=10; // Invalid identifier (cannot use reserved keywords)

let \u0061 = 10; // Valid identifier (can use Unicode escape sequences)
let \u{61} = 20; // Valid identifier (can use Unicode code point escape sequences)

let my@$myVariable = 30; // Invalid identifier (cannot use special characters except $ and _)   

//Camel Case: The first letter of the identifier is lowercase, and the first letter of each subsequent word is capitalized.
let firstName = "John"; // Valid identifier
let lastName = "Doe"; // Valid identifier
let myVariableName = "Hello"; // Valid identifier

//Pascal Case: The first letter of each word in the identifier is capitalized.
let FirstName = "John"; // Valid identifier
let LastName = "Doe"; // Valid identifier
let MyVariableName = "Hello"; // Valid identifier

//Snake Case: Words in the identifier are separated by underscores.
let first_name = "John"; // Valid identifier
let last_name = "Doe"; // Valid identifier
let my_variable_name = "Hello"; // Valid identifier

//Kebab Case: Words in the identifier are separated by hyphens. (Not valid in JavaScript)
let first-name = "John"; // Invalid identifier (cannot use hyphens)
let last-name = "Doe"; // Invalid identifier (cannot use hyphens)
let my-variable-name = "Hello"; // Invalid identifier (cannot use hyphens)                  

