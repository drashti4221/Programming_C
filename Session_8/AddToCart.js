function addToCart(cart, productName) {
    cart.push(productName);

    console.log("Updated Cart:", cart);
}

let cart = ["Mobile", "Headphones"];

console.log("Before:", cart);

addToCart(cart, "Smart Watch");

console.log("After:", cart);