// Arrow Functions

// Funcção Tradicional
function soma(a,b){
    return a+b;
}
// Arrow Function
const soma = (a,b) => a + b;
// Retorno Implícito
const quadrado = x => x*x;
// Formas de Arrow Functions
// Sem argumentos
const semArgumentos = () => console.log("Sem Argumentos");
semArgumentos();
// Com um argumento
const umArgumento = x => x * 2;
console.log(umArgumento(5));
// Com multiplos argumentos
const multiplosArgumentos = (a,b) => a + b;
console.log(multiplosArgumentos(3, 4));

// Corpo de Função com Multiplas linhas
const soma = (a, b) => {
    const resultado = a + b;
    return resultado;
};
console.log(soma(2, 3));
// Funções sem retorno (void functions)
const logMensagem = mensagem => {
    console.log(mensagem);
};
logMensagem('Olá, mundo!');

// Funções com Objetos como Retorno
const criarObjeto = (chave, valor) => ({ [chave]: valor });
console.log(criarObjeto('nome', 'João')); 

//  Funções Anônimas
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); //[2,4,6,8,10]

const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2,4]

const somaTotal = numeros.reduce((acumulador, n) => acumulador + n, 0); 
console.log(somaTotal);//15

//Funções como Propriedades de Objetos
const objeto = {
    valor: 42,
    mostrarValor: () => console.log(objeto.valor)
};
objeto.mostrarValor(); //42

//Funções de Ordem Superior
const multiplicarPor = fator => numero => numero * fator;
const multiplicarPorDois = multiplicarPor(2);
//numero => numero * 2;
console.log(multiplicarPorDois(5)); //10
//5 * 2

//Declaraçãp com async
async function minhaFuncao() {
    return "Hello, World!";
}
minhaFuncao().then(console.log);

//
async function buscarDados() {
    let dados = await fetch("https://api.example.com/dados");
    let json = await dados.json();
    return json;
}
buscarDados().then(dados => console.log(dados));


/*

### Intermediário

6. **Filtrar Números Pares**
   - Crie uma arrow function que receba um array de números e retorne um novo array contendo apenas os números pares.
   ```javascript
   const filtrarPares = numeros => numeros.filter(n => n % 2 === 0);
   ```
*/

/*

7. **Calcular Média**
   - Crie uma arrow function que receba um array de números e retorne a média dos números.
   ```javascript
   const calcularMedia = numeros => numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
   ```
*/

/*

8. **Verificar Palíndromo**
   - Crie uma arrow function que receba uma string e retorne `true` se for um palíndromo e `false` caso contrário.
   ```javascript
   const verificarPalindromo = str => str === str.split('').reverse().join('');
   ```
*/

/*

9. **Dobrar Valores**
   - Crie uma arrow function que receba um array de números e retorne um novo array com cada valor dobrado.
   ```javascript
   const dobrarValores = numeros => numeros.map(n => n * 2);
   ```
*/

/*

10. **Calcular Fatorial**
    - Crie uma arrow function que receba um número e retorne o seu fatorial.
    ```javascript
    const fatorial = n => n === 0 ? 1 : n * fatorial(n - 1);
    ```
*/

/*

### Avançado

11. **Matriz Transposta**
    - Crie uma arrow function que receba uma matriz (array de arrays) e retorne a sua transposta.
    ```javascript
    const transposta = matriz => matriz[0].map((_, colIndex) => matriz.map(row => row[colIndex]));
    ```
*/

/*

12. **Remover Duplicatas**
    - Crie uma arrow function que receba um array e retorne um novo array sem elementos duplicados.
    ```javascript
    const removerDuplicatas = arr => [...new Set(arr)];
    ```
*/

/*

13. **Mesclar Arrays**
    - Crie uma arrow function que receba dois arrays e retorne um novo array contendo todos os elementos dos dois arrays, sem duplicatas.
    ```javascript
    const mesclarArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
    ```
*/

/*

14. **Contar Ocorrências**
    - Crie uma arrow function que receba uma string e retorne um objeto com a contagem de cada caractere na string.
    ```javascript
    const contarOcorrencias = str => str.split('').reduce((acc, char) => {
        acc[char] = acc[char] ? acc[char] + 1 : 1;
        return acc;
    }, {});
    ```
*/

/*

15. **Compor Funções**
    - Crie uma arrow function que receba duas funções `f` e `g` e retorne uma nova função que represente a composição `f(g(x))`.
    ```javascript
    const comporFuncoes = (f, g) => x => f(g(x));
    ```
*/


