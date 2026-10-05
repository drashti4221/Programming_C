const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your favorite IPL team: ", function(team) {

    if (team === "Mumbai Indians") {
        console.log("Go Mumbai Indians!");
    }
    else if (team === "Chennai Super Kings") {
        console.log("Chennai Super Kings for the win!");
    }
    else if (team === "Royal Challengers Bengaluru") {
        console.log("Go RCB! Ee Sala Cup Namde!");
    }
    else if (team === "Kolkata Knight Riders") {
        console.log("Come on KKR!");
    }
    else if (team === "Rajasthan Royals") {
        console.log("Go Rajasthan Royals!");
    }
    else if (team === "Sunrisers Hyderabad") {
        console.log("Go Sunrisers Hyderabad!");
    }
    else if (team === "Delhi Capitals") {
        console.log("Go Delhi Capitals!");
    }
    else if (team === "Punjab Kings") {
        console.log("Go Punjab Kings!");
    }
    else if (team === "Lucknow Super Giants") {
        console.log("Go Lucknow Super Giants!");
    }
    else if (team === "Gujarat Titans") {
        console.log("Go Gujarat Titans!");
    }
    else {
        console.log("Team not found!");
    }

    rl.close();
});