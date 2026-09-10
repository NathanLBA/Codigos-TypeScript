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
class Aluno {

  constructor(
    public readonly nome: string,
    public nota: number
  ) {}

  get isAprovado(): string {
    return this.nota >= 6 ? "Aprovado(a)!" : "Reprovado(a)...";
  }
}

const aluno1 = new Aluno("Olivia", 8.4);
console.log(`${aluno1.nome}: ${aluno1.isAprovado}`);

const aluno2 = new Aluno("Julio", 5.0);
console.log(`${aluno2.nome}: ${aluno2.isAprovado}`);

//ATVD 4
class Retangulo {

  constructor(
    public readonly largura: number,
    public readonly altura: number
  ) {
    if (largura <= 0 || altura <= 0) {
      throw new Error("As dimensões do retângulo devem ser maiores que zero.");
    }
  }

  get perimetro(): number {
    return 2 * (this.largura + this.altura);
  }

  get area(): number {
    return this.largura * this.altura;
  }

  toString(): string {
    return `Retângulo de ${this.largura}x${this.altura} (Área: ${this.area} | Perímetro: ${this.perimetro})`;
  }
}

try {
  const meuRetangulo = new Retangulo(7, 14);
 
  console.log(meuRetangulo.toString());
  console.log(`Apenas o perímetro: ${meuRetangulo.perimetro}`);
} catch (erro) {
  console.error((erro as Error).message);
}

//ATVD 5

class ContaBancaria {

  public titular: string;
  private saldo: number;

  constructor(titular: string, inicialsaldo: number = 0) {
    this.titular = titular;
    this.saldo = inicialsaldo;

  }

  public depositar(valor: number): void {
    if (valor <= 0) {
      throw new Error(`Olá, ${this.titular}. O valor do depósito precisa ser maior que zero.`);
    }

    this.saldo += valor;
    console.log(`Sucesso! Depósito de R$ ${valor.toFixed(2)} realizado na conta de ${this.titular}.`);
  }

  public consultarSaldo(): string {
    return `Olá, ${this.titular}! Saldo atual de R$ ${this.saldo.toFixed(2)}.`;
  }
}

try {

  const contauser = new ContaBancaria("Nathan", 150);


  contauser.depositar(80);


  console.log(contauser.consultarSaldo());
 
} catch (error: any) {

  console.error("Ops! Ocorreu um problema:", error.message);
}
}
