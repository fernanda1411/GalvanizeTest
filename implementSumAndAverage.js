/*
Use the skeleton provided to write a working implementation of a sum and an average function. The solution will require that you use your sum function within your average function. While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.
*/

let input = [1, 2, 3, 4, 5];

function sum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        sum += num;
    }
    return sum;
}

function average(numbers){
   return sum(numbers) / numbers.length;
}

function assertEquals(actual, expected, testName){
    if(actual === expected){
        console.log('Passed!');
    }else{
        console.log(`Failed [${testName}] expected ${expected}, but got ${actual}`);
    }
}

let actualSum = sum(input);
let expectedSum = 15;
console.log(assertEquals(actualSum, expectedSum, 'should sum the integers of the array'));

let actualAverage = average(input);
let expectedAverage = 3;
console.log(assertEquals(actualAverage, expectedAverage, 'should get the average of the array'));
