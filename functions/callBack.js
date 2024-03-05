// callback function

function hof(callback) {
  console.log("high order function")
  callback()
}

const sayHello = () => console.log("Hello from Callback")

hof(sayHello)

//THIS

// console.log(this)
// inside teh objects function type that used should be only function declaration. since only them can have scope inside the object
// it won;t work with arrow functions.

const persona = {
  name: "Alica",
  greet: function () {
    console.log(`Hello, ${this.name}!`)
  },
  sayHello() {
    console.log(`Hello, ${this.name}!`)
  }
}

persona.greet()
persona.sayHello()
console.log("------------")

// soft override context
const persona2 = {
  name: "John"
}

// persona.greet.call(persona2)
// persona.greet();
// console.log('------------')

// apply ovewrite

persona.sayHello.apply(persona2, ["hello"])
persona.sayHello.apply("Hi")

//bind override - it is hard override
