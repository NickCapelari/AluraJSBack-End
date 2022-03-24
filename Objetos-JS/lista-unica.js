const clientes = [
    {
        nome: "Andre",
        idade: 36,
        cpf: "32132132132",
        email: 'teste@teste.com',
        fones: ['55-99999999', "55-43321321321"],
        saldo: 100,
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: '20/03/2021'
        },
        {
            nome: "Samia Maria",
            parentesco: "Filha",
            dataNasc: '10/01/1995'
        }],
        depositar: function (valor) {
            this.saldo += valor
        }
    },
    {
        nome: "Juliana",
        idade: 25,
        cpf: "13251616156",
        email: 'teste2@teste.com',
        fones: ['55-5165165156', "55-556156"],
        saldo: 100,
        dependentes: [{
            nome: "Suzane",
            parentesco: "filha",
            dataNasc: '20/03/2010'
        },
        {
            nome: "Jenifer",
            parentesco: "Filha",
            dataNasc: '10/01/2012'
        }],
        depositar: function (valor) {
            this.saldo += valor
        }
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)