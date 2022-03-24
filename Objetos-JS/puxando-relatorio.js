const cliente = {
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
    depositar:function(valor){
        this.saldo +=valor
    }

}

let relatorio = "";

for(let info in cliente){
    if(typeof cliente[info] === 'object' || typeof cliente[info]==='function'){
        continue
    }else{relatorio += `
    ${info} : ${cliente[info]}
    `} 
}

console.log(relatorio)