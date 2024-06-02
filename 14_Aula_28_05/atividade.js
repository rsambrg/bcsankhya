/*
Soma dos Números: Crie um programa que solicita ao usuário um número inteiro positivo N e, 
em seguida, calcula a soma dos números de 1 a N utilizando um loop.
*/

function somarNumero() {
    var num = parseInt(document.getElementById('01_npositivo').value);
    var res = document.getElementById('01_resultado');
    var total = '';
    var s = 0;
    var k = 0;
    for (s = 0; s <= num; s++) {
        k = k + s;
        total += k + ', ';
    }
    res.textContent = total;
}


/*
Tabuada: Escreva um programa que pede ao usuário para inserir um número e imprime a tabuada desse 
número de 1 a 10 usando um loop.
*/

function tabuada() {
    var num = parseInt(document.getElementById('num_02').value);
    var res = document.getElementById('02_resultado');
    var total = '';
    var s = 0;
    for (s = 0; s <= 10; s++) {
        total += num + ' x ' + s + ' = ' + (num * s) + '<br>';
    }
    res.innerHTML = total;
}

/*
Fatorial: Implemente um programa que solicita um número inteiro não negativo e calcula o fatorial 
desse número usando um loop. 
Observação- fiquei um tempão quebrando a cabeça, quando desistir fui pesquisar e vi 
q era tao obvio e eu estressando por n pensar de forma pratica kakakakaka
*/

function fatorial() {
    var num = parseInt(document.getElementById('num_03').value);
    var res = document.getElementById('03_resultado');
    var total = '';
    var s = 1;
    var j = 1;
    do {
        j *= s
        total += num + '! =' + s + 'x =' + j + ' <br>';
        s++;
    } while (s <= num);
    res.innerHTML = total;
}

/*
Números Primos: Desenvolva um programa que recebe um número inteiro positivo e 
verifica se é um número primo.

function primos() {
    var num = parseInt(document.getElementById('num_04').value);
    var res = document.getElementById('04_resultado');
    var total = '';
    
    if((num%2 && num%3 && num%5 && num%7) != 0 || num ==2 || num ==3 || num==5 || num==7 ){
        total = 'primo';
    } else {
        total = 'não primo';
    }

    res.innerHTML = total;
}

Observação - Consertando desde já o vicio de fazer codigo grande XD ai eu me desafiei a fazer ele usando array :)
*/

function primos() {
    var num = parseInt(document.getElementById('num_04').value);
    var res = document.getElementById('04_resultado');
    var p = [2, 3, 5, 7]
    var total = '';
    var s = 0;

    if (s <= 7, num % p[s] != 0 || num == p[s]) {
        total = 'primo';
        s++
    } else {
        total = 'nao primo';
    }

    res.innerHTML = total;
}

/*
Série Fibonacci: Crie um programa que gera os primeiros N termos da série Fibonacci, onde N é fornecido pelo usuário.
observação: ACHEI MTT DIFICIL 
*/

function fibonacci() {
    var num = parseInt(document.getElementById('num_05').value);
    var res = document.getElementById('05_resultado');
    var fibonacciSequence = '';
    var a = 0;
    var b = 1;
    var temp;
    do {
        fibonacciSequence += a + ' ';
        temp = a;
        a = b;
        b = temp + b;
        num--;
    } while (num > 0);


    res.innerHTML = 'Sequência de Fibonacci: ' + fibonacciSequence;
}


/*
Média de Notas: Faça um programa que solicita ao usuário que insira as notas de alunos em 
uma disciplina e calcula a média dessas notas. O programa deve continuar pedindo notas até que o usuário decida parar.
*/
var notas_06 = [];
var res_06 = document.getElementById('06_resultado');
var continuar_06 = true;

function continua() {
    var nota = parseFloat(document.getElementById('num_06_nota').value);
    var continuarInput = parseInt(document.getElementById('num_06').value);
    var total = '';

    if (continuarInput === 1 && nota !== ' ' && nota >= 0 && nota <= 10) {
        notas_06.push(nota);
        total += 'Nota do aluno: ' + nota + '<br>';
    } else if (continuarInput === 0) {
        continuar_06 = false;
        total += 'Até breve!<br>';
        calcularMedia1();
    } else {
        alert('Por favor, insira uma nota válida entre 0 e 10 e escolha continuar ou não.');
    }

    res_06.innerHTML += total;

}

