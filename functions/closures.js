function makeCounter (startValue) {
    let value = startValue

    return function () {
        console.log(value)
        value ++
    }
}

const count = makeCounter(1)
count()
count()
count()
console.log('hi')
console.log('summ =', 2+5)
count()