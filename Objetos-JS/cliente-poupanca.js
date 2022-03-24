function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo,saldoPoup){
    Cliente.call(this, nome, cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Ju", "354154654", "ju@email", 100, 200)
console.log(ju)

ClientePoupanca.prototype.depositarPoup = function (valor){
    this.saldoPoup += valor
}

ju.depositarPoup(50)
console.log(ju.saldoPoup)

// ju.teste = 1
// const ma = new ClientePoupanca("ma", "354154654", "ju@email", 100, 200)
// ma.teste2 = 2 
// console.log(ju)
// console.log(ma)