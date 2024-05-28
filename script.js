document.addEventListener('DOMContentLoaded', function () {
    const botaoinicio = document.getElementById('botaoinicio');
    const botaojogo = document.getElementById('botaojogo');
    const tema = document.getElementById('tema');

    // Armazenar o conteúdo da página inicial em uma variável
    const paginaInicioConteudo = document.getElementById('index.html').innerHTML;

    // Função para mostrar conteúdo
    function mostrarConteudo(conteudo) {
        document.querySelectorAll('.conteudoAtual').forEach(function (element) {
            element.innerHTML = conteudo;
        });
    }

    // Mostrar a página inicial ao carregar a página
    mostrarConteudo(paginaInicioConteudo);

    // Alternar tema
    tema.addEventListener('click', function (event) {
        event.preventDefault();

        const temaTexto = this.querySelector('a');
        if (temaTexto.innerHTML === 'Escuro') {
            document.querySelector('link[href="theme1.css"]').href = "theme2.css";
            temaTexto.innerHTML = 'Claro';
        } else {
            document.querySelector('link[href="theme2.css"]').href = "theme1.css";
            temaTexto.innerHTML = 'Escuro';
        }
    });

    // Evento de clique para o botão de início
    botaoinicio.addEventListener('click', function (event) {
        event.preventDefault();
        mostrarConteudo(paginaInicioConteudo);
    });

    // Adiciona event listener ao botão "Jogos"
    botaojogo.addEventListener('click', function (event) {
        event.preventDefault(); // Cancela o comportamento padrão do link

        // Pega o conteúdo da div jogos_pagina
        var novoConteudo = document.getElementById('jogos_pagina').innerHTML;

        // Insere o novo conteúdo em conteudoAtual
        mostrarConteudo(novoConteudo);
    });

    // Adicionando eventos de clique para os botões de trocar
    document.querySelectorAll('.botaoTrocar').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId).innerHTML;
            mostrarConteudo(targetContent);
        });
    });

    // Função para adicionar taskbar às divs listaConteudo
    function addTaskbarToLists() {
        // Seleciona todas as divs com a classe listaConteudo
        var listaConteudoDivs = document.querySelectorAll('.listaConteudo');

        if (!div.querySelector('.taskbar')) {
            var taskbar = document.createElement('div');
            taskbar.classList.add('taskbar');
            var closeButton = document.createElement('button');
            closeButton.classList.add('close-btn');
            closeButton.innerHTML = '&times;';
            taskbar.appendChild(closeButton);
            var expandButton = document.createElement('button');
            expandButton.classList.add('expand-btn');
            expandButton.innerHTML = '&#9633;';
            taskbar.appendChild(expandButton);
            div.insertBefore(taskbar, div.firstChild);

            // Aqui adicionamos o conteúdo real da lista
            var listaId = div.getAttribute('data-lista');
            var listaConteudo = document.getElementById(listaId);
            div.appendChild(listaConteudo);

            closeButton.addEventListener('click', function () {
                div.style.display = 'none';
            });
            expandButton.addEventListener('click', function () {
                if (div.style.width === '10vw') {
                    div.style.width = '70vw';
                } else {
                    div.style.width = '10vw';
                }
            });
        }

    }

    // Após inserir o HTML no elemento conteudoAtual
    document.querySelectorAll('.botaoTrocar').forEach(function (element) {
        element.addEventListener('click', function () {
            var novoConteudo = document.getElementById('boot_sankhya').innerHTML;
            document.querySelectorAll('.conteudoAtual').forEach(function (conteudoAtual) {
                conteudoAtual.innerHTML = novoConteudo;
            });

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

    // TASKBAR

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
});
