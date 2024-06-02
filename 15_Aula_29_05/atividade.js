/*
1. **Função de Saudação**:
   - Crie uma função chamada `saudacao` que receba um nome como argumento e exiba uma mensagem de saudação no console.
*/
function saudacao() {
    var nome = document.getElementById('01').value;
    var res = document.getElementById('01_resultado');
    var total = '';

    if (nome.trim() !== '' && nome.length >= 3) {
        total += 'Oii!';
    } else {
        total += 'insira seu nome';
    }

    res.innerHTML = total;
}
/*
2. **Função de Soma**:
   - Crie uma função chamada `soma` que receba dois números como argumentos e retorne a soma deles.
*/

function func_soma() {
    var num_01 = parseInt(document.getElementById('02_01').value);
    var num_02 = parseInt(document.getElementById('02_02').value);
    var res = document.getElementById('02_resultado');
    var total = '';

    var soma = num_01 + num_02;

    total += 'A soma dos dois números é: ' + soma + ' espero ter ajudado!';

    res.innerHTML = total;
}

/*
3. **Função de Subtração**:
   - Crie uma função chamada `subtracao` que receba dois números como argumentos e retorne a subtração do segundo número pelo primeiro.
*/
function func_sub() {
    var num_01 = parseInt(document.getElementById('03_01').value);
    var num_02 = parseInt(document.getElementById('03_02').value);
    var res = document.getElementById('03_resultado');
    var total = '';

    var sub = num_01 - num_02;

    total += 'A subtração do segundo número pelo primeiro é: ' + sub + ' espero ter ajudado!';

    res.innerHTML = total;
}
/*
4. **Função de Multiplicação**:
   - Crie uma função chamada `multiplicacao` que receba dois números como argumentos e retorne a multiplicação deles.
*/
function func_mult() {
    var num_01 = parseInt(document.getElementById('04_01').value);
    var num_02 = parseInt(document.getElementById('04_02').value);
    var res = document.getElementById('04_resultado');
    var total = '';

    var mult = num_01 * num_02;

    total += 'A multiplicação dos dois números é: ' + mult + ' espero ter ajudado!';

    res.innerHTML = total;
}
/*
5. **Função de Divisão**:
   - Crie uma função chamada `divisao` que receba dois números como argumentos e retorne a divisão do primeiro pelo segundo.
*/

function func_div() {
    var num_01 = parseInt(document.getElementById('05_01').value);
    var num_02 = parseInt(document.getElementById('05_02').value);
    var res = document.getElementById('05_resultado');
    var total = '';

    var div = num_01 / num_02;

    total += 'A divisão entre o número 1 pelo número 2 é: ' + div + ' espero ter ajudado!';

    res.innerHTML = total;
}

/*
6. **Função de Fatorial**:
   - Crie uma função chamada `fatorial` que receba um número como argumento e retorne o fatorial desse número.
*/
function fatorial() {
    var num = parseInt(document.getElementById('06').value);
    var res = document.getElementById('06_resultado');
    var total = '';
    var k = 1;

    for (var i = 1; i <= num; i++) {
        k *= i;
        total += '' + k + ' ';
    }

    res.innerHTML = '<br>' + total + 'total:' + k;
}
/*
7. **Função para Verificar Número Primo**:
   - Crie uma função chamada `ePrimo` que receba um número como argumento e retorne `true` se o número for primo e `false` caso contrário.
*/

function primo() {
    var num = parseInt(document.getElementById('07').value);
    var res = document.getElementById('07_resultado');
    var total = '';
    var p = [2, 3, 5, 7];
    var temp;
    var y = 0;

    for (var i = 0; i <= 3; i++) {
        temp = num % p[i];
        if (temp !== 0) {
            y++;
        }
    }
    if (y !== 4 && !p.includes(num)) {
        total = num + ' não é primo';
        res.innerHTML = total;
        return false;
    } else if (y == 4 || p.includes(num)) {
        total = num + ' é primo';
        res.innerHTML = total;
        return true;
    }

}
/*
8. **Função para Calcular Média**:
   - Crie uma função chamada `media` que receba um array de números como argumento e retorne a média dos números.
*/

var n_ar_08 = [];
var res_08 = document.getElementById('08_resultado');
var continuar_08 = true;

