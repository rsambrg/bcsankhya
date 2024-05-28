document.getElementById('tema2').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('theme').innerHTML = "<link rel='stylesheet' href='theme2.css'>";
    

});

// Adiciona event listener ao botão "Jogos"
document.getElementById('botaojogo').addEventListener('click', function (event) {
    event.preventDefault(); // Cancela o comportamento padrão do link

    // Pega o conteúdo da div jogos_pagina
    var novoConteudo = document.getElementById('jogos_pagina').innerHTML;

    // Insere o novo conteúdo em conteudoAtual
    document.getElementById('conteudoAtual').innerHTML = novoConteudo;
});



// Função para adicionar taskbar às divs listaConteudo
function addTaskbarToLists() {
    // Seleciona todas as divs com a classe listaConteudo
    var listaConteudoDivs = document.querySelectorAll('.listaConteudo');

    // Itera sobre cada div listaConteudo
    listaConteudoDivs.forEach(function (div) {
        // Cria a taskbar
        var taskbar = document.createElement('div');
        taskbar.classList.add('taskbar');

        // Botão para fechar
        var closeButton = document.createElement('button');
        closeButton.classList.add('close-btn');
        closeButton.innerHTML = '&times;'; // Adiciona o ícone de X
        taskbar.appendChild(closeButton);

        // Botão para expandir/recolher
        var expandButton = document.createElement('button');
        expandButton.classList.add('expand-btn');
        expandButton.innerHTML = '&#9633;'; // Adiciona o ícone de quadrado
        taskbar.appendChild(expandButton);

        // Adiciona a taskbar à div
        div.insertBefore(taskbar, div.firstChild);

        // Adiciona event listener ao botão de fechar
        closeButton.addEventListener('click', function () {
            div.style.display = 'none';
        });

         // Adiciona event listener ao botão de expandir/recolher
         expandButton.addEventListener('click', function() {
            if (div.style.width === '10vw') {
                div.style.width = '70vw'; 
            } else {
                div.style.width = '10vw';
            }
        });
    });
}

// Após inserir o HTML no elemento conteudoAtual
document.querySelectorAll('.botaoTrocar').forEach(function (element) {
    element.addEventListener('click', function () {
        var conteudoAtual = document.getElementById('conteudoAtual');
        var novoConteudo = document.getElementById('boot_sankhya').innerHTML;
        conteudoAtual.innerHTML = novoConteudo;

        // Chama a função para adicionar a taskbar às divs listaConteudo
        addTaskbarToLists();

        // Adiciona event listener para alternar entre as listas
        document.querySelectorAll('.botaoTrocar').forEach(function (button) {
            button.addEventListener('click', function () {
                var targetId = this.getAttribute('data-target');
                var targetDiv = document.getElementById(targetId);

                // Esconde todas as listas
                document.querySelectorAll('.listaConteudo').forEach(function (div) {
                    div.style.display = 'none';
                });

                // Exibe a lista selecionada
                if (targetDiv.style.display === 'none') {
                    targetDiv.style.display = 'block';
                    document.getElementById('empty').style.display = 'none';
                } else {
                    targetDiv.style.display = 'none';
                    document.getElementById('empty').style.display = 'block';
                }
            });
        });
    });
});

//TASKBAR

// Não é mais necessário adicionar event listeners para os botões de fechar e expandir/recolher aqui

// Mostra a primeira caixa por padrão
showBox('box1');


document.querySelectorAll('.close-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        this.closest('.box').style.display = 'none';
    });
});

document.querySelectorAll('.expand-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        var box = this.closest('.box');
        if (box.style.width === '100%') {
            box.style.width = '350px';
        } else {
            box.style.width = '100%';
        }
    });
});

function showBox(boxId) {
    // Close all boxes
    document.querySelectorAll('.box').forEach(function (box) {
        box.style.display = 'none';
    });

    // Show the selected box
    var selectedBox = document.getElementById(boxId);
    if (selectedBox) {
        selectedBox.style.display = 'block';
    }
}

// Show the first box by default
showBox('box1');

// Add event listeners for buttons to open boxes
document.getElementById('openBox1').addEventListener('click', function () {
    showBox('box1');
});

document.getElementById('openBox2').addEventListener('click', function () {
    showBox('box2');
});

document.getElementById('openBox3').addEventListener('click', function () {
    showBox('box3');
});

