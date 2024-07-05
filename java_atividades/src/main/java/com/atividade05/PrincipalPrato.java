package com.atividade05;

public class PrincipalPrato extends Refeicao{
     public PrincipalPrato(String nome, double preco){
        super(nome, preco);
     }

     @Override
     public double calcularValorTotal(){
        return getPreco();
     }

     @Override

     public void imprimirDetalhes(){
        System.out.println("Prato principal: " + getNome()+ " - Preço: "+getPreco());
     }
}