function continua() {
    var num = parseFloat(document.getElementById('08_01').value);
    var continuar = parseInt(document.getElementById('08_02').value);
    var total = '';

    if (continuar === 1) {
        n_ar_08.push(num);
        total += 'Numero: ' + num + '<br>';
    } else if (continuar === 0) {
        continuar_08 = false;
        total += 'Até breve!<br>';
        calcularMedia();
    } else {
        total += 'Voce precisa digitar 1 numero!';
    }

    res_08.innerHTML += total;

}

function calcularMedia() {
    var soma = n_ar_08.reduce(function (acc, num) {
        return acc + num;
    });
    var media = soma / n_ar_08.length;
    res_08.innerHTML += 'Média: ' + media + '<br>';
}
/*
9. **Função para Inverter String**:
   - Crie uma função chamada `inverterString` que receba uma string como argumento e retorne a string invertida.
*/
function inverterString() {
    var frase = document.getElementById('09').value;
    var res = document.getElementById('09_resultado');
    var total = '';
    var i = 0;
    var fl = frase.length;
    total += '<span style="font-weight: bold;" >sua string:<br></span> ' + frase + '<br><span style="font-weight: bold;" >invertida:<br></span>';
    for (i = 1; i <= frase.length; i++) {
        fl--;
        total += frase[fl];
    }

    res.innerHTML = total;
}
/*
10. **Função para Contar Caracteres**:
    - Crie uma função chamada `contarCaracteres` que receba uma string e 
    um caractere como argumentos e retorne o número de vezes que o caractere aparece na string.
*/
function contarCaracteres() {
    var frase = document.getElementById('10_01').value;
    var caractere = document.getElementById('10_02').value;
    var res = document.getElementById('10_resultado');
    var y = 0;
    var total = '';


    if (caractere.length !== 1) {
        res.innerHTML = 'Insira um caractere e uma palavra ou frase!';
        return;
    }

    for (var i = 0; i <= frase.length; i++) {
        if (frase[i] == caractere) {
            y++;
            total = y;
        }
    }

    res.innerHTML = total;
}
/*
11. **Função Anônima**:
    - Crie uma função anônima e atribua-a a uma variável chamada `multiplicar`. 
    A função deve receber dois números como argumentos e retornar a multiplicação deles.
*/
function anonima() {
    var n1 = parseInt(document.getElementById('11_01').value);
    var n2 = parseInt(document.getElementById('11_02').value);
    var res = document.getElementById('11_resultado');
    var total = '';
    var m = 0;

    if (!isNaN(n1) && !isNaN(n2)) {
        multiplicar();
        total = 'Produto da multiplicação entre os dois números: ' + m;
    } else {
        total = 'Insira dois números para continuar!';
    }

    function multiplicar() {
        m = n1 * n2;
    }
    res.innerHTML = total;
}


/*
12. **Função de Ordem Superior**:
    - Crie uma função chamada `operacao` que receba dois números e uma função como argumentos. A função deve aplicar a função fornecida aos dois números e retornar o resultado.
*/

function operacao() {
    var n1 = parseInt(document.getElementById('12_01').value);
    var n2 = parseInt(document.getElementById('12_02').value);
    var func = document.getElementById('opcao');
    var escolha = func.value;
    var res = document.getElementById('12_resultado');
    var produto = 0;
    var total = '';

    if (isNaN(n1) && isNaN(n2)) {
        total += 'Digite 2 numeros para começar!'
    } else if (escolha == 1) {
        soma();
        total += produto;
    } else if (escolha == 2) {
        sub();
        total += produto;
    } else if (escolha == 3) {
        div();
        total += produto;
    } else if (escolha == 4) {
        mult();
        total += produto;
    } else if (escolha == 0) {
        total += 'Escolha uma função'
    } else {
        total += 'Voce precisa digitar dois numeros e escolhar uma função!'
    }

    function soma() {
        produto = n1 + n2;
    }
    function sub() {
        produto = n1 - n2;
    }

    function div() {
        produto = n1 / n2;
    }
    function mult() {
        produto = n1 * n2;
    }

    res.innerHTML = total;
}

