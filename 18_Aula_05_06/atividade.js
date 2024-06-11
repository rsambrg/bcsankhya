const invalido = (texto) => texto = 'Digite um número valido!';

class forma_01 {

    calcularArea_01() {
        throw new Error('Metodo area01() deve ser implementado')
    }
    calcularPerimetro_01() {
        throw new Error('Metodo perimetro01() deve ser implementado')
    }
}

class Retangulo_01 extends forma_01 {

    constructor(largura_01, altura_01) {
        super();
        this.largura_01 = largura_01;
        this.altura_01 = altura_01;
    }

    calcularArea_01() {
        return this.altura_01 * this.largura_01;
    }

    calcularPerimetro_01() {
        return 2 * (this.largura_01 + this.altura_01);
    }
}
class Circulo_01 extends forma_01 {
    constructor(raio_01) {
        super();
        this.raio_01 = raio_01;
    }

    calcularArea_01() {
        return this.raio_01 * this.raio_01 * 3.14;
    }

    calcularPerimetro_01() {
        return this.raio_01 * 2 * 3.14;
    }
}

class Triangulo_01 extends forma_01 {
    constructor(base_01, altura_01, lado_01) {
        super();
        this.base_01 = base_01;
        this.altura_01 = altura_01;
        this.lado_01 = lado_01;
    }

    calcularArea_01() {
        return (this.base_01 * this.altura_01) / 2;
    }

    calcularPerimetro_01() {
        return this.lado_01 * 3;
    }
}

function calculoRetangulo_01() {
    var altura_01 = parseFloat(document.getElementById('01_01_01').value);
    var largura_01 = parseFloat(document.getElementById('01_01_02').value);
    var resultado = document.getElementById('res_01_01');
    var total = '';

    if (!isNaN(altura_01) || !isNaN(largura_01)) {
        const retangulo = new Retangulo_01(altura_01, largura_01);
        const area_01 = retangulo.calcularArea_01();
        const perimetro_01 = retangulo.calcularPerimetro_01();
        total = `Área: ${area_01}, Perímetro: ${perimetro_01}`;
    } else {
        total = invalido();
    }


    resultado.innerHTML = total;
}

function calculoCirculo_01() {
    var raio = parseFloat(document.getElementById('01_02').value);
    var resultado = document.getElementById('res_01_02');
    var total = '';

    total += raio;

    if (!isNaN(raio)) {
        const circulo = new Circulo_01(raio);
        const area = circulo.calcularArea_01();
        const perimetro = circulo.calcularPerimetro_01()
        total = `Área: ${area}, Perímetro: ${perimetro}`;

    } else {
        total = invalido();
    }


    resultado.innerHTML = total;
}

function calculoTriangulo_01() {
    var base = parseFloat(document.getElementById('01_03_01').value);
    var altura = parseFloat(document.getElementById('01_03_02').value);
    var lado = parseFloat(document.getElementById('01_03_03').value);
    var resultado = document.getElementById('res_01_03');
    var total = '';

    if (!isNaN(base) && !isNaN(altura) && !isNaN(lado)) {
        const triangulo = new Triangulo_01(base, altura, lado);
        const area = triangulo.calcularArea_01();
        const perimetro = triangulo.calcularPerimetro_01();
        total = `Area: ${area} Perimetro: ${perimetro}`;
    } else {
        total = invalido();
    }

    resultado.innerHTML = total;
}

class JogodaVelha {
    constructor() {
        this.jogadorAtual = 'X';
        this.movimentos = { X: [], O: [] };
    }

    alternarJogador() {
        this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
        document.getElementById('jogador_02').innerText = this.jogadorAtual;
    }

    pontuacao(id) {
        const elemento = document.getElementById(id);

        if (elemento.innerText === 'X' || elemento.innerText === 'O') {
            return;
        }

        elemento.innerText = this.jogadorAtual;
        this.movimentos[this.jogadorAtual].push(id);

        if (this.verificarVencedor(this.movimentos[this.jogadorAtual])) {
            document.getElementById('res_02').innerText = `${this.jogadorAtual} venceu!`;
            this.desativarTabuleiro();
        } else {
            this.alternarJogador();
        }
    }

    verificarVencedor(movimentos) {
        const sequenciasVitoria = [
            ['0101', '0102', '0103'],
            ['0201', '0202', '0203'],
            ['0301', '0302', '0303'],
            ['0101', '0201', '0301'],
            ['0102', '0202', '0302'],
            ['0103', '0203', '0303'],
            ['0101', '0202', '0303'],
            ['0301', '0202', '0103']
        ];

        return sequenciasVitoria.some(sequencia =>
            sequencia.every(posicao => movimentos.includes(posicao))
        );
    }

    desativarTabuleiro() {
        const elementos = document.querySelectorAll('#tabuleiro_02 span');
        elementos.forEach(el => el.onclick = null);
    }

