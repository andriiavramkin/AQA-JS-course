const checkOrder = (available, ordered) => {
  let message

  switch (true) {
    case available < ordered:
      message = "Your order is too large, we don’t have enough goods."
      break
    case ordered == 0:
      message = "Your order is empty."
      break
    case available <= ordered:
      message = "Your order is accepted."
      break
    default:
      message = "Your input is invalid."
  }

  return message
}

console.log(checkOrder(30, 55))
console.log(checkOrder(30, 0))
console.log(checkOrder(30, 5))
console.log("---------------")
console.log(checkOrder(30))
console.log(checkOrder(undefined, 5))
console.log(checkOrder())
