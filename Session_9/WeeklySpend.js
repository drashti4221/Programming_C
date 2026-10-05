function calculateAverageSpend(orderAmounts) {

    let total = 0;

    for (let i = 0; i < orderAmounts.length; i++) {
        total = total + orderAmounts[i];
    }

    let average = total / orderAmounts.length;

    return average;
}

let weeklyOrders = [250, 400, 300, 500, 350, 450, 200];

let result = calculateAverageSpend(weeklyOrders);

console.log("Average Weekly Spend: ₹" + result);