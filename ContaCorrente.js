//Ao criar um aquivo .JS com a letra maiuscula, está se referindo que, aquele arquivo é exclusivamente para uma classe.
//Os modulos são definidos por cada arquivo presente. Usando o "export" o arquivo com a classe que presente nele, ficara disponivel para uso em outros arquivos, mas apenas nos que forem utilizados.
export class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}
//"This" (Esse), serve para especificar o atributo de uma propriedade, ou seja "This.propiedade".