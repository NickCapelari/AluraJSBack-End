const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "32132132132",
    email: 'teste@teste.com',
    fones: ['55-99999999', "55-43321321321"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: '20/03/2021'
    },
    {
        nome: "Samia Maria",
        parentesco: "Filha",
        dataNasc: '10/01/1995'
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: '10/01/1995'
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "20/03/2021")

console.log(filhaMaisNova[0].nome)