function handleNum(number, onEven, onOdd) {
  if (number % 2 === 0) {
    onEven()
  } else {
    onOdd()
  }
}

const handleEven = () => console.log("number is even")
const handleOdd = () => console.log("number is odd")

handleNum(16, handleEven, handleOdd)
