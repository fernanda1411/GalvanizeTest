/* Describe what the function doSomething does. Describe the functionality at a reasonably high level. 
What does the value returned from the function represent? */

function doSomething(string){
    var newString = '';
    for(var i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
    return (newString === string);
}

console.log(doSomething('racecar'));

/* This function is reciving a string. 

First: the function initializes a variable called newString with the value of empty string;
Second: the function iterate from the last string character index (string.length - 1) to the first string character index (0);
Third: inside the loop, we concatenate each character (string[i]), into the newString variable. We are basically reverting the string;
Return: comparing the newString (which now contains the inverted string) with the original string passed in;

Conclusion: This is a function that checks if a string is a Palindrome. A palindrome is a string that spells the same onwords and backwords;
*/