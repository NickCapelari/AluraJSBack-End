const livros = require ('./listaLivros');
const menorValor = require('./menorValor')

// for (let atual = 0; atual < livros.length -1; atual++){
//     let menor = menorValor(livros, atual)
//     let livroAtual  = livros[atual];
//     let livroMenorPreco = livros[menor];
    
//     livros[atual] = livroMenorPreco
//     console.log(livros[atual])
//     livros[menor] = livroAtual
//     console.log(livros[menor])
// }

livros.forEach((livro, indice)=>{
    let menor = menorValor(livros, indice)

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual
})
console.log(livros)