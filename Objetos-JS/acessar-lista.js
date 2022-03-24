const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "32132132132",
    email: 'teste@teste.com'
}
const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente['nome'])