let cricketScores = [
    [180, 175],
    [210, 195],
    [165, 170],
    [200, 188]
];

for (let i = 0; i < cricketScores.length; i++) {

    let highest = cricketScores[i][0];

    for (let j = 1; j < cricketScores[i].length; j++) {

        if (cricketScores[i][j] > highest) {
            highest = cricketScores[i][j];
        }
    }

    console.log("Match " + (i + 1) + " Highest Score:", highest);
}