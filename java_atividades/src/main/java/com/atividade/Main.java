package com.atividade;

import java.util.Arrays;
import java.util.List;
public class Main {

    //Caso de Uso 3: Conversão de Tipos
    //Desenvolva um método que recebe uma lista de strings e tenta convertê-las para inteiros. 
    //Se a conversão de uma string para inteiro falhar, deve ser lançada uma exceção personalizada `InvalidTypeConversionException` 
    //e o programa deve continuar tentando converter as outras strings da lista.

    public static void main(String[] args) {
        List<String> strings = Arrays.asList("123", "456", "abc", "789", "xyz");
        
        List<Integer> inteiros = Conversao.convertInteiros(strings);
        
        System.out.println("Inteiros convertidos com sucesso: " + inteiros);
    }
}


