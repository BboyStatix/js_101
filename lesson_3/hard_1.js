// Question 1
{
    function first() {
        return {
            prop1: "hi there"
        };
    }

    function second() {
        return
        {
            prop1: "hi there"
        };
    }

    console.log(first());
    console.log(second());
}

// Question 2
{
    let object = { first: [1] };
    let numArray = object["first"];
    numArray.push(2);

    console.log(numArray); //  => "[1, 2]"
    console.log(object);

    object = { first: [1]}
    numArray = [...object.first]
    numArray.push(2);

    console.log(numArray);
    console.log(object);

    object = { first: [1]}
    numArray = object.first.slice()
    numArray.push(2);

    console.log(numArray);
    console.log(object);

    object = { first: [1]}
    numArray = object.first.concat()
    numArray.push(2);

    console.log(numArray);
    console.log(object);
}

// Question 4
{
    function isDotSeparatedIpAddress(inputString) {
        let dotSeparatedWords = inputString.split(".");
        if(dotSeparatedWords.length !== 4) return false

        while (dotSeparatedWords.length > 0) {
            let word = dotSeparatedWords.pop();
            if (!isAnIpNumber(word)) {
                return false
            }
        }

        return true;
    }
}