// A for loop has three parts: initialization, condition, and update.
// The condition is empty here, so JavaScript treats it as true.
// Because parmod keeps increasing and nothing stops the loop, this runs forever.
//
// Add a stopping condition so the loop ends after printing 0 through 10:
for (let parmod = 0; parmod <= 10; parmod++) {
    console.log(parmod);
}