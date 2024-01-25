const number = 5

// task solved by using loop FOR

console.log('Generation of multiplication table by using For loop')

let result1

for (let i = 0; i<=10; i++) {
    result1 = number * i
    console.log(`${number} * ${i} = ${result1}`)
}

console.log('')  // just a gap

// task solved by using loop WHILE

console.log('Generation of multiplication table by using While loop')

let index = 0

while (index <= 10){
    console.log(`${number} * ${index} = ${number * index}`)

    index++
}