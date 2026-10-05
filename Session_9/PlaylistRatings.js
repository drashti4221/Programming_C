let playlistRatings = [
    [4, 5, 4, 3, 5],
    [5, 4, 5, 5, 4],
    [3, 4, 4, 5, 3]
];

console.log("Ratings of Second Playlist:");

for (let i = 0; i < playlistRatings[1].length; i++) {
    console.log("Day " + (i + 1) + ":", playlistRatings[1][i]);
}