// recurtion is when function recall itself


// by FOR cycle
// function countToZero (startValue) {
//     for (let i = startValue; i >= 0; i--) {
//         console.log(i)
//     }
// }

// countToZero(5)

// by recurtion
function countToZero (startValue) {
    console.log(startValue)
    if(startValue > 0) {
        countToZero(startValue - 1)
    }
    
}

countToZero(5)