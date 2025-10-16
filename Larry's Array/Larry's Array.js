function larrysArray(A) {
    let inversions = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] > A[j]) inversions++;
        }
    }
    // Larry can sort the array if inversion count is even.
    return inversions % 2 === 0 ? "YES" : "NO";
}
