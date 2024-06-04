const invalido = (texto) => texto = 'Digite um numero valido para prosseguir!';
const invalido_f = (texto) => texto = 'Digite uma frase ou palavra válida para prosseguir!';
/*
### Básico
1. **Soma de Dois Números**
   - Crie uma arrow function que receba dois números e retorne a soma deles.
   ```javascript
   const soma = (a, b) => a + b;
 ```
*/
const soma = (a, b) => a + b;

function somaDois() {
    var n01 = parseInt(document.getElementById('01_01').value);
    var n02 = parseInt(document.getElementById('01_02').value);
    var res = document.getElementById('01_res');
    var total = '';

    if (!isNaN(n01) || !isNaN(n02)) {
        total += soma(n01, n02);
    } else {
        total += 'digita um numero!';
    }

    res.innerHTML = total;
}

/*
2. **Quadrado de um Número**
   - Crie uma arrow function que receba um número e retorne o seu quadrado.
   ```javascript
   const quadrado = x => x * x;
   ```
*/

const quadrado2 = x => x * x;

function quadrado() {
    var num = parseInt(document.getElementById('02').value);
    var res = document.getElementById('02_res');
    var total = '';

    if (!isNaN(num)) {
        total = quadrado2(num);
    } else {
        total += 'digite um numero valido';
    }

    res.innerHTML = total;
}


/*
3. **Verificar Maioridade**
   - Crie uma arrow function que receba uma idade e retorne `"Maior de Idade"` se a idade for maior ou igual a 18 e `"Menor de Idade"` caso contrário.
   ```javascript
   const verificarMaioridade = idade => idade >= 18 ? "Maior de Idade" : "Menor de Idade";
   ```
*/

const verificarMaioridade = idade => idade >= 18 ? "Maior de Idade" : "Menor de Idade";

function verfiIdade() {
    var num = parseInt(document.getElementById('03').value);
    var res = document.getElementById('03_res');
    var total = '';

    if (!isNaN(num)) {
        total = verificarMaioridade(num);
    } else {
        total += 'digite uma idade válida!'
    }

    res.innerHTML = total;
}
/*

4. **Calcular Área do Retângulo**
   - Crie uma arrow function que receba a largura e a altura de um retângulo e retorne a área.
   ```javascript
   const areaRetangulo = (largura, altura) => largura * altura;
   ```
*/
const areaRetangulo = (largura, altura) => largura * altura;

function funcretangulo() {
    var larg = parseInt(document.getElementById('04_01').value);
    var alt = parseInt(document.getElementById('04_02').value);
    var res = document.getElementById('04_res');
    var total = '';

    if (!isNaN(larg) || !isNaN(alt)) {
        total += areaRetangulo(larg, alt);
    } else {
        total = invalido();
    }
    res.innerHTML = total;
}


/*

5. **Convertendo para Maiúsculas**
   - Crie uma arrow function que receba uma string e a retorne em maiúsculas.
   ```javascript
   const paraMaiusculas = str => str.toUpperCase();
   ```
*/
const paraMaiusculas = str => str.toUpperCase();
function convertMasc() {
    var frase = document.getElementById('05').value;
    var res = document.getElementById('05_res');
    var total = '';

    if (frase.trim() !== '') {
        total = paraMaiusculas(frase);
    } else {
        total = invalido();
    }

    res.innerHTML = total;
}
/*

### Intermediário

6. **Filtrar Números Pares**
   - Crie uma arrow function que receba um array de números e retorne um novo array contendo apenas os números pares.
   ```javascript
   
   ```
*/
const pares = numeros => numeros.filter(n => n % 2 === 0);

var n_ar_06 = [];
function fun06() {
    var num = parseInt(document.getElementById('06').value);
    var res = document.getElementById('06_res');
    var total = '';
    var y = 0;

    if (!isNaN(num)) {
        n_ar_06.push(num);
        pares(n_ar_06, num);
        total += pares(n_ar_06, num);

    } else {
        total = invalido();
    }

    res.innerHTML = total;
}
/*

7. **Calcular Média**
   - Crie uma arrow function que receba um array de números e retorne a média dos números.
   ```javascript
   
   ```
*/
const media = (soma, ar_07_m) => soma / ar_07_m.length;
var ar_07 = [];
var i_07 = 0;
function fun07() {
    var num = parseInt(document.getElementById('07').value);
    var res = document.getElementById('07_res');
    var total = '';

    if (!isNaN(num)) {
        ar_07.push(num);
        i_07 = num + i_07;
        total += 'Numeroa: ' + ar_07 + '<br> Quantidade de números: ' + ar_07.length + '<br>';
        total += media(i_07, ar_07);
    } else {
        total = invalido();
    }

    res.innerHTML = total;
}
/*

8. **Verificar Palíndromo**
   - Crie uma arrow function que receba uma string e retorne `true` se for um palíndromo e `false` caso contrário.
   ```javascript
   
   ```
*/
const verificarPalindromo = str => str === str.split('').reverse().join('');
function fun08() {
    var frase = document.getElementById('08').value;
    var res = document.getElementById('08_res');
    var total = '';

    if (frase.trim() !== '') {
        total += verificarPalindromo(frase);
    } else {
        total = invalido_f();
    }

    res.innerHTML = total;
}
/*

9. **Dobrar Valores**
   - Crie uma arrow function que receba um array de números e retorne um novo array com cada valor dobrado.
   ```javascript
   
   ```
*/

