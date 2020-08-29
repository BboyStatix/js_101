{
  let words = ['go', 'ahead', 'and', 'jump'];
  console.log(words.sort((a, b) => a.length - b.length));
}

{
  let scores = [[1, 4, 2], [3, 6, 4], [6, 8, 9]]
  console.log(scores.sort((a, b) => {
    const totalAScore = a.reduce((subTotal, currentNum) => subTotal + currentNum, 0)
    const totalBScore = b.reduce((subTotal, currentNum) => subTotal + currentNum, 0)

    return totalAScore - totalBScore
  }));
}