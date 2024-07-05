package com.atividade05;

public class Main {
    public static void main(String[] args) {
        Pedido pedido = new Pedido();

        Refeicao Entrada = new Entrada("Salada", 15.00);
        Refeicao PrincipalPrato = new PrincipalPrato("Bife com fritas", 30.00);
        Refeicao Sobremesa = new Sobremesa("Sorvete", 10.00);

        pedido.adicionarRefeicao(Entrada);
        pedido.adicionarRefeicao(PrincipalPrato);
        pedido.adicionarRefeicao(Sobremesa);

        pedido.imprimirPedido();
    }
}
