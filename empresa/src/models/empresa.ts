import { Endereco } from "./endereco";
import { Funcionario } from "./funcionario";
import { Telefone } from "./telefone";

export class Empresa {
  constructor(
    public funcionarios: Funcionario[],
    public endereco: Endereco,
    public razaoSocial: string,
    public nomeFantasia: string,
    public cnpj: string,
    public telefones: Telefone[]
  ) {}

  public toString(): string {
    return `Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
CNPJ: ${this.cnpj}
Endereco: ${this.endereco.toString()}

Funcionários:
${this.funcionarios.map(f => f.toString()).join("\n\n")}`;
  }
}
