"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, matricula, cpf, endereco, telefone) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    toString() {
        return `Nome: ${this.nome}
Matricula: ${this.matricula}
CPF: ${this.cpf}
${this.endereco.toString()}`;
    }
}
exports.Funcionario = Funcionario;
