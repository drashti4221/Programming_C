const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", function(input) {

    let age = Number(input);

    if (age >= 18) {
        console.log("Eligible for Driving License");
    }

    if (age >= 21) {
        console.log("Eligible for Credit Card");
    }

    if (age >= 25) {
        console.log("Eligible for Car Rental");
    }

    rl.close();
});