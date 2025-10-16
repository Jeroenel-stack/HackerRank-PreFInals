Pair each price with its original index.

Sort the price-index pairs by price in ascending order.

For each adjacent pair in the sorted list:

Let higherPrice and lowerPrice be the two prices.
Let higherIndex and lowerIndex be their original indices.
If higherIndex < lowerIndex (buy before sell), compute the loss (higherPrice - lowerPrice).
Track the minimum such loss.
Return the minimum loss found.