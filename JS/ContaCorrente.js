//Ao criar um aquivo .JS com a letra maiuscula, está se referindo que, aquele arquivo é exclusivamente para uma classe.

import { Cliente } from "./Cliente.js";

//Os modulos são definidos por cada arquivo presente. Usando o "export" o arquivo com a classe que presente nele, ficara disponivel para uso em outros arquivos, mas apenas nos que forem utilizados.
export class ContaCorrente {
    agencia;
    _cliente;

    _saldo = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

// --Saque--
    sacar(valor) {
        if(valor <= 0) {
            console.log(`Não é possivel efetuar o saque!`);
            return;
        }

        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`Foi efetuado um saque de ${valor}. Seu saldo é: ${this._saldo} ${this._saldo === 1 ? "real" : "reais"}`);
            return valor;
        }else {
            console.log(`Saldo insuficiente!`)
        }
    }

    // --Deposito--
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
        console.log(`Foi feito um deposito de ${valor} ${valor === 1 ? "real" : "reais"}. Seu novo saldo é: ${this._saldo} ${this._saldo === 1 ? "real" : "reais"}`);
    }

    // --Transferencia--
    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

        console.log(`${this.cliente} vez um transferencia de ${valor} para ${this.cliente}`);
    }

}
//"This" (Esse), serve para especificar o atributo de uma propriedade, ou seja "This.propiedade".