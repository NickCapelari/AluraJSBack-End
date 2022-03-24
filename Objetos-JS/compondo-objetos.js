const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "32132132132",
    email: 'teste@teste.com',
    fones: ['55-99999999', "55-43321321321"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco: "filha",
    dataNasc:'20/03/2021'
}

console.log(cliente)

cliente.dependentes.nome = "Sara Gama"

console.log(cliente)