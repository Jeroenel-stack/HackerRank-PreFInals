function superDigit(n, k) {
    // Get sum of digits in the initial string n
    function digitSum(str) {
        return str.split('').reduce((a, c) => a + Number(c), 0);
    }

    // Start sum as sum of n's digits, multiplied by k
    let sum = digitSum(n) * k;

    // Recursively reduce until it's a single digit
    while (sum >= 10) {
        sum = digitSum(String(sum));
    }
    return sum;
}
