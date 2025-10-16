Initialize a frequency array for expenditures in the trailing d days (values 0–200).
For each day starting from day d:
Compute the median of the previous d days using the frequency array.
If today's expenditure is at least twice the median, increment notification count.
Update the frequency array: remove the oldest value, add the new value.
Median calculation:
For odd d, find the value at position floor(d/2) in the sorted window.
For even d, find the two middle values and average them.
Return the total notification count.