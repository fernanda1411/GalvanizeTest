/*
Write a function called decorateClassListWithAges. Convert from an array, in this case a class list of names, to an array of object literals decorated with a name and an age for each student. Your decorateClassListWithAges function should use the provided getRandomIntInclusive as part of its solution. (The ages should be randomly generated for each student, either age 10 or age 11)

The "test suite" that you write for this question will be one of the most complex we have seen so far. In order to verify that your code works as expected, you will need to find a way to iterate over the actual array result of your function, then ensure that the age value for each object in your result is "within the range" of 10 to 11.
*/

function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList){
    const decoratedClassList = [];

    for(let i = 0; i < classList.length; i++){        
        const studentObj = {
            name: classList[i],
            age: getRandomIntInclusive(10, 11)
        };
        decoratedClassList.push(studentObj);
    }
    return decoratedClassList;
}

function assertWithinRange(low, high, actual, testName){
    let inRange = low <= actual && actual <= high;
    if(inRange){
        console.log(`passed ${testName}`);
    }else{
        console.log(`Failed [${testName}] actual ${actual} 'not in the range' ${low} 'to' ${high}`);
    }
}

assertWithinRange(10, 11, getRandomIntInclusive(10,11), "getRandomIntInclusive returns value within given range");


// TESTS CASES
function testDecorateStudentList() {
    const classList = [
      "Joe",
      "Jack",
      "John",
      "Fred",
      "Frank",
      "Barry",
      "Larry",
      "Mary",
      "Harry",
      "Farrell",
      "Susan",
      "Monica",
      "Keira",
      "Caroline",
      "Harriet",
      "Erica",
      "Luann",
      "Cheryl",
      "Beth",
      "Rupa",
      "Linda",
      "Allison",
      "Nancy",
      "Dora"
    ];
  
    let decoratedList = decorateClassListWithAges(classList); 
  
    for (let i = 0; i < decoratedList.length; i++) {
      assertWithinRange(10, 11, decoratedList[i].age, "renders all ages either 10 or 11");
    }
  }


  testDecorateStudentList()
  