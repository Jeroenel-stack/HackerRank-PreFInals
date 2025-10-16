function climbingLeaderboard(ranked, player) {
    // Prepare unique ranked scores in descending order
    let scores = Array.from(new Set(ranked));
    let results = [];
    let i = scores.length - 1;

    for (let p of player) {
        // Move up the leaderboard as long as player's score >= the ranked score
        while (i >= 0 && p >= scores[i]) {
            i--;
        }
        results.push(i + 2);
    }
    return results;
}
