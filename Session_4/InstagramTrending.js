let likes = 1200;
let comments = 250;
let shares = 60;

let isTrending = likes >= 1000 || (comments > 200 && shares >= 50);

console.log("Is the post trending?", isTrending);