/*
13. **Função de Retorno**:
    - Crie uma função chamada `criarSaudacao` que receba uma saudação como argumento e retorne uma nova função. 
    A função retornada deve receber um nome como argumento e exibir a saudação seguida pelo nome.
*/
function criarSaudacao() {
    var nome = document.getElementById('13_nome').value;
    var saudo = document.getElementById('13_saudo').value;
    var res = document.getElementById('13_resultado');
    var frase;
    var total = '';

    if (saudo.trim() !== '' && nome.trim() !== '') {
        nomeFunc();
        total += frase;
    } else {
        total = 'Insira uma saudação e um nome!'
    }

    function nomeFunc() {
        frase = ' ' + saudo + ' ' + nome;
    }

    res.innerHTML = total;
}

/*
14. **Função Recursiva**:
    - Crie uma função chamada `contagemRegressiva` que receba um número como argumento e exiba uma contagem 
    regressiva a partir desse número até 0, usando recursão.
*/
function contagemRegressiva() {
    var num = parseInt(document.getElementById('14').value);
    var res = document.getElementById('14_resultado');
    var i = 0;
    var total = '';

    recursivo(num);

    function recursivo(num) {
        if (num === 0) {
            return;
        }
        else {
            total += num + ' ';
            recursivo(num - 1);
        }
    }


    res.innerHTML = total;
}


/*
15. **Função para Calcular Fibonacci**:
    - Crie uma função chamada `fibonacci` que receba um número `n` como argumento e retorne o `n`-ésimo 
    número da sequência de Fibonacci.
*/

function fibonacci() {
    var num = parseInt(document.getElementById('15').value);
    var res = document.getElementById('15_resultado');
    var total = '';

    var a = 0;
    var b = 1;
    var temp;
    do {
        total += a + ' ';
        temp = a;
        a = b;
        b = temp + b;
        num--;
    } while (num > 0);

    res.innerHTML = total;
}

/*
16. **Função para Converter Celsius para Fahrenheit**:
    - Crie uma função chamada `celsiusParaFahrenheit` que receba uma temperatura em Celsius e retorne a 
    temperatura convertida para Fahrenheit.
*/
function celsiusParaFahrenheit() {
    var celsius = parseInt(document.getElementById('16').value);
    var res = document.getElementById('16_resultado');
    var total = '';

    if (!isNaN(celsius)) {
        var FAHRENHEIT = (celsius) * 1.8 + 32;
        total += FAHRENHEIT;
    } else {
        total = 'Insira uma temperatura em celsius para continuar!'
    }
    res.innerHTML = total;
}

