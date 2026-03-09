class Pessoa {
    nome: string;
    renda?: number;
    constructor (nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda !== undefined ? renda : 0; 
    }

    disOla(): string {
        return `Olá, meu nome é ${this.nome} e minha renda é ${this.renda}`;
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco(): string {
        return "001";
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

const contaDaThayná = new ContaBancaria(12345);