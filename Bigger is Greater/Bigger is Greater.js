function biggerIsGreater(w) {
    let arr = w.split('');
    let i = arr.length - 2;

    // Step 1: find rightmost char smaller than its next
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }
    if (i < 0) return 'no answer';

    // Step 2: find rightmost successor to arr[i]
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // Step 3: swap and reverse the suffix
    [arr[i], arr[j]] = [arr[j], arr[i]];
    let suffix = arr.slice(i + 1).reverse();
    return arr.slice(0, i + 1).concat(suffix).join('');
}
