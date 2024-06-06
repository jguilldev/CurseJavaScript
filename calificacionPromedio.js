// creaar un programa que tome un array de calificaciones como entrada
// y calcular el promedio solo por calificaciones aprobadas
// las calificaciones aprobadas deben ser mayores o iguales a 70

const grades = [10,20,34,56,78,89,88,78,99,100]

const passingGrades =grades.filter(grade => grade>=70)
const averagePassingGrade = passingGrades.reduce((sum,grade)=> sum + grade, 0)/passingGrades.length

console.log(`las notas que pasaron fueron: ${passingGrades}`)
console.log(`El promedio de notas fue: ${averagePassingGrade}`)