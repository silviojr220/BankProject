//Ao criar um aquivo .JS com a letra maiuscula, está se referindo que, aquele arquivo é exclusivamente para uma classe.
//Os modulos são definidos por cada arquivo presente. Usando o "export" o arquivo com a classe que presente nele, ficara disponivel para uso em outros arquivos.
export class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }

    get cpf() {
        this._cpf;
    }

}
//Classe, tem com função da propriedades a variavel que está sendo atribuida.