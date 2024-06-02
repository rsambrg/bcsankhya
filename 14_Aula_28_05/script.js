function verificarIdade() {
    var idade = document.getElementById('idade').value;
    var resultado = document.getElementById('resultado');
    if (idade >= 0 && idade <= 12) {
        resultado.textContent = "Criança";
    } else if (idade > 12 && idade < 18) {
        resultado.textContent = "Adolescente";
    } else if (idade >= 18 && idade < 60) {
        resultado.textContent = "Adulto";
    } else if (idade >= 60 && idade <= 120) {
        resultado.textContent = "Idoso";
    } else {
        resultado.textContent = "Idade Inválida";
    }
}

function verificarMes() {
    var mes = document.getElementById('mes').value;
    var resultado = document.getElementById
        ('resultado2');
    switch (mes) {
        case "1":
            resultado.textContent = "Janeiro: Primeiro Mês do Ano.";
            break;
        case "2":
            resultado.textContent = "Fevereiro: Segundo Mês do Ano.";
            break;
        default:
            resultado.textContent = "Mês Inválido";
    }
};

/**ESTRUTURAS DE REPETIÇÃO
 * While-loop
 * do...while
 */
// let idade = 15;
// while (idade < 18){
//     console.log(idade);
//     // idade = idade + 1; 
//     idade++;
// }
// let count = 0;
// while(count <5){
//     // String Template Literal
//     console.log(`O contador atual é ${count}`);
//     count++;
// }
// do{
//     console.log(`O contador atual é ${count}`);
//     count++;
// }while(count < 5);


// let num1 = 5;
// let num2 = 10;
// let sum = num1 + num2;
// console.log('A soma de ' + num1 + ' e ' + num2 + ' é ' + sum + '.');
// console.log(`A soma de ${num1} + ${num2} é ${sum}.`);

// For--loop
// for(let i = 0; i < 10; i++){
//     console.log(`Contador atual é ${i}`)
// }
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
// for(let i=0; i< frutas.length; i++){
//     console.log(`A fruta é ${frutas[i]}`)
// }
/*
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
// for...of
for (const x of frutas){
    console.log(`A fruta é ${x}`)
}
*/

/**FOR...IN
 * 
 */
// const pessoas = {nome: 'Adriano', idade: 41, cidade: 'Mossoró-RN'};
// for (const y in pessoas){
//     console.log(`${y}: ${pessoas[y]}`)
// }

// const sala = [
//     {nome: 'Adriano', idade: 41, cidade: 'Mossoró-RN'},
//     {nome: 'Neto', idade: 36, cidade: 'Uberlândia-MG'},
//     {nome: 'Luciana', idade: 42, cidade: 'Rio de Janeiro - RJ'}
// ];

// for(const pcd of sala){
//     for(const key in pcd){
//         console.log(`${key}: ${pcd[key]}`);
//     }
//     console.log("-------");
// }

// Método forEach
// Sintaxe array.forEach(callback(elemento, index, array), thisArg);

// const numeros = [1,2,3,4,5,6,7,8,9,10];
// numeros.forEach(function(number){
//     console.log(number);
// });

// numeros.forEach(function(number, index){
//     console.log(`Index: ${index}, Número: ${number}`);
// });

// const sala = [
//     {nome: 'Adriano', idade: 41, cidade: 'Mossoró-RN'},
//     {nome: 'Neto', idade: 36, cidade: 'Uberlândia-MG'},
//     {nome: 'Luciana', idade: 42, cidade: 'Rio de Janeiro - RJ'}
// ];
// sala.forEach(function(alunos){
//     console.log(`${alunos.nome} tem ${alunos.idade} e mora em ${alunos.cidade}`);
// })

const nomes = ['Douglas', 'Cristian', 'Anajara'];
const idades = [30, 25, 35];
const combinacao = nomes.map((nome, index) => {
    return { nome: nome, idade: idades[index] }
});
console.log(combinacao);

const combina = nomes.map((nome, index) => [nome, idades[index]]);

console.log(combina);

const combina2 = [];
nomes.forEach((nome, index) => {
    combina2.push({ nome: nome, idade: idades[index] });
});
console.log(combina2);
console.log("---------------");
const combina3 = [];
for (let i = 0; i < nomes.length; i++) {
    combina3.push({ nome: nomes[i], idade: idades[i] });
}
console.log(combina3);
