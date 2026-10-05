function increaseFollowersByValue(followers) {
    followers = followers + 1000;

    console.log("Inside By Value:", followers);
}

function increaseFollowersByReference(user) {
    user.followers = user.followers + 1000;

    console.log("Inside By Reference:", user.followers);
}

let followers = 5000;

console.log("Before By Value:", followers);

increaseFollowersByValue(followers);

console.log("After By Value:", followers);

let user = {
    followers: 5000
};

console.log("Before By Reference:", user.followers);

increaseFollowersByReference(user);

console.log("After By Reference:", user.followers);