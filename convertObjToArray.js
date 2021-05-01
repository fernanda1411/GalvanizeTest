/*
Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

Argument:

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
Return value:

[['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/

var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
};

function convertObjectToArray(obj){
    const arr = [];
    for(let key in obj){
        const result = [key, obj[key]];
        arr.push(result);
    }
    return arr;
}


console.log(convertObjectToArray(input));