const car1 = {
  brand: "Audi",
  model: "A4 allroad",
  year: 2024
}

const car2 = {
  brand: "Merc",
  model: "GLE 500",
  owner: "Andrii"
}

const car3 = { ...car1, ...car2 }

console.log(car3)
