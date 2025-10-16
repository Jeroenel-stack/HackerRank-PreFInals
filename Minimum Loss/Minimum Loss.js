function minimumLoss(price) {
    // Store price with their original indices
    let pricesWithIndex = price.map((p, i) => [p, i]);
    // Sort prices in ascending order
    pricesWithIndex.sort((a, b) => a[0] - b[0]);
    let minLoss = Infinity;

    // Compare only to prices with larger index (sold after bought)
    for (let i = 1; i < pricesWithIndex.length; i++) {
        const higherPrice = pricesWithIndex[i][0];
        const higherIndex = pricesWithIndex[i][1];

        const lowerPrice = pricesWithIndex[i - 1][0];
        const lowerIndex = pricesWithIndex[i - 1][1];

        // Buy at higherPrice (must have smaller index), sell at lowerPrice (must have larger index)
        if (higherIndex < lowerIndex) {
            minLoss = Math.min(minLoss, higherPrice - lowerPrice);
        }
    }
    return minLoss;
}
