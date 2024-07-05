package com.atividade05;

public class Sobremesa extends Refeicao {
    public Sobremesa(String nome, double preco){
        super(nome, preco);
    }

    @Override
    public double calcularValorTotal(){
        return getPreco();
    }

    @Override
    public void imprimirDetalhes(){
        System.out.println("Sobremesa: "+ getNome()+ " - Preço: "+ getPreco());
    }
}
