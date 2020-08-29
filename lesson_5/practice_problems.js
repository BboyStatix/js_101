{
  let arr = ['10', '11', '9', '7', '8'];
  console.log(
    arr.sort((a, b) => Number(b) - Number(a))
  );
}

{
  let books = [
    { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
    { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
    { title: 'Ulysses', author: 'James Joyce', published: '1922' },
    { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
  ];

  console.log(
    books.sort((a, b) => Number(a.published) - Number(b.published))
  );
}

{
  let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

  let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

  let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

  let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

  let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } }

  console.log(arr1[2][1][3]);
  console.log(arr2[1].third[0]);
  console.log(arr3[2].third[0][0]);
  console.log(obj1.b[1]);
  console.log(Object.keys(obj2.third)[0]);
}

{
  let arr1 = [1, [2, 3], 4];

  let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

  let obj1 = { first: [1, 2, [3]] };

  let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

  arr1[1][1] = 4
  console.log(arr1);

  arr2[2] = 4
  console.log(arr2);

  obj1.first[2][0] = 4
  console.log(obj1);

  obj2.a.a[2] = 4
  console.log(obj2);
}
{
  let munsters = {
    Herman: { age: 32, gender: 'male' },
    Lily: { age: 30, gender: 'female' },
    Grandpa: { age: 402, gender: 'male' },
    Eddie: { age: 10, gender: 'male' },
    Marilyn: { age: 23, gender: 'female' }
  };
  console.log(
    Object.values(munsters)
      .filter(member => member.gender === 'male')
      .reduce((subTotalAge, { age }) =>
        age + subTotalAge,
        0
      )
  );
}

{
  let munsters = {
    herman: { age: 32, gender: 'male' },
    lily: { age: 30, gender: 'female' },
    grandpa: { age: 402, gender: 'male' },
    eddie: { age: 10, gender: 'male' },
    marilyn: { age: 23, gender: 'female' }
  };

  Object.entries(munsters).forEach(([memberName, { age, gender }]) => {
    console.log(`${memberName} is a ${age}-year-old ${gender}.`);
  })
}

{
  let a = 2;
  let b = [5, 8];
  let arr = [a, b]; // [2, [5, 8]]

  arr[0] += 2; // [4, [5, 8]]
  arr[1][0] -= a; // [4, [3, 8]]

  console.log(arr);
}

{
  let obj = {
    first: ['the', 'quick'],
    second: ['brown', 'fox'],
    third: ['jumped'],
    fourth: ['over', 'the', 'lazy', 'dog'],
  };

  Object.values(obj).forEach(arr => {
    arr.forEach(word => {
      [...word].forEach(char => {
        if ('aeiou'.includes(char)) {
          console.log(char);
        }
      })
    })
  })
}

{
  let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]
  console.log(
    arr.map(subArr => {
      const subArrClone = [...subArr]
      if (typeof subArr[0] === 'number') {
        return subArrClone.sort((a, b) => a - b)
      } else {
        return subArrClone.sort()
      }
    })
  );
}

{
  let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

  console.log(
    arr.map(subArr => {
      return subArr.slice().sort((a, b) => {
        if (a < b) {
          return 1
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      })
    })
  );
}

{
  let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
  console.log(
    arr.map(obj => {
      const clonedObj = { ...obj }
      for (const key in clonedObj) {
        clonedObj[key] += 1
      }
      return clonedObj
    })
  );
}

{
  let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
  console.log(
    arr.map(subArr => subArr.filter(num => num % 3 === 0))
  );
}

{
  let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

  const oddNumsSum = (arr) => {
    return arr
      .filter((num) => num % 2 !== 0)
      .reduce((subTotal, num) => subTotal + num)
  }

  console.log(
    [...arr].sort((subArrA, subArrB) =>
      oddNumsSum(subArrA) - oddNumsSum(subArrB)
    )
  );
}

{
  let obj = {
    grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
    carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
    apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
    apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
    marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
  };

  const capitalize = color => color[0].toUpperCase() + color.slice(1);
  console.log(
    Object.values(obj).map(({ type, colors, size }) => {
      if (type === 'fruit') {
        return colors.map(capitalize)
      } else if (type === 'vegetable') {
        return size.toUpperCase()
      }
    })
  );
}

{
  let arr = [
    { a: [1, 2, 3] },
    { b: [2, 4, 6], c: [3, 6], d: [4] },
    { e: [8], f: [6, 10] },
  ];

  const allEven = arr => arr.every((elem) => elem % 2 === 0)

  console.log(
    arr.filter(obj => Object.values(obj).every(allEven))
  );
}

{
  let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

  console.log(Object.fromEntries(arr));
}

{
  const uuidChars = '0123456789abcdef'

  const uuidChar = () => {
    const randomIdx = Math.round(Math.random() * (uuidChars.length - 1))
    return uuidChars[randomIdx]
  }

  const formatWithHyphens = (str) => {
    let uuidStrFormat = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

    for (let i = 0; i < str.length; i++) {
      uuidStrFormat = uuidStrFormat.replace('x', str[i])
    }

    return uuidStrFormat
  }

  const UUID = () => {
    const uuidLen = 32

    let uuidStr = ''
    for (let i = 0; i < uuidLen; i++) {
      uuidStr += uuidChar()
    }

    return formatWithHyphens(uuidStr)
  }

  console.log(UUID());
}

{
  const uuidChars = '0123456789abcdef'
  const uuidCharSectionLengths = [8, 4, 4, 4, 12]

  const generateUUID = () => {
    let uuid = ''
    uuidCharSectionLengths.forEach((sectionLength, idx) => {
      for (let i = 0; i < sectionLength; i++) {
        const randomIdx = Math.floor(Math.random() * uuidChars.length)
        uuid += uuidChars[randomIdx]
      }

      if (idx < uuidCharSectionLengths.length - 1) uuid += '-'
    })

    return uuid
  }

  console.log(generateUUID());
  console.log(generateUUID());
  console.log(generateUUID());
}

{
  function generateUUID() {
    let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let sections = [8, 4, 4, 4, 12];

    let uuid = '';
    sections.forEach((section, sectionIndex) => {
      for (let index = 1; index <= section; index++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        uuid += characters[randomIndex];
      }

      if (sectionIndex < sections.length - 1) {
        uuid += '-';
      }
    });

    return uuid;
  }
}