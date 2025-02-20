const personagens = [

    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura de Ferro",
        armaSecundaria: "Repulsores",
        velocidade: 75,
        forca: 85,
        resistencia: 80,
        descricao: function(){
            return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistencia: " + this.resistencia
        }
    },

    {
        nome: "Natasha Romanoff",
        codinome: "Viúva Negra",
        armaPrincipal: "Arma Eletrochoque",
        armaSecundaria: "",
        velocidade: 85,
        forca: 60,
        resistencia: 75,
        descricao: function(){
            return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistencia: " + this.resistencia
        }
    },

    {
        nome: "Thor Odinson",
        codinome: "Thor",
        armaPrincipal: "Mjolnir",
        armaSecundaria: "Stormbreaker",
        velocidade: 70,
        forca: 80,
        resistencia: 70,
        descricao: function(){
            return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistencia: " + this.resistencia
        }
    },

    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Força Bruta",
        armaSecundaria: "Soco",
        velocidade: 60,
        forca: 95,
        resistencia: 95,
        descricao: function(){
            return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistencia: " + this.resistencia
        }
    },

    {
        nome: "Clint Barton",
        codinome: "Gavião Arqueiro",
        armaPrincipal: "Arco e Flecha",
        armaSecundaria: "Adagas",
        velocidade: 80,
        forca: 70,
        resistencia: 75,
        descricao: function(){
            return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistencia: " + this.resistencia
        }
    },

    {
        nome: "Wanda Maximoff",
        codinome: "Feiticeira Escarlate",
        armaPrincipal: "Magia",
        armaSecundaria: "Feitiços",
        velocidade: 85,
        forca: 80,
        resistencia: 70,
        descricao: function(){
            return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistencia: " + this.resistencia
        }
    },

    {
        nome: "Peter Parker",
        codinome: "Homem-Aranha",
        armaPrincipal: "Teia",
        armaSecundaria: "Força",
        velocidade: 90,
        forca: 75,
        resistencia: 80,
        descricao: function(){
            return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistencia: " + this.resistencia
        }

        

        
    },

    {
        nome: "Dione",
        codinome: "Thanos",
        armaPrincipal: "Manopla do Infinito",
        armaSecundaria: "Força",
        velocidade: 90,
        forca: 100,
        resistencia: 100,
        descricao: function(){
            return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma Principal: " + this.armaPrincipal + "\n"
            + "Arma Secundaria: " + this.armaSecundaria + "\n"
            + "Velocidade: " + this.velocidade + "\n"
            + "Força: " + this.forca + "\n"
            + "Resistencia: " + this.resistencia
        }
    },

]


let maisRapido = personagens[0];
let maisForte = personagens[0];
let maisResistente = personagens[0];

for (let i = 0; i < personagens.length; i++){
    if (personagens[i].velocidade > maisRapido.velocidade){
        maisRapido = personagens[i]

    }

    if (personagens[i].forca > maisForte.forca){
        maisForte = personagens[i]
    }

    if (personagens[i].resistencia > maisResistente.resistencia){
        maisResistente = personagens[i]
    }
}

console.log(`O personagem mais rápido é o: ${maisRapido.codinome}, com velocidade de: ${maisRapido.velocidade}`)
console.log(`O personagem mais forte é o: ${maisForte.codinome}, com força de: ${maisForte.forca}`)
console.log(`O personagem mais resistente é o: ${maisResistente.codinome}, com resitencia de: ${maisResistente.resistencia}`)
