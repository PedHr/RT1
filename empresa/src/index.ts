import { Empresa } from "./models/empresa";
import { Endereco } from "./models/endereco";
import { Funcionario } from "./models/funcionario";
import { Telefone } from "./models/telefone";
import { DescritorEmpresa } from "./utils/descritorempresa";

const endereco = new Endereco(456, "Rua das Palmeiras", "Centro", "Rio de Janeiro");

const telefone1 = new Telefone("021", "98765-4321");
const telefone2 = new Telefone("021", "92345-6789");
const telefones = [telefone1, telefone2];

const funcionario1 = new Funcionario("Bruce Wayne", "789012", "111.222.333-44", endereco, telefone1);
const funcionario2 = new Funcionario("Diana Prince", "345678", "555.666.777-88", endereco, telefone2);
const funcionarios = [funcionario1, funcionario2];

const empresa = new Empresa(
  funcionarios,
  endereco,
  "Wayne Enterprises LTDA",
  "Wayne Tech",
  "12.345.678/0001-99",
  telefones
);

const descritor = new DescritorEmpresa();
descritor.descrever(empresa);
