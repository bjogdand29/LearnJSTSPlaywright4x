let status = 0;
console.log(typeof status);

switch (status) {
    case false:
        console.log("Falsed Matched");
        break;
    case 0:
        console.log("0 is matched");
        break;
    default:
        console.log("Status is not recognized.");
}

//Switch is using strict comparison.ß