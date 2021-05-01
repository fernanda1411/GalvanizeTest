/* In the next problem, we're going to be comparing arrays. You might already know this, 
but comparing arrays in JavaScript is different than comparing numbers or strings. 
For reasons that we won't discuss now, using Javascript's comparison operators, == and ===, will
not tell us if two arrays contain the same values.

However, we can use JSON.stringify to convert arrays to their string representation, then compare the strings to see if the arrays
contain the same values.

TASKS:

Check ou the code. Run it. Interesting result, isn't?
*/

var array1 = [3, 7, 11];
var array2 = [3, 7, 11];

console.log(array1 === array2);
console.log(JSON.stringify(array1) === JSON.stringify(array2));