/*
17. **Função para Converter Fahrenheit para Celsius**:
    - Crie uma função chamada `fahrenheitParaCelsius` que receba uma temperatura em Fahrenheit e retorne a temperatura convertida para Celsius.
*/
function fahrenheitParaCelsius() {
    var fahrenheit = parseInt(document.getElementById('17').value);
    var res = document.getElementById('17_resultado');
    var total = '';

    if (!isNaN(fahrenheit)) {
        var celsius = ((fahrenheit) - 32) / 1.8;
        total += celsius;
    } else {
        total = 'Insira uma temperatura em fahrenheit para continuar!'
    }
    res.innerHTML = total;
}
/*
18. **Função para Verificar Paridade**:
    - Crie uma função chamada `ePar` que receba um número como argumento e retorne `true` se o número for par e `false` caso contrário.
*/
function ePar() {
    var num = parseInt(document.getElementById('18').value);
    var res = document.getElementById('18_resultado');
    var total = '';

    if (num % 2 !== 0) {
        total += ' não é par!';
        res.innerHTML = total;
        return false;
    }
    if (num % 2 == 0) {
        total += ' é par!'
        res.innerHTML = total;
        return true;
    }
}
/*
19. **Função para Calcular Quadrado**:
    - Crie uma função chamada `quadrado` que receba um número como argumento e retorne o quadrado desse número.
*/
function quadrado() {
    var num = parseInt(document.getElementById('19').value);
    var res = document.getElementById('19_resultado');
    var total = '';

    if (isNaN(num)) {
        total = 'digita um numero!'
    } else {
        var quadrado = num * num;
        total += quadrado;
    }

    res.innerHTML = total;
}
/*
20. **Função para Calcular Raiz Quadrada**:
    - Crie uma função chamada `raizQuadrada` que receba um número como argumento e retorne a raiz quadrada desse número.
*/
function raizQuadrada() {
    var num = parseInt(document.getElementById('20').value);
    var res = document.getElementById('20_resultado');
    var total = '';

    if (isNaN(num)) {
        total = 'digite um numero!'
    } else {
        var raiz = num ** (1 / 2);
        total += raiz;
    }

    res.innerHTML = total;
}
/*
21. **Função para Contar Vogais**:
    - Crie uma função chamada `contarVogais` que receba uma string como argumento e retorne o número de vogais na string.
*/
function contarVogais() {
    var frase = document.getElementById('21').value;
    var res = document.getElementById('21_resultado');
    var total = '';
    var y = 0;
    var vogais = ['a', 'e', 'i', 'o', 'u'];

    if (frase.trim() == '') {
        total += 'Digite uma frase!';
    } else {
        for (var i = 0; i <= frase.length; i++) {
            for (var j = 0; j <= 4; j++) {
                if (frase[i] == vogais[j]) {
                    y++;
                    total = 'Quantidade de vogais: ' + y;
                } else {
                }
            }
        }
    }

    res.innerHTML = total;
}
/*
22. **Função para Verificar Palíndromo**:
    - Crie uma função chamada `ePalindromo` que receba uma string como argumento e retorne `true` se a string for um palíndromo e `false` caso contrário.
*/
function ePalindromo() {
    var frase = document.getElementById('22').value;
    var res = document.getElementById('22_resultado');
    var total = '';
    var y = 0;
    var fl = frase.length;

    if (frase.trim() == '') {
        total += 'Digite uma frase!'
    } else {
        var fraseLimpa = frase.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        var fl = fraseLimpa.length;
        var y = 0;

        for (var i = 0; i < fl; i++) {
            if (fraseLimpa[i] === fraseLimpa[fl - i - 1]) {
                y++;
            } else {
                break;
            }
        }

        if (y === fl) {
            total += 'A frase é um palíndromo.';
        } else {
            total += 'A frase não é um palíndromo.';
        }
    }

    res.innerHTML = total;
}
/*
23. **Função para Encontrar o Maior Número em um Array**:
    - Crie uma função chamada `maiorNumero` que receba um array de números como argumento e retorne o maior número do array.
*/
var ar_23 = [];
function maiorNumero(opcao) {
    var res = document.getElementById('23_resultado');
    var total = '';

    if (opcao === 1) {
        var num = parseInt(document.getElementById('23').value);
        if (!isNaN(num)) {
            ar_23.push(num);
            total += 'Numero inserido: ' + num + '<br>';
            total += 'Quantidade de números inseridos até agora:' + ar_23.length;
        }
    } else {
        if (ar_23.length > 0) {
            var maior = Math.max.apply(Math, ar_23);
            total += 'O maior numero inserido foi: ' + maior;
        } else {
            total = 'Nenhum numero foi inserido.'
        }
    }

    res.innerHTML = total;
}
/*
24. **Função para Ordenar um Array em Ordem Crescente**:
    - Crie uma função chamada `ordenarArray` que receba um array de números 
    como argumento e retorne o array ordenado em ordem crescente.
*/
function ordenarArray() {
    var input = document.getElementById('24').value;
    var res = document.getElementById('24_resultado');
    var total = '';

    // Verifica se o campo de entrada está vazio
    if (input.trim() === '') {
        res.innerHTML = 'Por favor, insira pelo menos um número.';
        return;
    }

    // Converte a string de entrada em um array de números
    var numeros = input.split(',').map(function (item) {
        return parseInt(item.trim());
    });

    // Ordena o array de números em ordem crescente
    numeros.sort(function (a, b) {
        return a - b;
    });

    // Exibe o array ordenado na página
    total = 'Array ordenado em ordem crescente: ' + numeros.join(', ');
    res.innerHTML = total;

}
/*
25. **Função para Filtrar Números Pares**:
    - Crie uma função chamada `filtrarPares` que receba um array de números como argumento e retorne um novo array contendo apenas os números pares.
*/
var ar_25 = [];
var ar_25_par = [];
function filtrarPares(opcao) {
    var res = document.getElementById('25_resultado');
    var total = '';

    if (opcao === 1) {
        var num = parseInt(document.getElementById('25').value);
        total += 'Numero:' + num + ' adicionado com sucesso!<br>';
        if (!isNaN(num)) {
            ar_25.push(num);
            if (num % 2 == 0) {
                ar_25_par.push(num);
                total += 'O numero ' + num + ' é par!';
            } else {
                total += 'O numero ' + num + ' é impar!';
            }
        }
    } else {
        total = 'Estes números são par:' + ar_25_par + '<br> Quantidade de números par:' + ar_25_par.length;
    }


    res.innerHTML = total;
}
/*
26. **Função para Concatenar Arrays**:
    - Crie uma função chamada `concatenarArrays` que receba dois arrays como argumentos e retorne um novo array que 
    seja a concatenação dos dois arrays.
*/
var ar_01 = [];
var ar_02 = [];
var ar_conc = [];

