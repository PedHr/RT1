export class Telefone {
    constructor(public ddd: string, public numero: string) {}
  
    public toString(): string {
      return `(${this.ddd}) ${this.numero}`;
    }
  }
  