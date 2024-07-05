package com.atividade05;

public class Entrada extends Refeicao {

     public Entrada(String nome, double preco) {
         super(nome, preco);
     }

     @Override
     public double calcularValorTotal(){
        return getPreco();
     }

     @Override
     public void imprimirDetalhes() {
        System.out.println("Entrada: " + getNome()+ " - Preço: "+getPreco());
     }

}
