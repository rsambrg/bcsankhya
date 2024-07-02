package com.atividade;

import java.util.ArrayList;
import java.util.List;

public class Conversao {
    public static List<Integer> convertInteiros(List<String> strings) {
        List<Integer> inteiros = new ArrayList<>();
          
        for (String str : strings) {
            try {
                inteiros.add(Integer.parseInt(str));
            } catch (NumberFormatException e) {
                try {
                    throw new InvalidTypeConversionException("Falha ao converter string para inteiro: " + str);
                } catch (InvalidTypeConversionException ex) {
                    System.err.println(ex.getMessage());
                    // O programa continua a tentar converter as outras strings
                }
            }
        }
        
        return inteiros;
    }
}
