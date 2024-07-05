package com.atividade05;

public abstract  class Refeicao {
    private final String nome;
    private final double preco;

    public Refeicao(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome(){
        return nome;
    }

    public double getPreco(){
        return preco;
    }

    public abstract  double calcularValorTotal();
    public abstract void imprimirDetalhes();

}
