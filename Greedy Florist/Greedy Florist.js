function getMinimumCost(k, c) {
    // Sort prices descending to buy the most expensive flowers first
    c.sort((a, b) => b - a);

    let total = 0;
    for (let i = 0; i < c.length; i++) {
        // For each flower, how many times has the buyer bought previously?
        total += (Math.floor(i / k) + 1) * c[i];
    }
    return total;
}
