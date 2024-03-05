// how to catch Errors

/*
const temp = 100;

console.log('start')

try {
    if(temp>=100){
        //throw "My custom error string"

        throw new Error ('My custom error 2')
    }

    console.log('end of try block')

} catch (e){
    console.log('some error has happened: ', e.message)
} finally {
    console.log('finally block')
}

console.log('finish')
*/

//funstions
/*
function calculateSum (num1, num2){
   // console.log(`${num1} + ${num2} = ${num1 + num2}`)

    const sum = num1 + num2

    return sum
    //return num1 + num2
}

// calculateSum(2,5)
// calculateSum(10,21)

const result = calculateSum(1,2)
console.log("result", result)
*/

// function 2
/*
function calculateSum (num1, num2){
    // console.log(`${num1} + ${num2} = ${num1 + num2}`)
 
     const sum = num1 + num2
 
     return 
 }
 
 
 const result = calculateSum(1,2)
 console.log("result", result)
*/

//  // function declaration
//  function calculateSum1 (num1, num2){
//      const sum = num1 + num2
//      return sum
//  }

//   // function expression
//   const calculateSum2 = function (num1, num2){
//     const sum = num1 + num2
//     return sum
// }
// console.log(calculateSum2(2,4))

// //arrow function expression
// const calculateSum3 = (num1, num2) => {
//     const sum = num1 + num2
//     return sum
// }

// console.log(calculateSum3(11,11))

// //concise arrow function expression
// const calculateSum4 = (num1, num2) => num1 + num2
// console.log(calculateSum4(1,1))

//  // parameters
//  function calculateSum1 (num1 = 14, num2 = 12){
//     console.log('num1', num1)
//     console.log('num2', num2)
//      return num1 + num2
//  }

//  console.log(calculateSum1())
//  console.log(calculateSum1(5))
//  console.log(calculateSum1(3, 5))
//  console.log(calculateSum1(undefined, 5))

// example 2
function calculateSum5(...numbers) {
  console.log(numbers)
}

//calculateSum5(1,54,6)

//  // example 3
//  function calculateSum6 (...numbers){
//     return numbers.reduce((acc, item)=> acc + item)   // arrays
//  }

//  console.log(calculateSum6(1,2,6))

//   // example 4
//   const printInfo = (age, name, ...rest)=>{
//         console.log('user age', age)
//         console.log('name', name)
//         console.log('additinal args', rest)
//   }

//  printInfo(22, 'peter')
//  console.log('--------------------')
//  printInfo(52, 'Alice', 'lawer', 'phD')

// example 5
function printInfo(age, name, ...rest) {
  console.log(arguments)
  console.log("arguments ", [...arguments])
  // console.log('user age', age)
  // console.log('name', name)
  console.log("additinal args", rest)
}

printInfo(22, "peter")
console.log("--------------------")
printInfo(52, "Alice", "lawer", "phD")
