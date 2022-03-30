import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Mariana', 'M@m', '2021-02-01')
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@r', '2021-01-01')
console.log(novoAdmin.nome)
novoAdmin.nome = '';
console.log(novoAdmin.nome)

