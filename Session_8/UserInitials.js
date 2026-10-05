function getUserInitials(fullName) {
    let names = fullName.split(" ");

    let initials = "";

    for (let name of names) {
        initials = initials + name[0];
    }

    return initials.toUpperCase();
}

let result = getUserInitials("Virat Kohli");

console.log("Initials:", result);