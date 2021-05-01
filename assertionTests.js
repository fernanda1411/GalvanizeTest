/* 
Intro:

During this assessment, we're going to use a style of development called 'Test Driven Development', or TDD.
A test, sometimes called an assertion, is a piece of code that compares a value with what we expect. 
Each assertion test provides us a helpful message if it is not behaving in the way we would expect.
Test driven develop,ent means that we will first write one or more tests for the primary code, and then write the primary code
so it will pass all of our tests.

Tasks:

We are going to use a function called assertEquals to create tests. Take a lool at it here:

function assertEquals(actual, expected, descriptionOfCorrectBehavior){
    if(actual !== expected){
        console.log('test failed: ' + descriptionOfCorrectBehavior);
    }else{
        console.log('test passed.');
    }
}

The tests are currently failing. Now, before typing anything, tell us, out loud, the behavior of the asserEquals function and 
how would modify the absoluteValue function to make the test pass.
Modify the code as you've just described. Only modify the absoluteValue function.
Run your code to make sure the tests pass, then submit your code.
*/

function assertEquals(actual, expected, descriptionOfCorrectBehavior){
    if(actual !== expected){
        console.log('test failed: ' + descriptionOfCorrectBehavior);
    }else{
        console.log('test passed.');
    }
}

function absoluteValue(n){
    // your code here
    return Math.abs(n);
}

var actualA = absoluteValue(6);
var expectedA = 6;
console.log(assertEquals(actualA, expectedA, 'should return the absolute value'));

var actualB = absoluteValue(-23);
var expectedB = 23;
console.log(assertEquals(actualB, expectedB, 'should return the absolute value'));



/* Explying the problem:
First: the behavior of the asserEquals method tests if two values are equal, using the operator ===. 
If the two values are not equal, an assertion failure is being caused, and the program is terminated.
I noticed that actual is the same value of expected. But in the actualB is giving me a negative number and the expectedB is returning a positive number.
To be work, I have to use absolute value in my statement.

Second: The absoluteValue function is not giving me any statements that define the function. To work I have to return the parament (n) to be Math.abs(n);
*/