import { Empresa } from "../models/empresa";

export class DescritorEmpresa {
  public descrever(empresa: Empresa): void {
    console.log(empresa.toString());
  }
}
