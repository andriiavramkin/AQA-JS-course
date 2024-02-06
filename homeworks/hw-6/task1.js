//function declaration
console.log('function expression')

function calculateArea (width, height) {
 const rectangularArea = width * height
 return rectangularArea
}

console.log('Rectangular Area is', calculateArea(5,10))
console.log('-----------------')
console.log('')

//function expression
console.log('function expression')

const calculateArea1 = function (width, height) {
    return width * height
   }
 
console.log('Rectangular Area1 is', calculateArea1(33,12))
console.log('-----------------')
console.log('')


//arrow function
console.log('Arrow function')

const calculateArea2 = (width, height) => {
    return width * height
}

console.log('Rectangular Area2 is', calculateArea2(3,5))
console.log('-----------------')
console.log('')


//Concise arrow function
console.log('Concise Arrow function')

const calculateArea3 = (width, height) => width * height

console.log('Rectangular Area3 is', calculateArea3(10,7))
console.log('-----------------')
console.log('')