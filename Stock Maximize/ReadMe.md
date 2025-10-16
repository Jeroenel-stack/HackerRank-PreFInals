Iterate backwards through the prices array:

Track the maximum price seen so far (maxPrice).
For each day (from last to first):

Update maxPrice if the current price is higher.
Add the difference between maxPrice and the current price to profit.
Return the total profit.

Summary:
For each day, assume you buy shares and sell them at the highest future price.
Sum the profit for all days and return the result.