const dobravalor = ar_09_01 => ar_09_01.map(n => n * 2);
var ar_09 = [];
function fun09() {
    var num = parseInt(document.getElementById('09').value);
    var res = document.getElementById('09_res');
    var total = '';

    if (!isNaN(num)) {
        ar_09.push(num);
        total += dobravalor(ar_09, num);
    } else {
        total = invalido();
    }

    res.innerHTML = total;
}
/*

10. **Calcular Fatorial**
    - Crie uma arrow function que receba um número e retorne o seu fatorial.
    ```javascript
    
    ```
*/

const fatorial = n => n === 0 ? 1 : n * fatorial(n - 1);
function fun10() {
    var num = parseInt(document.getElementById('10').value);
    var res = document.getElementById('10_res');
    var total = '';

    if (!isNaN(num)) {
        total += fatorial(num);
    } else {
        total = invalido();
    }

    res.innerHTML = total;
}
/*

### Avançado

11. **Matriz Transposta**
    - Crie uma arrow function que receba uma matriz (array de arrays) e retorne a sua transposta.
    ```javascript

    ```
*/

const transposta = matriz => matriz[0].map((_, colIndex) => matriz.map(row => row[colIndex]));

var matriz = [];
var linha = [];

function fun11() {
    var num = parseInt(document.getElementById('11').value);
    var res = document.getElementById('11_res');
    var total = '';

    if (!isNaN(num)) {
        linha.push(num);
        if (linha.length === matriz.length + 1) {
            matriz.push(linha);
            linha = [];
        }
        total += JSON.stringify(transposta(matriz));
    } else {
        total = 'Digite um número válido!';
    }

    res.innerHTML = total;
}
/*

12. **Remover Duplicatas**
    - Crie uma arrow function que receba um array e retorne um novo array sem elementos duplicados.
    ```javascript
   
    ```
*/
const removerDuplicatas = arr => [...new Set(arr)];
var ar_12 = [];
function fun12() {
    var num = parseInt(document.getElementById('12').value);
    var res = document.getElementById('12_res');
    var total = '';

    if (!isNaN(num)) {
        ar_12.push(num);
        total += removerDuplicatas(ar_12)
    } else {
        total = invalido();
    }

    res.innerHTML = total;
}
/*

13. **Mesclar Arrays**
    - Crie uma arrow function que receba dois arrays e retorne um novo array contendo todos os elementos dos dois arrays, sem duplicatas.
    ```javascript
    
    ```
*/
const mesclarArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

var ar_01_13 = [];
var ar_02_13 = [];

function addToArray1() {
    var num = parseInt(document.getElementById('13_1').value);
    if (!isNaN(num)) {
        ar_01_13.push(num);
        document.getElementById('13_1').value = '';
    } else {
        alert('Digite um número válido!');
    }
}

function addToArray2() {
    var num = parseInt(document.getElementById('13_2').value);
    if (!isNaN(num)) {
        ar_02_13.push(num);
        document.getElementById('13_2').value = '';
    } else {
        alert('Digite um número válido!');
    }
}

function fun13() {
    var res = document.getElementById('13_res');
    var total = mesclarArrays(ar_01_13, ar_02_13);
    res.innerHTML = `Array 1: ${JSON.stringify(ar_01_13)}<br>Array 2: ${JSON.stringify(ar_02_13)}<br>Mesclado: ${JSON.stringify(total)}`;
}
/*

14. **Contar Ocorrências**
    - Crie uma arrow function que receba uma string e retorne um objeto com a contagem de cada caractere na string.
    ```javascript

    ```
*/
const contarOcorrencias = str => str.split('').reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    return acc;
}, {});
function fun14() {
    var str = document.getElementById('14').value;
    var res = document.getElementById('14_res');
    var total = '';

    if (str) {
        total = JSON.stringify(contarOcorrencias(str));
    } else {
        total = 'Digite uma string válida!';
    }

    res.innerHTML = total;
}

/*

15. **Compor Funções**
    - Crie uma arrow function que receba duas funções `f` e `g` e retorne uma nova função que represente a composição `f(g(x))`.
    ```javascript
  
    ```
*/

const comporFuncoes = (f, g) => x => f(g(x));

const dobro = x => x * 2;

const adicionar3 = x => x + 3;

function fun15() {
    var num = parseInt(document.getElementById('15').value);
    var res = document.getElementById('15_res');
    var total = '';

    if (!isNaN(num)) {
        const resultado = comporFuncoes(dobro, adicionar3)(num);
        total = 'Resultado: ' + resultado;
    } else {
        total = 'Digite um número válido!';
    }

    res.innerHTML = total;
}


/*
function funNONO(){
    var num = parseInt(document.getElementById('NONO').value);
    var res = document.getElementById('NONO_res');
    var total = '';

    if(!isNaN(num)){

    }else {
        total = invalido();
    }

    res.innerHTML = total;
}
*/