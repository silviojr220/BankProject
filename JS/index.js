//"import" tem a função de importar arquivos que foram enviados pelo "export", em sua pasta respectiva.
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"

//Com a variavel criada, "new + Classe", faz com que as propriedades da classe, sejam atribuidas a variavel.
//Para acessar uma propriedade dentro de uma classe, se utiliza "variavel.propiedade = atribuição".
//Obs: Quando nos referimos ao "cliente", o mesmo é uma referencia a um objeto criado na memoria.

//--Clientes--
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

//--Informações--
const conta1 = new ContaCorrente(); //Espaço criado na memoria
conta1.agencia = 1001; //Referencia a esse espaço.
conta1.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1200;

//--Desposito--
conta1.depositar(200);

//--Saque--
let valorSacado = conta1.sacar(100);
valorSacado = conta1.sacar(50);

// --Transferencia--
conta1.depositar(500);
conta1.transferir(200, conta2); // --> passamos uma referencia pra um endereço de memoria, já que "conta2" é uma referencia a um objeto criado na memoria, por isso a manipulão dos dados da mesma é possivel.

conta2.sacar(100);
conta2.depositar(1000);
conta2.transferir(500, conta1);

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