function concatenarArrays(opcao) {
    var res = document.getElementById('26_resultado');
    var total = '';

    if (opcao === 1) {
        var n01 = parseInt(document.getElementById('26_01').value);
        var n02 = parseInt(document.getElementById('26_02').value);

        if (!isNaN(n01) && !isNaN(n02)) {
            ar_01.push(n01);
            ar_02.push(n02);
            total = 'Array 01: ' + ar_01 + '<br> Array 02: ' + ar_02;
        } else {
            total += 'Insira um número valido!'
        }
    } else {
        var concatenar = ar_conc.concat(ar_01, ar_02);
        total += concatenar;
    }

    res.innerHTML = total;
}
/*
27. **Função de Memoização para Fatorial**:
    - Crie uma função chamada `memoFatorial` que usa memoização para otimizar o cálculo do fatorial.
*/
function memoFatorial() {
    var num = parseInt(document.getElementById('27').value);
    var res = document.getElementById('27_resultado');
    var total = '';

    function fatorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * fatorial(n - 1);
    }

    var cache = {};

    function memoizedFatorial(n) {
        if (n in cache) {
            return cache[n];
        }
        var result = fatorial(n);
        cache[n] = result;
        return result;
    }

    total = 'Fatorial de ' + num + ': ' + memoizedFatorial(num);
    res.innerHTML = total;
}
/*
28. **Função para Verificar Substring**:
    - Crie uma função chamada `contemSubstring` que receba duas strings como argumentos e retorne `true` 
    se a primeira string contiver a segunda string, e `false` caso contrário.
*/
function contemSubstring() {
    var frase1 = document.getElementById('28_01').value;
    var frase2 = document.getElementById('28_02').value;
    var res = document.getElementById('28_resultado');
    var total = '';

    if (frase1.trim() == '' || frase2.trim() == '') {
        res.innerHTML = 'Digita duas frases.';
        return false;
    } else {
        if (frase1.includes(frase2)) {
            total += 'A primeira frase contem a segunda';
            res.innerHTML = total;
            return true;
        } else {
            total += 'A primeira frase não contem a segunda';
            res.innerHTML = total;
            return false;
        }

    }

}
/*
29. **Função de Curry**:
    - Crie uma função chamada `currySoma` que usa currying para somar três números. A função deve ser chamada assim: `currySoma(a)(b)(c)`.
*/
function currySoma() {
    var n01 = parseInt(document.getElementById('29_01').value);
    var n02 = parseInt(document.getElementById('29_02').value);
    var n03 = parseInt(document.getElementById('29_03').value);
    var res = document.getElementById('29_resultado');
    var total = '';

    function calcular(n01) {
        return function (n02) {
            return function (n03) {
                return n01 + n02 + n03;
            };
        };
    }

    if (isNaN(n01) || isNaN(n02) || isNaN(n03)) {
        total += 'Por favor, insira números válidos.';
    } else {
        var soma = calcular(n01)(n02)(n03);
        total += 'O resultado da soma é: ' + soma;
    }

    res.innerHTML = total;
}
/*
30. **Função para Reduzir um Array**:
    - Crie uma função chamada `reduzirArray` que receba um array de números e uma função de redução 
    (callback) como argumentos e retorne o valor reduzido.
*/
function reduzirArray(array, callback) {
    return array.reduce(callback);
}

