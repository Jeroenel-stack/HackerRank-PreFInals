Initialize variables:

res for the result (sum of all substrings).
f for the current factor (tracks how many times each digit contributes).
prev for the running sum of contributions.
Iterate from rightmost digit to left:

For each digit:
Update prev as prev + digit * f (modulo MOD).
Add prev to res (modulo MOD).
Update f as f * 10 + 1 (modulo MOD).
Return res as the answer.

Summary:
Process each digit from right to left, updating the sum of all possible substrings ending at that digit using dynamic programming.
Return the total sum modulo 10^9 + 7.