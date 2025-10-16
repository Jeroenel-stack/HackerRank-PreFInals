Create an array of number words for 1–29.
Handle special cases:
If m == 0: return "<hour> o' clock".
If m == 15: return "quarter past <hour>".
If m == 30: return "half past <hour>".
If m == 45: return "quarter to <hour+1>".
Handle general cases:
If m < 30: return "<m> minute(s) past <hour>".
If m > 30: return "<60-m> minute(s) to <hour+1>".
Use singular "minute" for 1, plural "minutes" otherwise.
Summary:
Convert the hour and minute into a readable English phrase, handling special cases for quarters and half, and using "past" or "to" as appropriate.