
import java.util.Scanner;

public class atividade01 {

    public static void main(String[] args) {
        //1. Escreva um programa que verifica se um número é positivo, negativo ou zero.
        /*
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite um numero:");
        int num = teclado.nextInt();
        if (num > 0){
            System.out.println("Numero Positivo");
        }
        if (num == 0){
            System.out.println("Numero é igual a 0");
        }
        if (num < 0){
            System.out.println("O numero é negativo");
        }
         */
 /*
        //2. Escreva um programa que calcula a média de uma lista de números fornecida pelo usuário.
        Scanner teclado_02 = new Scanner(System.in);
        Scanner numero_02 = new Scanner(System.in);
        int continua;
        int aux = 0;
        int num;
        int i = 0;

        do {
            System.out.println("Digite um numero inteiro:");
            num = numero_02.nextInt();
            System.out.println("Digite 1 para continuar e 0 para parar:");
            continua = teclado_02.nextInt();
            aux = num + aux;
            i++;
            if (continua == 0) {
                float media = (aux / i);
                System.out.println("A media é: "+ media);
            }
        } while (continua == 1);
         */
        //3. Escreva um programa que imprime os números de 1 a 100. Mas, para múltiplos de 3, imprima "Fizz" em vez do número, e para múltiplos de 5, imprima "Buzz". Para números que são múltiplos de ambos (3 e 5), imprima "FizzBuzz".
        /*
        int i= 0;

        do { 
    
            if( i % 3 == 0 && i % 5 != 0 ){
                System.out.println( i + " Fizz");
            }else if( i % 5 == 0 && i % 3 != 0){
                System.out.println( i + " Buzz");
            }else if ( i % 5 == 0 && i % 3 == 0){
                System.out.println( i + " FizzBuzz");
            }else {
                System.out.println(i);
            }
            i++;
        } while (i<=100);
        
       //4. Escreva um programa que imprime os fatores de um número fornecido pelo usuário.
       System.out.println("Digite um numero:");
       Scanner teclado = new Scanner(System.in);
       int num = teclado.nextInt();
       int i = 1;
       int y = 0;
        do { 
            i++;
            if (num % i == 0){
                System.out.println(i + " é um fator de " + num);
                y++;
            }
        } while (i<=num);
        if ( y == 1){
            System.out.println(num + " é um numero primo!");
        }
        
       //5. Escreva um programa que verifica se um número fornecido pelo usuário é primo.
       System.out.println("Digite um numero:");
       Scanner teclado = new Scanner(System.in);
       int num = teclado.nextInt();
       int i = 1;
       int y = 0;

       do { 
           if(num % i == 0 && i!= 1){
                y++;
           }
           i++;
       } while (i<=num);
       if( y == 1){
        System.out.println(num + " é um número primo!");
       }else {
        System.out.println(num + " não é um número primo!");
       }
        
        //6. Escreva um programa que encontra o maior número em uma lista de números fornecida pelo usuário.
        
        Scanner teclado = new Scanner(System.in);
        Scanner numero = new Scanner(System.in);
        int continua;
        int num = 0;
        int i = 0;
        int aux = 0;
        int maior = 0;
        int y = 0;

        do { 
            System.out.println("Digite um numero:");
            num = numero.nextInt();
            aux = num;
            if ( aux > y) {
                System.out.println(aux + " é o maior numero da lista!");
                maior = aux;
            }
            y = aux;
            System.out.println("Digite 1 para continuar e 0 para parar");
            continua = teclado.nextInt();
            
        } while (continua == 1);
        System.out.println("O maior número da lista é: " + maior);
        
       //7. Escreva um programa que conta o número de vogais em uma frase fornecida pelo usuário.
       System.out.println("Digite uma frase:");
       Scanner teclado = new Scanner(System.in);
       String frase = teclado.nextLine();
       int letras = frase.length();
       String vogais = "aeiou";
       int i = 0;
       int y = 0;
       int contador_vog = 0;

       do { 

           do { 
            if( frase.charAt(i) == vogais.charAt(y)){
                contador_vog++;
            }
            y++;    
           } while (y<=4);
           i++;
           y = 0;
       } while (i<letras);

        if ( contador_vog != 0){
            System.out.println("Número de vogais: "+ contador_vog);
        } else {
            System.out.println("Não há vogais na frase!");
        }
         */
        //8. Escreva um programa que converte um número decimal em binário.
        System.out.println("Digite um numero:");
        Scanner teclado = new Scanner(System.in);
        int numero = teclado.nextInt();

        StringBuilder binario = new StringBuilder();
        int quociente = numero;

        do {
            int resto = quociente % 2;
            binario.insert(0, resto);
            quociente = quociente / 2;
        } while (quociente > 0);

        System.out.println("O número binário é: " + binario.toString());

    }
}

//9. Escreva um programa que verifica se uma string é um palíndromo.

//10. Escreva um programa que calcula o fatorial de um número fornecido pelo usuário.
