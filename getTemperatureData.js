/*
Given a set of weather data, we want to calculate which city is the coldest and which city is the hottest.

TASKS:
You might have to scroll down to see the specifications, the empty function getColdestAndHottestCities, and assertion test code near the bottom.
Don't start coding anything yet.

Carefully read the 'specs' in the code comments and make sure you understand them.
* We want you to complete the assertion test at the bottom of the code before you start working on the getColdestAndHottestCities function.

* Complete the assignments to the actual and expected variables. If you don't remember how we use actual and expected.

* For expected, assign an object literal based on what you expect the getColdestAndHottestCities function to return when ir's called with weatherData.

* The assertObjValues function is already written at the top of the code.

Now, implement the getColdestAndHottestCities function. Please code the function to work with any similarly data, not just the sample array we've provided.
Continue working on this problem until you are sure that the assertion test and the getColdestAndHottestCities function are working correctly. 
Particularly while you're debugging, please share your thinking out loud.
Submite to continue.
*/

/* 
Specs for getColdestAndHottestCities:

- It takes an array of objects, each containing a city and a temperature.
- It should return one object. The returned object should:
 
- Have a property 'coldestCity' with a string value that is the name of the city having the coldest temperature.
- Have another property 'hottestCity' with a string value that is the name of the city having the hottest temperature.
- If two or more cities have the same coldest or hottest temperature, use the city that appers first in the data.

*/

function assertObjValues(actualObj, expectedObj, descriptionOfCorrectBehavior){
    // check that we have two objects
    if((typeof actualObj !== 'object') || (typeof expectedObj !== 'object')){
        console.log('test failed: expected two objects');
        return;
    }

    // check if actualObj has all the key/values in expectedObj
    for(var key in expectedObj){
        if(actualObj[key] !== expectedObj[key]){
            console.log('test failde: ' + descriptionOfCorrectBehavior);
            return;
        }
    }
    console.log('test passed.');
}       

function getColdestAndHottestCities(data){

}

var weatherData = [
    {City: 'Rome', 'temp in C': 27},
    {City: 'SanFrancisco', 'temp in C': 55},
    {City: 'Brazil', 'temp in C': 45},
    {City: 'Antartica', 'temp in C': 5}
]