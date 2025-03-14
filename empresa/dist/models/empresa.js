"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj, telefones) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.telefones = telefones;
    }
    toString() {
        return `Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
CNPJ: ${this.cnpj}
Endereco: ${this.endereco.toString()}

Funcionários:
${this.funcionarios.map(f => f.toString()).join("\n\n")}`;
    }
}
exports.Empresa = Empresa;
