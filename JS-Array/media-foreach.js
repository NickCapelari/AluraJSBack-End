const notas = [10, 6.5, 8, 7.5]

let SomaDasNotas = 0

notas.forEach(nota => {
    SomaDasNotas += nota
})

let media = SomaDasNotas/notas.length
console.log(media)