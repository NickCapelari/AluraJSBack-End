const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3,5,8,9.5]

function mediaSala(notasDaSala){
    const SomaDasNotas = notasDaSala.reduce((acum, atual)=> 
    atual + acum,0)
    return SomaDasNotas/notasDaSala.length
}

console.log(`Média da Sala de JS ${mediaSala(salaJS)}`)
console.log(`Média da Sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da Sala de Python ${mediaSala(salaPython)}`)