export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }
    get nome() {
        return this.#nome
    }

    get sobrenome() {
        return this.#sobrenome
    }
    get email() {
        return this.#email;
    }
    get nascimento() {
        return this.#nascimento;
    }
    get role() {
        return this.#role;
    }
    get ativo() {
        return this.#ativo;
    }
    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato não válido')
        }
        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
    }
    set email(novoEmail) {
        this.#email = novoEmail;
    }
    exibirInfos() {
        return `${this.nome} - ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }
}





// const novoUser = new User("Juliana", "email@email", '2021-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser)) //true