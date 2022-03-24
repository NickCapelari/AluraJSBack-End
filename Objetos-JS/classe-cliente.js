class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(`seu saldo é de ${this.saldo}`)
    }
}

const andre = new Cliente("Andre", "andre@emailcom", "3213212312", 150.00)
console.log(andre)
andre.exibirSaldo()
andre.teste = 2