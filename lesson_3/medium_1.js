// Question 1
{
    const msg = 'The Flintstones Rock!'
    let leadingSpaces = 0
    for(let i=0; i < 10; i++) {
        console.log(msg.padStart(leadingSpaces + msg.length, ' '))
        leadingSpaces++
    }

    for(let padding=0; padding<10; padding++) {
        console.log(" ".repeat(padding) + msg)
    }
}

// Question 2: Swap the cases
{
    let munstersDescription = "The Munsters are creepy and spooky.";

    const isUpperCase = (char) => char === char.toUpperCase()
    const isLowerCase = (char) => char === char.toLowerCase()

    const transformedString =  [...munstersDescription].map(char => {
        if(isUpperCase(char)) {
            return char.toLowerCase()
        } else if(isLowerCase(char)) {
            return char.toUpperCase()
        }
    }).join('')

    console.log(transformedString)
}

// Question 3
{
    function factors(number) {
        let divisor = number; // 8
        let factors = [];
        while(divisor > 0) {
            if(number % divisor === 0) {
                factors.push(number/divisor)
                // factors.push(divisor)
            }
            divisor--
        }

        // old
        // do {
        //     if (number % divisor === 0) {  // 8 % 8 = 0
        //         factors.push(number / divisor); //8/8 --> 1 factors [] --> [1]
        //     }
        //     divisor -= 1; // 8 --> 7
        // } while (divisor !== 0);
        return factors;
    }

    console.log(factors(-5))
    console.log(factors(0))
    console.log(factors(1))
    console.log(factors(8))
}

// Question 4
{
    function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
        buffer.push(newElement);
        if (buffer.length > maxBufferSize) {
            buffer.shift();
        }
        return buffer;
    }

    function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
        buffer = buffer.concat(newElement);
        if (buffer.length > maxBufferSize) {
            buffer.shift();
        }
        return buffer;
    }
}

// Question 5
{
    console.log(0.3 + 0.6);
    console.log(0.3 + 0.6 === 0.9);
}

// Question 6
{
    let nanArray = [NaN];

    console.log(nanArray[0] === NaN);
    console.log(Number.isNaN(nanArray[0]));
}

// Question 7
{
    let answer = 42;

    function messWithIt(someNumber) {
        return (someNumber += 8);
    }

    let newAnswer = messWithIt(answer);

    console.log(answer - 8);
}