const numbersList = [1,10,14,2,4,5,43,34]

// const copiedList1 = numbersList.slice()
// console.log(copiedList1)
// console.log('---------------------------')

// const copiedList2 = numbersList.concat([])
// console.log(copiedList2)
// console.log('---------------------------')

// const copiedList3 = [...numbersList]
// console.log(copiedList3)
// console.log('---------------------------')

// const copiedList4 = Array.from(numbersList)
// console.log(copiedList4)
// console.log('---------------------------')

console.log('Copied array')
const copiedList5 = structuredClone(numbersList)
console.log(copiedList5)
console.log('---------------------------')

console.log('Sorted array')
const sortedList = copiedList5.sort((a, b)=> a - b)
console.log(sortedList)
