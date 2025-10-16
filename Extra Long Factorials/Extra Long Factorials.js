function extraLongFactorials(n) {
    // Write your code here
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    console.log(result.toString());
}
extraLongFactorials(25);
console.log(compareTriplets([1,2,3], [3,2,1]));
console.log(compareTriplets([5,6,7], [3,6,10]));
console.log(compareTriplets([17,28,30], [99,16,8]));