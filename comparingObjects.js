/* We've seen that we use JSON.stringify to help us compare the contents of arrays.
Although we can also use JSON.stringify to convert an object to its string representation, that isn't a reliable method for comparing the 
contents of two objects. It's not reliable because JSON.stringify doesn't guarantee in what order it outputs an object's key/value pairs.

However, we can write a simple function(checkObjValues) to check if an object contains the key/value pairs that we expect.

We've also converted checkObjValues into an assert function, assertObjValues.

TASKS:
Run the code. Make sure that the console output matches your understanding.
Your don't need to do any coding here. Don't spend more than a few minutes on this problem.

NOTES:
The function checkObjValues checks that the key/value pairs in obj2 are also in obj1. However, it doesn't check that obj1 and obj2 contain exactly the same key/value pairs.
To do an exact comparison, we would also have to check that all key/value pairs in obj1 are present in obj2, and that all key/value pairs in obj2 are present in obj1.

The asserObjValues function has the same issue as checkObjValues, but it's adequate for the testing we'll do in the next problem.
*/

var objA = {foo: 1, bar: 2};
var objB = {bar: 2, foo: 1};

console.log(JSON.stringify(objA));
console.log(JSON.stringify(objB));
console.log(JSON.stringify(objA) === JSON.stringify(objB));

function checkObjValues(obj1, obj2){
    // check that we have two objects
    if((typeof obj1 !== 'object') || (typeof obj2 !== 'object')){
        return false;
    }

    // check if obj1 has all the key/value in obj2
    for(var key in obj2){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

console.log(checkObjValues(objA, objB));

function asserObjValues(actualObj, expectedObj, descriptionOfCorrectBehavior){
    // check that we have two objets
    if((typeof actualObj !== 'object') || (typeof expectedObj !== 'object')){
        console.log('test failed: expected two objects');
        return;
    }

    // check if actualObj has all the key/values in expectedObj
    for(var key in expectedObj){
        if(actualObj[key] !== expectedObj[key]){
            console.log('test failed: ' + descriptionOfCorrectBehavior);
            return;
        }
    }
    console.log('test passed.');
}

console.log(asserObjValues(objA, objB, 'should be true if keys/values in objA are in objB'));