//ATVD 1

class pessoa {
nome: string;
idade: number;

    constructor (nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

}

    const garoto = new pessoa("Pedro F.", 14);
    console.log (garoto.nome,"|", garoto.idade);

// ATVD 2

class produto {
    nome: string;
    preco: number;
    estoque: number;
    
    constructor (nome: string, preco: number, estoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}
    const produto1 = new produto ("Monitor", 349.90, 86);
    const produto2 = new produto ("Gabine", 284.50, 102);
    console.log (produto1)
    console.log (produto2);

//ATVD 3
