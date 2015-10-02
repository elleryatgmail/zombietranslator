##Two Custom Rules

In addition to the 8 rules provided as part of the homework spec, I implemented two more:

1. Replaces occurrences of "y" or "Y" with "YY".

2. Replaces occurrences of "q" or "Q" with "QQ".


##Jasmine Test Descriptions
As part of my Jasmine tests I used the following 3 expect methods:

1. toBeTruthy().  Using this method allowed me to compare the length
of the input string with the length of the zombified string.  In all
cases, the zombified string should be at least as long as the input
string.  Since there is no greaterThanOrEqualTo(), toBeTruthy() was
used.

2. toMatch().  This method accepts a regular expression, which I
always define to be the replacement text. For instance, since Rule
\#1 replaces /a/ with /hra/, I set the regex to /hra/.  In a word
with 'a' or 'A', you should always be able to match /hra/.


3. toBe().  In the end, it's important to check exactly what string
the zombify method returned.  I use toBe() to check the zombify
output against a literal string.



