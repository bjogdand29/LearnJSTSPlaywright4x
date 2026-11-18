let num = prompt ("Enter a number");
num = Number(num); //Convert string to number

if (num % 2 === 0) {
    console.log(num + "Is Even");
} else{
    console.log(num +"Is Odd");

}

//Showing issue because the prompt User input is support only in browser.