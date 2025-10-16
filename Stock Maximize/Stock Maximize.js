function stockmax(prices) {
    let n = prices.length;
    let maxPrice = 0;
    let profit = 0;
    for (let i = n - 1; i >= 0; i--) {
        maxPrice = Math.max(maxPrice, prices[i]);
        profit += maxPrice - prices[i];
    }
    return profit;
}
