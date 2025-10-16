function candies(n, arr) {
    let candies = Array(n).fill(1);

    // Left to right: if right child has higher rating, give more candies than left
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i-1]) {
            candies[i] = candies[i-1] + 1;
        }
    }

    // Right to left: if left child has higher rating, ensure more candies than right
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i+1]) {
            candies[i] = Math.max(candies[i], candies[i+1] + 1);
        }
    }

    // Sum up candies to return answer
    return candies.reduce((a, b) => a + b, 0);
}
