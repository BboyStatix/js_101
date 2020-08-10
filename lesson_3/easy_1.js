// Question 2
{
    let str1 = "Come over here!"; // true
    let str2 = "What's up, Doc?";
    console.log(str1.endsWith('!'))
    console.log(str2.endsWith('!'))
}

// Question 3
{
    let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
    console.log(ages.hasOwnProperty('Spot'))
}

// Question 4
{
    let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
    console.log(munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase())
}

// Question 5
{
    console.log(false == '0');
    console.log(false === '0');
}

// Question 6
{
    let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
    let additionalAges = { Marilyn: 22, Spot: 237 };
    console.log({...ages, ...additionalAges})
    console.log(Object.assign(ages, additionalAges))
}

// Question 7
{
    let str1 = "Few things in life are as important as house training your pet dinosaur.";
    let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

    console.log(str1.includes('Dino'))
    console.log(str2.includes('Dino'))

    console.log(str1.match('Dino'))
    console.log(str2.match('Dino'))

    console.log(str1.search('Dino'))
    console.log(str2.search('Dino'))

    console.log(str1.indexOf('Dino') > -1)
    console.log(str2.indexOf('Dino') > -1)
}

// Question 8
{
    let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
    flintstones.push('Dino')

    let flintstones1 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
    flintstones1 = flintstones1.concat('Dino')

    let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
    flintstones2 = [...flintstones2, 'Dino']

    let flintstones3 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
    flintstones3[flintstones3.length] = 'Dino'

    console.log(flintstones,flintstones1, flintstones2, flintstones3)
}

// Question 9
{
    let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
    flintstones.push('Dino', 'Hoppy')

    let flintstones1 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
    flintstones1 = flintstones1.concat('Dino', 'Hoppy')

    let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
    flintstones2 = flintstones2.concat(['Dino', 'Hoppy'])

    console.log(flintstones,flintstones1, flintstones2)
}

// Question 10
{
    let advice = "Few things in life are as important as house training your pet dinosaur.";
    console.log(advice.slice(0, advice.indexOf('house')))

    console.log(advice.replace(/house.*/, ''))

    console.log(advice.split('house')[0])
}