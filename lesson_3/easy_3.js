// Question 1
// Write three different ways to remove all of the elements from the following array:
{
    let numbers = [1,2,3,4]
    const numLen = numbers.length
    for(let i=0; i<numLen; i++) {
        numbers.pop()
    }
    console.log(numbers)

    numbers = [1,2,3,4]
    numbers.splice(0)
    console.log(numbers)

    numbers = [1,2,3,4]
    for(let i=0; i<numLen; i++) {
        numbers.shift()
    }
    console.log(numbers)

    numbers = [1,2,3,4]
    console.log(numbers.reduce((accumVal) => accumVal, []))

    console.log(numbers.filter(() => false))

    numbers.length = 0
    console.log(numbers)

    numbers = [1,2,3,4]
    while(numbers.length) {
        numbers.pop()
    }
    console.log(numbers)
}

// Question 2
{
    console.log([1, 2, 3] + [4, 5]);
}

// Question 3
{
    let str1 = "hello there";
    let str2 = str1;
    str2 = "goodbye!";
    console.log(str1)
}

// Question 4
{
    let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
    let arr2 = arr1.slice();
    arr2[0].first = 42;
    console.log(arr1);
}

// Question 5
// The following function unnecessarily uses two return statements to return boolean values. How can you eliminate the unnecessary duplication?
{
    function isColorValid(color) {
        if (color === "blue" || color === "green") {
            return true;
        } else {
            return false;
        }
    }

    function isColorValid1(color) {
        return (color === "blue" || color === "green")
    }

    function isColorValid2(color) {
        return (color === "blue" || color === "green") ? true : false
    }

    function isColorValid3(color) {
        let isBlueOrGreen = false
        if (color === "blue" || color === "green") {
            isBlueOrGreen = true
        }
        return  isBlueOrGreen
    }

    const isColorValid4 = (color) => ['blue', 'green'].includes(color)
}
