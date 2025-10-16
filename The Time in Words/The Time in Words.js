function timeInWords(h, m) {
    const numbers = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four",
        "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"
    ];

    if (m == 0) return numbers[h] + " o' clock";
    if (m == 15) return "quarter past " + numbers[h];
    if (m == 30) return "half past " + numbers[h];
    if (m == 45) return "quarter to " + numbers[h + 1];
    if (m < 30) {
        return numbers[m] + " minute" + (m == 1 ? "" : "s") + " past " + numbers[h];
    } else {
        return numbers[60 - m] + " minute" + ((60 - m) == 1 ? "" : "s") + " to " + numbers[h + 1];
    }
}
// Example usage:
// console.log(timeInWords(5, 0)); // Output: "five o' clock"
// console.log(timeInWords(5, 1)); // Output: "one minute past five"
// console.log(timeInWords(5, 10)); // Output: "ten minutes past five"
// console.log(timeInWords(5, 15)); // Output: "quarter past five"
// console.log(timeInWords(5, 30)); // Output: "half past five"
// console.log(timeInWords(5, 40)); // Output: "twenty minutes to six"
// console.log(timeInWords(5, 45)); // Output: "quarter to six"
// console.log(timeInWords(5, 59)); // Output: "one minute to six"