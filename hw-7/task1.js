
function handleNum (number, fun1, fun2) {
    if (number % 2 === 0) {
        fun1()
    } else {
        fun2()
    } 
}

const handleEven = () => console.log('number is even')
const handleOdd = () => console.log('number is odd')

handleNum(15, handleEven, handleOdd)
