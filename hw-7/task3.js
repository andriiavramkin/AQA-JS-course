function divide (numerator, denominator) {
    if (denominator === 0) {
        throw new Error("You can't devide by zero. Please select a valid value.")
    } else if (typeof numerator !== "number" || typeof denominator !== "number"){
        throw new Error("Your input should be a number. Please select another value.")
    } else {
        return numerator/denominator
    }
}

try {
    console.log(divide (50, 35))
  }
  catch(err) {
    console.log("Some error has happened: ", err.message)
  } 
  finally {
    console.log("Робота завершена")
  }