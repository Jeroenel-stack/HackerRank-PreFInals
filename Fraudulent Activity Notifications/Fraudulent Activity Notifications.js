function activityNotifications(expenditure, d) {
    function getMedian(freq, d) {
        let count = 0, median = 0;
        if (d % 2 === 1) {
            for (let i = 0; i < freq.length; i++) {
                count += freq[i];
                if (count > Math.floor(d / 2)) return i;
            }
        } else {
            let a = -1, b = -1;
            for (let i = 0; i < freq.length; i++) {
                count += freq[i];
                if (count > d / 2 - 1 && a === -1) a = i;
                if (count > d / 2 && b === -1) { b = i; break; }
            }
            return (a + b) / 2;
        }
    }

    let notifications = 0;
    let freq = Array(201).fill(0); // 0 <= expenditure[i] <= 200

    // Initialize frequency array
    for (let i = 0; i < d; i++) {
        freq[expenditure[i]]++;
    }

    for (let i = d; i < expenditure.length; i++) {
        let median = getMedian(freq, d);
        if (expenditure[i] >= 2 * median) notifications++;

        // Slide the window: remove old, add new
        freq[expenditure[i - d]]--;
        freq[expenditure[i]]++;
    }

    return notifications;
}
// Example usage:
// console.log(activityNotifications([10, 20, 30, 40, 50], 3)); // Output: 1
// console.log(activityNotifications([1, 2, 3, 4, 4], 4)); // Output: 0
// console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)); // Output: 2
// --- IGNORE ---