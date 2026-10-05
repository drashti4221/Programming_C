const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter meal time: ", function(meal) {

    switch (meal.toLowerCase()) {
        case "breakfast":
            console.log("Try some Masala Dosa!");
            break;

        case "lunch":
            console.log("Try some Biryani!");
            break;

        case "dinner":
            console.log("Try some Paneer Butter Masala!");
            break;

        case "snack":
            console.log("Try some Samosa!");
            break;

        default:
            console.log("Try some fruits!");
    }

    rl.close();
});