    reset() {
        this.jogadorAtual = 'X';
        this.movimentos = { X: [], O: [] };
        document.getElementById('jogador_02').innerText = this.jogadorAtual;
        document.getElementById('res_02').innerText = '';

        const elementos = document.querySelectorAll('#tabuleiro_02 span');
        elementos.forEach(el => {
            el.innerText = el.id;
            el.onclick = () => this.pontuacao(el.id);
        });
    }
}

const jogo = new JogodaVelha();

window.jogo = jogo;

class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }

    pesquisarContato(nome) {
        return this.contatos.find(contato => contato.nome === nome);
    }

    listarContatos() {
        return this.contatos;
    }
}

let minhaAgenda = new Agenda();

function gestaodecontatos() {
    let nome = document.getElementById('03_01').value;
    let telefone = document.getElementById('03_02').value;
    let email = document.getElementById('03_03').value;

    let novoContato = new Contato(nome, telefone, email);
    minhaAgenda.adicionarContato(novoContato);

    document.getElementById('res_03').innerText = 'Contato adicionado com sucesso!';

    // Limpar os campos de input
    document.getElementById('03_01').value = '';
    document.getElementById('03_02').value = '';
    document.getElementById('03_03').value = '';
}


let minhaConta;

function criarConta() {
    let numeroConta = document.getElementById('numeroConta').value;
    minhaConta = new ContaBancaria(numeroConta);
    document.getElementById('res_04').innerText = `Conta ${numeroConta} criada com sucesso!`;
}

function depositar() {
    let valor = parseFloat(document.getElementById('valor').value);
    if (minhaConta) {
        minhaConta.depositar(valor);
        document.getElementById('res_04').innerText = `Depósito de R$${valor} realizado com sucesso! Saldo atual: R$${minhaConta.saldo}`;
    } else {
        document.getElementById('res_04').innerText = 'Por favor, crie uma conta primeiro.';
    }
}

function sacar() {
    let valor = parseFloat(document.getElementById('valor').value);
    if (minhaConta) {
        minhaConta.sacar(valor);
        document.getElementById('res_04').innerText = `Saque de R$${valor} realizado com sucesso! Saldo atual: R$${minhaConta.saldo}`;
    } else {
        document.getElementById('res_04').innerText = 'Por favor, crie uma conta primeiro.';
    }
}

function verificarSaldo() {
    if (minhaConta) {
        document.getElementById('res_04').innerText = `Saldo atual: R$${minhaConta.verificarSaldo()}`;
    } else {
        document.getElementById('res_04').innerText = 'Por favor, crie uma conta primeiro.';
    }
}

class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log('O valor do depósito deve ser positivo.');
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        } else if (valor > this.saldo) {
            console.log('Saldo insuficiente para realizar o saque.');
        } else {
            console.log('O valor do saque deve ser positivo.');
        }
    }

    verificarSaldo() {
        return this.saldo;
    }
}


class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
}

class CarrinhoDeCompras {
    constructor() {
        this.itens = [];
    }

    adicionarProduto(produto, quantidade) {
        if (produto.quantidadeEmEstoque >= quantidade) {
            this.itens.push({ produto, quantidade });
            produto.quantidadeEmEstoque -= quantidade;
        } else {
            console.log(`Quantidade insuficiente de ${produto.nome} em estoque.`);
        }
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
    }

    finalizarCompra() {
        const total = this.calcularTotal();
        this.itens = []; // Esvazia o carrinho após a compra
        return total;
    }
}

let produtos = [];
let meuCarrinho = new CarrinhoDeCompras();

function criarProduto() {
    let nome = document.getElementById('nomeProduto').value;
    let preco = parseFloat(document.getElementById('precoProduto').value);
    let quantidade = parseInt(document.getElementById('quantidadeEstoque').value);

    let novoProduto = new Produto(nome, preco, quantidade);
    produtos.push(novoProduto);

    document.getElementById('res_05').innerText = `Produto ${nome} criado com sucesso!`;
}

function adicionarAoCarrinho() {
    let nomeProduto = document.getElementById('nomeProdutoCarrinho').value;
    let quantidade = parseInt(document.getElementById('quantidadeCarrinho').value);

    let produto = produtos.find(p => p.nome === nomeProduto);
    if (produto) {
        meuCarrinho.adicionarProduto(produto, quantidade);
        document.getElementById('res_05').innerText = `Produto ${nomeProduto} adicionado ao carrinho. Quantidade: ${quantidade}`;
    } else {
        document.getElementById('res_05').innerText = `Produto ${nomeProduto} não encontrado.`;
    }
}

function finalizarCompra() {
    let total = meuCarrinho.finalizarCompra();
    document.getElementById('res_05').innerText = `Compra finalizada. Total: R$${total.toFixed(2)}`;
}