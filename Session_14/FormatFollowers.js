function formatFollowersCount(count) {

    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + "M";
    }

    if (count >= 1000) {
        return (count / 1000).toFixed(1) + "K";
    }
    return count.toString();
}

console.log(formatFollowersCount(1500));
console.log(formatFollowersCount(1200000));
console.log(formatFollowersCount(850));