function calcularArray() {
    var num = document.getElementById('30').value.split(',').map(Number);
    var res = document.getElementById('30_resultado');
    var total = '';

    if (num.some(isNaN)) {
        total += 'Por favor, insira uma lista válida de números separados por vírgula.';
    } else {
        function soma(acumulador, valorAtual) {
            return acumulador + valorAtual;
        }

        var resultado = reduzirArray(num, soma);
        total += 'O valor reduzido (soma) é: ' + resultado;
    }

    res.innerHTML = total;
}
/*
31. **Função para Remover Duplicatas de um Array**:
    - Crie uma função chamada `removerDuplicatas` que receba um array como argumento e retorne um novo array sem duplicatas.
*/
function removerDuplicatas(array) {
    return [...new Set(array)];
}

function removerArray() {
    var num = document.getElementById('31').value.split(',').map(Number);
    var res = document.getElementById('31_resultado');
    var total = '';

    if (num.some(isNaN)) {
        total += 'Por favor, insira uma lista válida de números separados por vírgula.';
    } else {
        var resultado = removerDuplicatas(num);
        total += 'O array sem duplicatas é: ' + resultado.join(', ');
    }

    res.innerHTML = total;
}
/*
32. **Função de Composição**:
    - Crie uma função chamada `compor` que receba duas funções como argumentos e retorne uma nova função que é a composição das duas.
*/
function compor(f, g) {
    return function (x) {
        return f(g(x));
    };
}
function compor2() {
    var num = parseInt(document.getElementById('32').value);
    var res = document.getElementById('32_resultado');
    var total = '';

    function dobrar(x) {
        return x * 2;
    }

    function adicionarCinco(x) {
        return x + 5;
    }

    var funcaoComposta = compor(dobrar, adicionarCinco);

    if (isNaN(num)) {
        total += 'Por favor, insira um número válido.';
    } else {
        var resultado = funcaoComposta(num);
        total += 'O resultado da composição é: ' + resultado;
    }

    res.innerHTML = total;
}
/*
33. **Função para Mapear um Array**:
    - Crie uma função chamada `mapearArray` que receba um array e uma função de mapeamento (callback) 
    como argumentos e retorne um novo array com os resultados da função de mapeamento aplicada a cada elemento.
*/
function mapearArray(array, callback) {
    return array.map(callback);
}

function calcularMapeamento() {
    var num = document.getElementById('33').value.split(',').map(Number);
    var res = document.getElementById('33_resultado');
    var total = '';

    if (num.some(isNaN)) {
        total += 'Por favor, insira uma lista válida de números separados por vírgula.';
    } else {
        function dobrar(valor) {
            return valor * 2;
        }

        var resultado = mapearArray(num, dobrar);
        total += 'O array mapeado é: ' + resultado.join(', ');
    }

    res.innerHTML = total;
}

/*
34. **Função de Ordenação Personalizada**:
    - Crie uma função chamada `ordenarPersonalizado` que receba um array de objetos e uma função de comparação (callback) como argumentos e retorne o array ordenado.
*/
function ordenarPersonalizado(array, compareFunction) {
    return array.sort(compareFunction);
}

function n34() {
    var res = document.getElementById('34_resultado');
    var total = '';

    var arrayDeObjetos = [
        { nome: 'Alice', idade: 25 },
        { nome: 'Bob', idade: 30 },
        { nome: 'Charlie', idade: 20 }
    ];

    function compararPorIdade(a, b) {
        return a.idade - b.idade;
    }

    var arrayOrdenado = ordenarPersonalizado(arrayDeObjetos, compararPorIdade);

    total += 'Array ordenado: ' + JSON.stringify(arrayOrdenado);

    res.innerHTML = total;
}
/*
35. **Função para Encontrar a Intersecção de Dois Arrays**:
    - Crie uma função chamada `intersecaoArrays` que receba dois arrays como argumentos e retorne um novo array contendo os elementos que são comuns aos dois arrays.
*/

function intersecaoArrays(array1, array2) {
    return array1.filter(element => array2.includes(element));
}

function n35() {
    var res = document.getElementById('35_resultado');
    var total = '';

    var array1 = [1, 2, 3, 4, 5];
    var array2 = [3, 4, 5, 6, 7];

    var arrayIntersecao = intersecaoArrays(array1, array2);

    total += 'Interseção dos arrays: ' + JSON.stringify(arrayIntersecao);

    res.innerHTML = total;
}
