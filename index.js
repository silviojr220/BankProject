//"import" tem a função de importar arquivos que foram enviados pelo "export", em sua pasta respectiva.
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"

//Com a variavel criada, "new + Classe", faz com que as propriedades da classe, sejam atribuidas a variavel.
//Para acessar uma propriedade dentro de uma classe, se utiliza "variavel.propiedade = atribuição".

//--Clientes--
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

//--Informações--
const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;
console.log(conta1._saldo);

const conta2 = new ContaCorrente();
conta2.agencia = 1200;
conta2.cliente = cliente2;
console.log(conta2);

//--Desposito--
conta1.depositar(200);
console.log(conta1._saldo);

//--Saque--
let valorSacado = conta1.sacar(100);
console.log(valorSacado);
valorSacado = conta1.sacar(50);
console.log(conta1._saldo);

//--Geral_Cliente--
console.log(conta1);
console.log(conta2);



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

