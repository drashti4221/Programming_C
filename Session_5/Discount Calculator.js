const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter total cart amount: ", function(input) {

    let amount = Number(input);
    let discount = 0;

    if (amount > 2000) {
        if (amount > 2000) {
            discount = 20;
        }
    }
    else if (amount > 1000) {
        if (amount > 1000) {
            discount = 10;
        }
    }
    else {
        discount = 0;
    }

    let discountAmount = amount * discount / 100;
    let finalAmount = amount - discountAmount;

    console.log("Cart Amount:", amount);
    console.log("Discount:", discount + "%");
    console.log("Final Amount to Pay:", finalAmount);

    rl.close();
});