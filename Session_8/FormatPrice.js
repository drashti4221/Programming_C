function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
}

console.log("Mobile:", formatPrice(1599));
console.log("Laptop:", formatPrice(54999));
console.log("Headphones:", formatPrice(2499));
