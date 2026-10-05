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

    let songs = [
        "Kesariya",
        "Tum Hi Ho",
        "Apna Bana Le"
    ];

    let randomSong = songs[Math.floor(Math.random() * songs.length)];

    let guess;

    do {
        guess = await askQuestion("Guess the song: ");

        if (guess.toLowerCase() === randomSong.toLowerCase()) {
            console.log("Correct! You guessed the song!");
        }
        else {
            console.log("Wrong guess! Try again.");
        }

    } while (guess.toLowerCase() !== randomSong.toLowerCase());

    rl.close();
}

main();