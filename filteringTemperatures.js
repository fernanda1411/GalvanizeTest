/* You're working on a cool project that uses weather data.
Another developer has written a function to take an array of temperature values and return an array with only those temperature values
that are within a given range. Unfortunately, the function has multiple bugs in it, as you'll see from running the code and observing
the output of the two assertion tests.

TASKS:

Notice that we've enhanced our previous assertEquals function. Now it's called assertDeepEquals.
By using JSON.stringify, our new assertDeepEquals can compare (actual and expected) values that are simple values or arrays, including nested arrays.

Please debug the filterTemps function so that it passes the provided assertDeepEquals tests (which you might have to scroll down to see).
Don't forget to share your thought process, out loud. Only modify the filterTemps function. The assertDeepEquals function and the assertion tests
we've provided are correct as is.

*/

function assertDeepEquals(actual, expected, descriptionOfCorrectBehavior){
    if(JSON.stringify(actual) !== JSON.stringify(expected)){
        console.log('test failed: ' + descriptionOfCorrectBehavior);
    }else{
        console.log('test passed');
    }
}

function filterTemps(temps, lowLimit, highLimit){
    // var result;
    // for(var i = 0; i < temps.length; i++){
    //     if(temps[i] < lowLimit){
    //         temps.push(result);
    //     }else if(temps[i] > highLimit){
    //         temps.push(result);
    //     }
    // }
    // return temps;
    // console.log(result)

    let result = [];

    for(let i = 0; i < temps.length; i++){
        let candidateTemps = temps[i];

        if(candidateTemps >= lowLimit && candidateTemps <= highLimit){
            result.push(candidateTemps);
        }
    }
    return result;
}

/*
First: the program is returning an array.
The variable result is return undefined;
After the iterating over the loop the condicion (if) is compering if the current index are less then lowLimit and then is pushing result to the current index;
Return: is return the current index;
*/

var sampleTempsData = [11, 28, 2, 19, 31, -3, 36, 22];

var actualA = filterTemps(sampleTempsData, 11, 30);
var expectedA = [11, 28, 19, 22];
console.log(assertDeepEquals(actualA, expectedA, 'should return temps within the range'));

var actualB = filterTemps(sampleTempsData, 15, 31);
var expectedB = [28, 19, 31, 22];
console.log(assertDeepEquals(actualB, expectedB, 'should return temps within the range'));