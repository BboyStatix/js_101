// Question 1
{
    let advice = "Few things in life are as important as house training your pet dinosaur.";
    console.log(advice.replace('important', 'urgent'))

    let advice1 = "Few things in life are as important important as house training your pet dinosaur.";
    console.log(advice1.replace(/important/g, 'urgent'))
}

// Question 2
{
    let numbers = [1, 2, 3, 4, 5];
    numbers.reverse();
    console.log(numbers);

    numbers = [1, 2, 3, 4, 5];
    numbers.sort((num1, num2) => num2 - num1);
    console.log(numbers);

    numbers = [1,2,3,4,5]
    console.log([...numbers].reverse());
    console.log(numbers);

    console.log(numbers.slice().reverse())
    console.log(numbers)

    console.log(numbers.slice().sort((a,b) => b - a))
    console.log(numbers)

    const reversedArray = []
    numbers.forEach(number => {
        reversedArray.unshift(number)
    })
    console.log(reversedArray)
}

// Question 3
{
    let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

    let number1 = 8;  // false
    let number2 = 95; // true

    console.log(numbers.includes(number1))
    console.log(numbers.includes(number2))
}

// Question 4
{
    let head = "Four score and "
    let famousWords = "seven years ago...";

    console.log(head + famousWords)
    console.log([head, famousWords].join(''))
    console.log(head.concat(famousWords))
}

// Question 5
{
    const arr = [1, 2, 3, 4, 5]
    arr.splice(2,1)
    console.log(arr)
}

// Question 6
{
    let flintstones = ["Fred", "Wilma"];
    flintstones.push(["Barney", "Betty"]);
    flintstones.push(["Bambam", "Pebbles"]);
    console.log(flintstones)

    console.log([].concat(...flintstones))
    console.log(flintstones.flat())

    console.log(
        flintstones.reduce((accumVal, currentElem) => {
            return accumVal.concat(currentElem)
        }, [])
    )
}

// Question 7
{
    let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

    console.log(Object.entries(flintstones).filter(([key, val]) => key === 'Barney').pop())
}

// Question 8
{
    let numbers = [1, 2, 3, 4]; // true
    let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

    console.log(Array.isArray(numbers))
    console.log(Array.isArray(table))
}

// Question 9
{
    let title = "Flintstone Family Members";

    const numOfLeadingSpaces = Math.floor((40 - title.length)/2)

    for(let i=0;i<numOfLeadingSpaces;i++) {
        title = ' ' + title
    }

    console.log(title)

    title = "Flintstone Family Members"

    console.log(title.padStart(numOfLeadingSpaces + title.length, ' '))
}

// Question 10
{
    let statement1 = "The Flintstones Rock!";
    let statement2 = "Easy come, easy go.";

    console.log(statement1.split('').filter(char => char === 't').length)
    console.log(statement2.split('').filter(char => char === 't').length)

    console.log([...statement1].filter(char => char === 't').length)
    console.log([...statement2].filter(char => char === 't').length)
}