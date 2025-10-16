function permutationGame(arr) {
    // Memoization to avoid recalculating for same arrays
    const memo = new Map();

    // Helper to check if array is sorted ascending
    function isSorted(list) {
        for (let i = 1; i < list.length; i++) {
            if (list[i - 1] > list[i]) return false;
        }
        return true;
    }

    // Recursive Grundy number calculation
    function grundy(list) {
        const key = list.join(',');
        if (memo.has(key)) return memo.get(key);
        // Win for current player if already sorted
        if (isSorted(list)) return 0;
        let grundySet = new Set();
        // Try removing each element, creating all possible moves
        for (let i = 0; i < list.length; i++) {
            const next = list.slice(0, i).concat(list.slice(i + 1));
            grundySet.add(grundy(next));
        }
        // Calculate mex (minimum excludant)
        let mex = 0;
        while (grundySet.has(mex)) mex++;
        memo.set(key, mex);
        return mex;
    }

    // First player wins if grundy number is not zero
    return grundy(arr) !== 0 ? "Alice" : "Bob";
}
