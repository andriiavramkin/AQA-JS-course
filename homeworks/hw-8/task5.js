const firstNames = ["Peter", "Anna", "Diana", "Max"]
const secondNames = ["Jackson", "deLafe", "Princes", "Verstapen"]

// joining via Concat
const assortedNames = firstNames.concat(secondNames)
console.log(assortedNames)

console.log("-------------------")

// joining via For and Push
const fullNames = []
for (let i = 0; i < firstNames.length; i++) {
  fullNames.push(`${firstNames[i]} ${secondNames[i]}`)
}

console.log(fullNames)
