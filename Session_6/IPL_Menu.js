const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

async function main() {

    let teams = [
        "Mumbai Indians",
        "Chennai Super Kings",
        "Royal Challengers Bengaluru"
    ];

    let choice = 0;

    while (choice !== 3) {

        console.log("\n--- IPL MENU ---");
        console.log("1. View Favorite IPL Teams");
        console.log("2. Add a New Team");
        console.log("3. Exit");

        choice = Number(await askQuestion("Enter your choice: "));

        if (choice === 1) {

            console.log("\nMy Favorite IPL Teams:");

            for (let team of teams) {
                console.log(team);
            }

        }
        else if (choice === 2) {

            let newTeam = await askQuestion("Enter new team name: ");

            teams.push(newTeam);

            console.log("Team added successfully!");

        }
        else if (choice === 3) {

            console.log("Exiting the program...");

        }
        else {

            console.log("Invalid choice!");

        }
    }

    rl.close();
}

main();