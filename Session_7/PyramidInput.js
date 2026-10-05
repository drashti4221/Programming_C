const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of rows: ", function(input) {

    let rows = Number(input);

    for (let i = 1; i <= rows; i++) {

        for (let j = 1; j <= rows - i; j++) {
            process.stdout.write(" ");
        }

        for (let j = 1; j <= (2 * i - 1); j++) {
            process.stdout.write("*");
        }

        console.log();
    }

    rl.close();
});