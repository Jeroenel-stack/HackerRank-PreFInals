function isValid(s) {
    // Count frequency of each character
    const freq = {};
    for (const c of s) freq[c] = (freq[c] || 0) + 1;
    const counts = Object.values(freq);

    // Map: frequency -> how many times it occurs
    const freqMap = {};
    for (const count of counts) freqMap[count] = (freqMap[count] || 0) + 1;
    const keys = Object.keys(freqMap).map(Number);

    // If all letters same freq
    if (keys.length === 1) return "YES";
    // If there are two different frequencies
    if (keys.length === 2) {
        // Case 1: One freq is 1, and it occurs once (we can remove this char)
        if ((freqMap[1] === 1 && freqMap[keys[1]] > 1) || (freqMap[1] === 1 && freqMap[keys[0]] > 1)) return "YES";
        // Case 2: The higher freq occurs once and is only 1 greater than the lower
        const [minFreq, maxFreq] = [Math.min(...keys), Math.max(...keys)];
        if (freqMap[maxFreq] === 1 && maxFreq - minFreq === 1) return "YES";
    }
    return "NO";
}
