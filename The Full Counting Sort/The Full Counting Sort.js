function countSort(arr) {
    const n = arr.length;
    // Find max index value
    let maxIndex = 0;
    for (const [x] of arr) {
        const idx = parseInt(x, 10);
        if (idx > maxIndex) maxIndex = idx;
    }
    // Set up buckets
    const buckets = Array(maxIndex + 1).fill().map(() => []);

    for (let i = 0; i < n; i++) {
        const idx = parseInt(arr[i][0], 10);
        const value = i < n/2 ? '-' : arr[i][1];
        buckets[idx].push(value);
    }

    // Output result in stable sorted order
    const result = [];
    for (const bucket of buckets) {
        for (const val of bucket) result.push(val);
    }
    console.log(result.join(' '));
}
