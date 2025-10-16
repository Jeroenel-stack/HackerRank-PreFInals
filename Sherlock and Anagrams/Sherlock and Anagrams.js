function sherlockAndAnagrams(s) {
    // Write your code here
    let count = 0; // Initialize the count of anagram pairs.
    const anagramDict = {}; // Create a dictionary to store sorted substrings.

    for (let length = 1; length <= s.length; length++) {
        // Iterate through different substring lengths.
        for (let startIndex = 0; startIndex <= s.length - length; startIndex++) {
            // Extract a substring of the given length.
            const substring = s.substr(startIndex, length);

            // Sort the characters in the substring to identify anagrams.
            const sortedSubstring = [...substring].sort().join('');

            if (!anagramDict[sortedSubstring]) {
                anagramDict[sortedSubstring] = 1; // Initialize if not seen before.
            } else {
                count += anagramDict[sortedSubstring]; // Increment count and update the dictionary.
                anagramDict[sortedSubstring]++;
            }
        }
    }
    return count; // Return the total count of anagram pairs.
}
// Example usage:
// console.log(sherlockAndAnagrams("abba")); // Output: 4
// console.log(sherlockAndAnagrams("abcd")); // Output: 0
// console.log(sherlockAndAnagrams("ifailuhkqq")); // Output: 3
// console.log(sherlockAndAnagrams("kkkk")); // Output: 10
// --- IGNORE ---