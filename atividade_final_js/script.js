document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('novaTarefa').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            adicionarTarefa();
        }
    });
});

// Função para adicionar uma tarefa na lista de To-Do
function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    const tarefa = input.value.trim();
    if (tarefa) {
        const lista = document.getElementById('listaDeTarefas');
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span class="tarefa-texto">${tarefa}</span>
            <div>
                <button class="btn btn-success btn-sm mr-2" onclick="marcarComoConcluida(this)">Concluir</button>
                <button class="btn btn-warning btn-sm mr-2" onclick="editarTarefa(this)">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="removerTarefa(this)">Remover</button>
            </div>
        `;
        lista.appendChild(li);
        input.value = '';
    }
}

// Função para marcar uma tarefa como concluída
function marcarComoConcluida(button) {
    const li = button.parentNode.parentNode;
    const tarefaTexto = li.querySelector('.tarefa-texto');
    tarefaTexto.classList.toggle('completed');
}

// Função para editar uma tarefa
function editarTarefa(button) {
    const li = button.parentNode.parentNode;
    const tarefaTexto = li.querySelector('.tarefa-texto');
    const tarefaAtual = tarefaTexto.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.value = tarefaAtual;

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            tarefaTexto.textContent = input.value.trim();
            li.replaceChild(tarefaTexto, input);
        }
    });

    input.addEventListener('blur', function () {
        tarefaTexto.textContent = input.value.trim();
        li.replaceChild(tarefaTexto, input);
    });

    li.replaceChild(input, tarefaTexto);
    input.focus();
}

// Função para remover uma tarefa da lista de To-Do
function removerTarefa(button) {
    const li = button.parentNode.parentNode;
    li.remove();
}

let contadorCampos = 0;

function adicionarCampo() {
    contadorCampos++;

    const formulario = document.getElementById('formulario');

    const novoCampo = document.createElement('div');
    novoCampo.className = 'form-field';

    novoCampo.innerHTML = `
        <div class="field-container">
            <select class="custom-select" onchange="mudarTipoCampo(this, ${contadorCampos})">
                <option value="text">Campo de Texto</option>
                <option value="checkbox">Caixa de Seleção</option>
                <option value="button">Botão</option>
            </select>
            <input type="text" id="campo${contadorCampos}" class="form-control" placeholder="Campo ${contadorCampos}">
            <button class="btn btn-danger" type="button" onclick="removerCampo(this)">Remover</button>
        </div>
    `;

    formulario.appendChild(novoCampo);
}

function mudarTipoCampo(select, id) {
    const tipo = select.value;
    const campo = document.getElementById(`campo${id}`);
    
    if (tipo === 'text') {
        campo.type = 'text';
        campo.placeholder = `Campo ${id}`;
    } else if (tipo === 'checkbox') {
        campo.type = 'checkbox';
        campo.placeholder = '';
        campo.value = '';
    } else if (tipo === 'button') {
        campo.type = 'button';
        campo.value = `Botão ${id}`;
        campo.placeholder = '';
    }
}

function removerCampo(botao) {
    const campo = botao.closest('.form-field');
    campo.remove();
}


// Variáveis globais para a galeria de imagens
let indiceAtual = 0;
const imagens = document.querySelectorAll('.grid-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('imagemModal');

// Função para abrir o modal de visualização de imagem
function abrirModal(imgElement) {
    modalImg.src = imgElement.src;
    indiceAtual = Array.from(imagens).indexOf(imgElement);
    modal.style.display = 'block';
    modal.classList.add('show');
    verificarBotoes();
}

// Função para fechar o modal de visualização de imagem
function fecharModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        modalImg.src = '';
    }, 300);
}

// Função para exibir a imagem anterior no modal
function mostrarAnterior(event) {
    event.stopPropagation();
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    modalImg.src = imagens[indiceAtual].src;
    verificarBotoes();
}

// Função para exibir a próxima imagem no modal
function mostrarProxima(event) {
    event.stopPropagation();
    indiceAtual = (indiceAtual + 1) % imagens.length;
    modalImg.src = imagens[indiceAtual].src;
    verificarBotoes();
}

// Função para verificar a exibição dos botões anterior e próxima
function verificarBotoes() {
    document.querySelector('.anterior').style.display = indiceAtual === 0 ? 'none' : 'block';
    document.querySelector('.proxima').style.display = indiceAtual === imagens.length - 1 ? 'none' : 'block';
}

// Função para ordenar a tabela pelo índice da coluna
function sortTable(columnIndex) {
    const table = document.getElementById('dataTable');
    const rows = Array.from(table.rows).slice(1);
    const isAscending = table.rows[0].cells[columnIndex].classList.toggle('sort-asc');
    table.rows[0].cells[columnIndex].classList.toggle('sort-desc', !isAscending);

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent;
        const cellB = rowB.cells[columnIndex].textContent;
        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    rows.forEach(row => table.tBodies[0].appendChild(row));
}

// Função para filtrar a tabela com base nos valores de entrada
function filterTable() {
    const filterName = document.getElementById('filterName').value.toLowerCase();
    const filterAge = document.getElementById('filterAge').value.toLowerCase();
    const rows = document.querySelectorAll('#dataTable tbody tr');

    rows.forEach(row => {
        const nameCell = row.cells[0].textContent.toLowerCase();
        const ageCell = row.cells[1].textContent.toLowerCase();
        row.style.display = (nameCell.includes(filterName) && ageCell.includes(filterAge)) ? '' : 'none';
    });
}

// Variáveis globais para o carrinho de compras
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }
    atualizarCarrinho();
}

// Função para remover um produto do carrinho
function removerDoCarrinho(nome) {
    carrinho = carrinho.filter(item => item.nome !== nome);
    atualizarCarrinho();
}

// Função para alterar a quantidade de um produto no carrinho
function alterarQuantidade(nome, quantidade) {
    const item = carrinho.find(item => item.nome === nome);
    if (item) {
        item.quantidade = parseInt(quantidade);
        if (item.quantidade <= 0) {
            removerDoCarrinho(nome);
        } else {
            atualizarCarrinho();
        }
    }
}

// Função para atualizar a exibição do carrinho de compras
function atualizarCarrinho() {
    const carrinhoItens = document.getElementById('carrinhoItens');
    carrinhoItens.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const itemTotal = item.preco * item.quantidade;
        total += itemTotal;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-carrinho';
        itemDiv.innerHTML = `
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2)}</span>
            <input type="number" class="form-control" value="${item.quantidade}" min="0" onchange="alterarQuantidade('${item.nome}', this.value)">
            <span>R$ ${itemTotal.toFixed(2)}</span>
            <button class="btn btn-danger btn-sm" onclick="removerDoCarrinho('${item.nome}')">Remover</button>
        `;
        carrinhoItens.appendChild(itemDiv);
    });

    document.getElementById('totalCarrinho').innerText = total.toFixed(2);
}
