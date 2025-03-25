//"import" tem a função de importar arquivos que foram enviados pelo "export", em sua pasta respectiva.
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"

//Com a variavel criada, "new + Classe", faz com que as propriedades da classe, sejam atribuidas a variavel.
//Para acessar uma propriedade dentro de uma classe, se utiliza "variavel.propiedade = atribuição".
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo._saldo);
contaCorrenteRicardo.depositar(200);
console.log(contaCorrenteRicardo._saldo);

let valorSacado = contaCorrenteRicardo.sacar(100);
console.log(valorSacado);

valorSacado = contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo._saldo);
console.log(contaCorrenteRicardo);



// #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields


// Estrutura

// class {
//     propriedade;

//     mudar () {
//         this.propriedade = algo;
//     }
// }

// variavel = new classe;

// variavel.propriedade = A;

// variavel.mudar(B);

