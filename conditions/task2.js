const averageGrade = 85;
let successLevel;

// made some modification to the original requirememnt to deal with invalid inputs
switch (true){
    case (averageGrade < 0 ):
        successLevel = 'Invalid input. The averageGrade can be only in rage 0 to 100'
    break
    case (0 <= averageGrade && averageGrade < 60) :
        successLevel = 'Незадовільно'
    break
    case (60 <= averageGrade && averageGrade <= 70) :
        successLevel = 'Задовільно'
    break
    case (70 < averageGrade && averageGrade <= 80) :
        successLevel = 'Добре'
    break
    case (80 < averageGrade && averageGrade <= 90) :
        successLevel = 'Дуже добре'
    break
    case (90 < averageGrade && averageGrade <= 100) :
        successLevel = 'Відмінно'
    break
    default :
        successLevel = 'Invalid input. The averageGrade can be only in rage 0 to 100';
}
console.log(successLevel);