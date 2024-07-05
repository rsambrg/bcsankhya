package com.atividade05;

import java.util.ArrayList;
import java.util.List;

public class Pedido {
    private final List<Refeicao> refeicoes;

    public Pedido(){
        this.refeicoes = new ArrayList<>();
    }

    public void adicionarRefeicao(Refeicao refeicao){
        refeicoes.add(refeicao);
    }

    public double calcularTotal(){
        double total = 0;
        for(Refeicao refeicao : refeicoes){
            total += refeicao.calcularValorTotal();
        }
        return total;
    }

    public void imprimirPedido(){
        for(Refeicao refeicao: refeicoes){
            refeicao.imprimirDetalhes();
        }
        System.out.println("Total: "+ calcularTotal());
    }
}
