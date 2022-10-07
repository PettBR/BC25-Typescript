"use strict";
// tipagem no TypeScript
// tipagem implícita
let username = 'shaolin_matador_de_porco';
// username = 6;   acusa erro no typescript porque o tipo implicito da variavel é string
username = 'flavioDoPneu';
// tipagem explícita
let pi = Math.PI;
// pi = 'suco Tang'; acusa erro no typescript porque o tipo da variável é number e atribui uma string
let logado = true;
// union types
let rg = 12345678900;
rg = '98765432100';
// qualquer tipo: any
let generico = [];
generico = {
    a: '',
    b: 8,
    c: true
};
generico = 'eu sou genérico';
generico = 6.89;
// maneira 1 de se declarar
const listaDeNomes = ['Kyou', 'Louise', 'Taiga', 'Milfeulle'];
listaDeNomes.push('Mipha');
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// notas.push('e ae mano'); acusa ERRO
// maneira 2 de se declarar
const valores = ['pudim', 96, 'batata', 999];
const array = [true, false, false, false, true, true, false];
const lista = [1, true, {}, [], 'auhauahuauaha'];
let listaPodeTudo = [true, 'lol', 2.3, 4];
console.log(listaPodeTudo);
