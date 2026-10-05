function calculateFinalPrice(productPrice, discountPercentage, isMember) {
    let discount = productPrice * discountPercentage / 100;
    let finalPrice = productPrice - discount;

    if (isMember) {
        finalPrice = finalPrice - (finalPrice * 5 / 100);
    }

    return finalPrice;
}

let price = calculateFinalPrice(2000, 10, true);

console.log("Final Price:", price);