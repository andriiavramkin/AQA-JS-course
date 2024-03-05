const averageGrade = -10
let successLevel

// made some modification to the original requirememnt to deal with invalid inputs
if (0 <= averageGrade && averageGrade < 60) {
  successLevel = "Незадовільно"
} else if (60 <= averageGrade && averageGrade <= 70) {
  successLevel = "Задовільно"
} else if (70 < averageGrade && averageGrade <= 80) {
  successLevel = "Добре"
} else if (80 < averageGrade && averageGrade <= 90) {
  successLevel = "Дуже добре"
} else if (90 < averageGrade && averageGrade <= 100) {
  successLevel = "Відмінно"
} else {
  successLevel = "Invalid input. The averageGrade can be only in rage 0 to 100"
}

console.log(successLevel)
