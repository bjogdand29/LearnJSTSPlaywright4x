let environment = "Staging";   
let baseUrl = environment === "Production" ? "https://api.example.com" 
: "https://production.example.com";
console.log(baseUrl);  