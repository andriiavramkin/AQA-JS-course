
const checkOrder = (available, ordered) => {
    let Message

    switch (true){
        case available < ordered :
            Message = "Your order is too large, we don’t have enough goods."
        break
        case ordered == 0 :
            Message = "Your order is empty."
        break
        case available <= ordered :
            Message = "Your order is accepted."
        break
        default :
            Message = "Your input is invalid."
    }

    return Message
}

console.log(checkOrder(30,55))
console.log(checkOrder(30,0))
console.log(checkOrder(30,5))
console.log('---------------')
console.log(checkOrder(30))
console.log(checkOrder(undefined,5))
console.log(checkOrder())