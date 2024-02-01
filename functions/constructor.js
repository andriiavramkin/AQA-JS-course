
// constructor function returns object always
// function Person (name, age) {
//     this.name = name
//     this.age = age
//     this.sayHello = function () {
//         console.log(`Hello, ${this.name}!`)
//     };
// }

// const user1 = new Person('Peter', 23)
// console.log(user1)
// user1.sayHello()

// const user2 = new Person('Alice', 25)
// console.log(user2)
// user2.sayHello()




// iife  - immedietly invoked Function Expresion

function sayHello(){
    console.log('hello')
}

sayHello()


// - immedietly invoked Function Expresion

(function sayHello(){
    console.log(`hello ${name}`)
}) ('Peter')

