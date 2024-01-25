
/*
//if else   - ecxample 1
const isMaried = false

if (isMaried){
    console.log('Persons is merried')
} else {
    console.log('Persons is NOT merried')
}
console.log('------------------')

// ecxample  2

const userAge = 18
let accessType


if (userAge >= 18){
  accessType = "Full access"
} else if (userAge >= 14){
    accessType = "Limited access"
} else {
    accessType = "No access"
}
console.log(accessType)


console.log('------------------')

// ecxample 3 
const accessType2 = userAge >= 18 ? "Full Access" : "No Access"
console.log(accessType2)



// example 4

const age = 18
const name = "Peter"

if (age >= 18){
    if(name.length > 3){
        console.log('Adult person')
    } else {
        console.log('short name')
    }
} else {
    console.log('not adult')
}
*/

/*
// example 5  - Switch case

const userAge = 11

switch (userAge){
    case 10:                        // userAge === 10
        console.log('10 years')
        break
    case 11:
        console.log('11 years')
        break
    case 12:
        console.log('12 years')
        break
    default:
        console.log('not valid age')
}
*/

/*
// loops

for (let i = 1; i  <= 10; i += 2){
    console.log(`Index ${i}`)
} 
console.log("Loop finished")
console.log("            ")
console.log("            ")


// loops exaple 2 - continue oprator

for (let i = 1; i  <= 10; i++){
    if (i % 2 !== 0){
        continue
    }
    console.log(`Index ${i}`)
} 
console.log("Loop finished")
console.log("            ")
console.log("            ")
*/
/*
// loops exaple 3 - break oprator

for (let i = 1; i  <= 10; i++){
    if (i % 2 === 0){
        continue
    }
  
    if (i === 5){
        break
    }
    console.log(`Index ${i}`)
} 
console.log("Loop finished")
console.log("            ")
console.log("            ")


*/

/// while loop

let index = 0

while (index < 10){
    console.log(index)

    index++
}

// do ..while..
do {
    console.log(index)
    index++
} while (index<15)