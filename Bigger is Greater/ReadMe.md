Algorithm: Next Lexicographical Permutation (biggerIsGreater)
Convert the word to an array of characters.

Find the rightmost character (i) that is smaller than its next character:

Start from the end of the array and move left until you find arr[i] < arr[i + 1].

If no such character exists (i < 0), there is no higher permutation. Return 'no answer'.

Find the rightmost character (j) greater than arr[i]:

Start from the end and move left until you find arr[j] > arr[i].

Swap arr[i] and arr[j].

Reverse the suffix of the array starting from position i + 1 to the end.

Join the array into a string and return it as the next lexicographical permutation.