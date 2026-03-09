 interface ContaBancaria {
    numeroConta: number;
    saldo: number;
    depositar(valor: number): void;
}