/*
Exercício 1) Crie um trecho de código que calcula a média de 3 notas. 
Crie três variáveis para representar as três notas e outra para guardar o resultado do cálculo;


let nota_01 = 10
let nota_02 = 7
let nota_03 = 8
let nota_media = (x+y+z)/3;

console.log(nota_media);


/*
Exercício 2) Crie um trecho de código que calcula o IMC de uma pessoa. 
Crie uma variável para armazenar o peso em kg e uma para armazenar a altura em metros. 
O cálculo do IMC é: PESO / ALTURA ^ 2;


let peso = 47;
let altura = 1.67;
let imc = (peso)/((altura)*(altura));

console.log(imc);

Exercício 3) Crie um trecho de código que lê a idade de uma pessoa e mostra o ano em que ela nasceu. 
O cálculo é ANO ATUAL - IDADE inserida;

let ano = 2024
let nascimento = 1988;
let idade = ano - nascimento;

console.log(idade);


Exercício 4) Crie um trecho de código que me diga quanto cobrar para vender um notebook usado: 
o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?


let preço_notebook = 3000;
let preço_25 = 3000 * 0.75;

console.log(preço_25);

Exercício 5) Escreva um programa que leia um valor em metros e o exiba no console convertido em milímetros


let metro = 1.50;
let mm = 1500;

console.log('eu tinha',metro,'m agora tenho',mm,'mm');

Exercício 6) Escreva um programa que leia um valor de uma temperatura em CELSIUS 
e converte para FAHRENHEIT. O cálculo é: CELSIUS * 1,8 + 32.



let celsius = 25;
let FAHRENHEIT = (celsius)* 1.8 + 32;

console.log('A temperatura ',celsius,' graus celsius em Fahrenheit é ',FAHRENHEIT);

Exercícios Básicos:
1. Verificação de Números:   - Crie um programa que verifica se um número é positivo, negativo ou zero.


let numero = 0;

if (numero> 0) {
    console.log(numero,' é positivo!')
}else if (numero <0){
    console.log(numero,' énegativo!')
} else {
    console.log('Zero!')
};

Verificação de Par ou Ímpar:   - Escreva um programa que determina se um número é par ou ímpar.



let numero = 13;
let resultado = numero % 2;

if (resultado >0){
    console.log(numero, ' é um número impar!')
} else {
    console.log(numero, ' é um número par!')
};

Calculadora Simples:   - Implemente uma calculadora que recebe dois números e uma 
operação (adição, subtração, multiplicação, divisão) e retorna o resultado.


let n01 = 5;
let n02 = 10;
let adc = n01 + n02;
let sub = n01 - n02;
let mult = n01 * n02;
let div = n01 / n02;

console.log('Numeros:',n01,'e',n02,'adição:',adc,'subtração;',sub,'multiplicação:',mult,'divisão:',div);

4. Idade e Categoria:   
- Crie um programa que determina a categoria de uma pessoa baseada na idade (criança, adolescente, adulto, idoso).


let idade = 25;

if(idade<13){
    console.log('Esta pessoa é uma criança! Idade:',idade);
}else if(idade>13 && idade<18){
    console.log('Essa pessoa é um adolescente! Idade:',idade)
}else if(idade>18 && idade<60){
    console.log('Essa pessoa é adulta! Idade:',idade)
}else {
    console.log('Essa pessoa é uma idosa! idade:',idade)
};

5. Conversor de Notas:   - 
Escreva um programa que converte notas numéricas em conceitos (A, B, C, D, F) baseado em um sistema de pontuação.

let nota = 9


if ( nota <=5){
    console.log('Aluno nota f! Reprovado')
}else if( nota>5 && nota<=6){
    console.log('Aluno nota D, de recuperação!')
}else if(nota>6 && nota<=7){
    console.log('Aluno nota C!')
}else if(nota>7 && nota <=8){
    console.log('Aluno nota B!')
}else {
    console.log('Aluno nota A!')
};

6. Cálculo de Desconto:   - Desenvolva um programa que 
calcula o valor final após aplicar um desconto a um determinado preço.

let preço = 200;
let desconto = 50;
let preço_final = 200 * (1-(desconto*0.01));

console.log('O seu preço é ',preço,' e você tem ',desconto,' de desconto. O valor final após o desconto é:', preço_final);

Exercícios Avançados:
7. Validação de Triângulo:   - Crie um programa que verifica se três segmentos formam um triângulo e,
 se sim, determina seu tipo (equilátero, isósceles, escaleno).


let lado1 = 37
let lado2 = 56
let lado3 = 3

if ( lado1 == lado2 && lado2 == lado3){
    console.log('Triangulo equilatero!')
}else if( lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
    console.log('Triangulo escaleno!')
}else {
    console.log('Triangulo isósceles!')
};

8. Verificador de Ano Bissexto:   - Implemente um programa que verifica se um ano é bissexto ou não.



let ano = 2010;
let mult100 = ano % 100;
let mult4 = ano % 4;
let mult400 = ano % 400;

if( mult4 == 0 || mult100 == 0 && mult400 != 0){
    console.log(ano,' é um ano bissexto!')
}else {
    console.log(ano, ' não é um ano bissexto!')
};

9. Jogo de Adivinhação:   - Crie um jogo onde o programa escolhe um número aleatório e o jogador tem que adivinhar qual é. 
O programa deve fornecer dicas se o número fornecido é maior ou menor.



let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let j = 15;

if (x[j] < 5) {
    console.log('O numero é menor que 5!')
    if (x[j] % 2 == 0) {
        console.log('O numero é par!')
    } else if (x[j] % 2 != 0) {
        console.log('É um numero impar!', x[j])
    } else {
        console.log('É um numero indefinido')
    }
} else if (x[j] >= 5 && x[j] < 10); {
    console.log('O numero é maior ou igual a 5!')
    if (x[j] % 2 == 0 && x[j] < 10) {
        console.log('O numero é par!', x[j])
    } else if (x[j] % 2 != 0 && x[j] < 10) {
        console.log('É um numero impar!', x[j])

    } else {
        if (j == 10)
            console.log('O numero é indefinido pois é maior do que 10!', j++)
        else {
            console.log('O numero é indefinido, pois é maior do que 10!', j)
        }
    }
};

10. Simulador de Empréstimo:    - Desenvolva um programa que simula um sistema de empréstimo, 
determinando se um cliente é elegível com base na renda, idade e histórico de crédito.
*/

let renda = 3000;
let idade = 25;
let hist_cred = 2500;


if (idade < 25) {
    console.log('Idade:',idade)
    console.log('Emprestimo Negado!')
} else if (idade > 65) {
    console.log('Idade:',idade)
    console.log('Emprestimo negado!')
} else {
    console.log('Idade:', idade)
    console.log('elegivel![x]')

    if (renda < 1500) {
        console.log('Renda:', renda)
        console.log('Emprestimo negado!')
    } else {
        console.log('Renda:', renda)
        console.log('elegivel![x]')
        if(hist_cred < 2000){
            console.log('Historico de credito:',hist_cred)
            console.log('Emprestimo negado!')
        } else {
            console.log('Histórico de credito:',hist_cred)
            console.log('elegivel![x]')
            console.log('Parabens!Vcoê foi aprovado em todos os critérios!')
        }
    };
};