function calcularMedia1() {
    if (notas_06.length === 0) {
        res_06.innerHTML += 'Nenhuma nota foi adicionada.<br>';
        return;
    }
    var soma = notas_06.reduce(function (acc, nota) {
        return acc + nota;
    });
    var media = soma / notas_06.length;
    res_06.innerHTML += 'Média das notas: ' + media + '<br>';
}
/*
Adivinhe o Número: Implemente um jogo onde o computador escolhe um número aleatório 
entre 1 e 100, e o jogador tem que adivinhar. O programa deve fornecer dicas sobre se o número é maior ou menor.
observaçao - fiquei agarrada nele simplesmente por n ter lido direito a questao kakakakakakaakakkaakak
*/
var n_escolha07 = 0;
var total_07 = '';
var n_ar_07 = [];
for (var i = 0; i <= 100; i++) {
    n_ar_07.push(i);
}
var sorteio = Math.floor(Math.random() * n_ar_07.length);
n_escolha07 = n_ar_07[sorteio];
total_07 += ' Bem vindo ao jogo da adivinhação!<br> De o seu palpite!<br>';

function adivinhe() {
    var n_res = parseInt(document.getElementById('num_07_resp').value)
    var num = parseInt(document.getElementById('num_07').value)
    var res = document.getElementById('07_resultado');

    if (num === 1 && !isNaN(n_res)) {
        if (n_res !== n_escolha07) {
            if (n_escolha07 > n_res) {
                total_07 = 'O numero é maior!';
            } else if (n_escolha07 < n_res) {
                total_07 = 'O numero é menor!';
            }
        } else {
            total_07 = 'acertou';
        };

    } else if (isNaN(n_res)) {
        total_07 += 'Digite um número!';
    } else {
        total_07 += 'ate logo...!';
    }

    res.innerHTML = total_07;

}

/*
Contador de Dígitos: Escreva um programa que pede ao usuário para inserir um número 
inteiro e conta quantos dígitos há nesse número.
*/

function contador() {
    var num = parseInt(document.getElementById('num_08').value);
    var res = document.getElementById('08_resultado');
    var total = '';
    var y = 0;
    var x = 10;
    var k;
    do {
        k = (num / x);
        x *= 10;
        y += 1;
    } while (k >= 1);
    total += y + ' digitos.';
    res.innerHTML = total;
};


/*
Números Pares e Ímpares: Crie um programa que solicita ao usuário para inserir um 
número e, em seguida, exibe a contagem de números pares e ímpares até esse número.
*/

function ParOuImpar() {
    var num = parseInt(document.getElementById('num_09').value);
    var res = document.getElementById('09_resultado');
    var total = '';

    for(var i=0;i<=num;i++){
        if(i%2 == 0){
            total += i + ' - par, ';
        }else {
            total += i + ' - impar, ';
        }
    }
    res.innerHTML = total;
};

/*
Cálculo de Média Ponderada: Desenvolva um programa que pede ao usuário para inserir 
as notas e os pesos de várias disciplinas e calcula a média ponderada.
*/

var notas_10 = [];
var res_10 = document.getElementById('10_resultado');
var continuar_10 = true;

function mediaPonderada() {
    var nota = parseFloat(document.getElementById('num_10_nota').value);
    var peso = parseFloat(document.getElementById('num_10_peso').value);
    var continuarInput = parseInt(document.getElementById('num_10').value);
    var total = '';

    if (continuarInput === 1 && nota !== ' ' && nota >= 0 && nota <= 10) {
        notas_10.push(nota*peso);
        total += 'Nota do aluno: ' + nota + '<br>';
    } else if (continuarInput === 0) {
        continuar_10 = false;
        total += 'Até breve!<br>';
        calcularMedia();
    } else {
        alert('Por favor, insira uma nota válida entre 0 e 10 e escolha continuar ou não.');
    }

    res_10.innerHTML += total;

}

function calcularMedia() {
    if (notas_10.length === 0) {
        res_10.innerHTML += 'Nenhuma nota foi adicionada.<br>';
        return;
    }
    var soma = notas_10.reduce(function (acc, nota) {
        return acc + nota;
    });
    var media = soma / notas_10.length;
    res_10.innerHTML += 'Média das notas: ' + media + '<br>';
}
