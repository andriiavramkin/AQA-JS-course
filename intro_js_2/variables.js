/*const age = 23

console.log(age)

let personAge = 35

console.log(personAge)
personAge = 42
console.log(personAge)
personAge = true
console.log(personAge)
personAge = "twenty"
console.log(personAge)
*/

/*
//old variable - not used anymore
var windowSize = 1200

//boolian variables
const isMarried = true

// variable that never changes. Global project use.
const SUPER_ADMINT_EMAIL = 'aa@mail.com'
const GREETING_TEXT = 'Hello User!'

//numbers
const num1 = 0.1
const num2 = 0.2 
const sum = num1+ num2
console.log(sum)

const expected = 0.3

console.log (Number(sum.toFixed(2)) === expected)

console.log(1.1+0.2)

const randomNum = Math.round(Math.random() * 100)
console.log(randomNum)
*/

/*
// || OR
console.log(true || false)
console.log(false || true)
console.log(false || false)

// false: 0, null, undefined, NaN, "".
//true: all others values
console.log(false || 0/0)
console.log(undefined || false)
console.log(0/0)
console.log(undefined || 1 )

*/
/*
// && AND
console.log(true && false)
console.log(false && true)
console.log(true && true)
console.log('------------')
console.log(0 && 1)

const isMaried = true
const hasChildren = false

const hasBonus = isMaried && hasChildren
console.log(hasBonus)

const age = 22
const experiance = 0.6

const hasBonus2 = (isMaried && hasChildren) || (age > 21 && experiance > 1)
console.log(hasBonus2)
*/

/*
// ! NOT      !! forced NOT

console.log(!false)
console.log(!true)

console.log(!1)
console.log("-------------")
console.log(!!1)
console.log(!!0)
console.log(!!10000000)

// ?? 
console.log("-------------")
console.log(1 ?? 0)
console.log(false ?? 0)
console.log(null ?? undefined)
console.log(undefined ?? null)
*/

/*
// short from If..Else..
const isMaried = true
console.log (isMaried ? "maried" : "single")

// приведення операторів
// going to be a String
console.log("111" + true)
console.log("111" + 0)
console.log("111" + undefined)

// going to be a number
console.log("111" - 1)
console.log("111" - "1")

// going to be a number
console.log("---------")
console.log(11 + true)
console.log(11 + null)
console.log(11 + undefined)
console.log("---------")

// going to be a number
console.log("11" * true)
console.log("11" * false)
console.log("11" * undefined)

*/



// не явне приведення

console.log(1 + Number("111"))     // number
console.log(1 + Number("111a"))    // NaN

console.log(1 + +"111")
console.log(+"111" + 1)

console.log("-------------")
console.log(1 + Number.parseFloat("111.4a"))    // 112.4     number



console.log("-------------")

console.log(1 + String(true))  //1true

console.log(1 + String(null))  // 1null
console.log(Boolean(111)  // true)
