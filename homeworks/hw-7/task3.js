//importing chalk to visually divide samples in the console easier.
import chalk from 'chalk';

function divide (numerator, denominator) {
    if (denominator === 0) {
        throw new Error("You can't devide by zero. Please select a valid value.")
    } 
    if (typeof numerator !== "number" || typeof denominator !== "number"){
        throw new Error("Your input should be a number. Please select another value.")
    } 

        return numerator/denominatorpit 
}

// sample 1
console.log(chalk.green('sample 1'))

const inputValue11 = 50
const inputValue12 = 35
console.log('sample inputs: ', inputValue11, inputValue12)

try {
    console.log(divide (inputValue11, inputValue12))
  }
  catch(err) {
    console.log("Some error has happened: ", err.message)
  } 
  finally {
    console.log(chalk.red("Робота завершена"))
  }
  console.log('-----------')


  // sample 2
  console.log(chalk.green('sample 2'))

  const inputValue21 = 50
  const inputValue22 = 0
  console.log('sample inputs: ', inputValue21, inputValue22)

  try {
    console.log(divide (inputValue21, inputValue22))
  }
  catch(err) {
    console.log("Some error has happened: ", err.message)
  } 
  finally {
    console.log(chalk.red("Робота завершена"))
  }
console.log('-----------')


  // sample 3
  console.log(chalk.green('sample 3'))

  const inputValue31 = 0
  const inputValue32 = 150
  console.log('sample inputs: ', inputValue31, inputValue32)

  try {
    console.log(divide (inputValue31, inputValue32))
  }
  catch(err) {
    console.log("Some error has happened: ", err.message)
  } 
  finally {
    console.log(chalk.red("Робота завершена"))
  }
  console.log('-----------')

  // sample 4
  console.log(chalk.green('sample 4'))

  const inputValue41 = 'text'
  const inputValue42 = 15
  console.log('sample inputs: ', inputValue41, inputValue42)

  try {
    console.log(divide (inputValue41, inputValue42))
  }
  catch(err) {
    console.log("Some error has happened: ", err.message)
  } 
  finally {
    console.log(chalk.red("Робота завершена"))
  }
  console.log('-----------')

   // sample 5
   console.log(chalk.green('sample 5'))

   const inputValue51 = 4
   const inputValue52 = undefined
   console.log('sample inputs: ', inputValue51, inputValue52)

   try {
     console.log(divide (inputValue51, inputValue52))
   }
   catch(err) {
     console.log("Some error has happened: ", err.message)
   } 
   finally {
     console.log(chalk.red("Робота завершена"))
   }
   console.log('-----------')

    // sample 6
  console.log(chalk.green('sample 6'))

  const inputValue61 = null
  const inputValue62 = 15

  console.log('sample inputs: ', inputValue61, inputValue62)
  try {
    console.log(divide (inputValue61, inputValue62))
  }
  catch(err) {
    console.log("Some error has happened: ", err.message)
  } 
  finally {
    console.log(chalk.red("Робота завершена"))
  }
  console.log('-----------')

   // sample 7
   console.log(chalk.green('sample 7'))

   const inputValue71 = NaN
   const inputValue72 = 4
 
   console.log('sample inputs: ', inputValue71, inputValue72)
   try {
     console.log(divide (inputValue71, inputValue72))
   }
   catch(err) {
     console.log("Some error has happened: ", err.message)
   } 
   finally {
     console.log(chalk.red("Робота завершена"))
   }
   console.log('-----------')