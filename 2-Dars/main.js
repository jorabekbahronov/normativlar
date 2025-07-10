// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr.filter(() => {
//     console.log('Jorabek');
// })


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, car)  => acc + car )

console.log(arr);


// function divisibleBy(numbers, divisor) {
//   return numbers.filter(n => n % divisor === 0)
// }

// const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));




// function points(games) {
//  let point = 0;
//   games.map(game => {
//     let x = game[0]
//     let y = game[2]
    
//     if(x > y) {
//       point += 3
//     } else if (x == y) {
//       point += 3
//     }
//   })
  
//   return point
// }

// }
