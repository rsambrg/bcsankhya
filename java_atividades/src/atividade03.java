 //import java.util.Set;
 //import java.util.HashSet;
 //import java.util.Arrays;
 //import java.util.Scanner;

public class atividade03 {

    public static void main(String[] args) {

        /*
        //1. Soma dos Elementos Pares:
        //   Escreva um programa que calcule a soma dos elementos pares de uma lista de inteiros.
         
        Scanner teclado = new Scanner(System.in);

        System.out.println("Soma dos elementos pares");
        System.out.println("Quantidade de numeros:");
        int quantidade = teclado.nextInt();
        int[] arr = new int[quantidade];
        int soma = 0;
        int y = 0;
        int[] pares = new int[quantidade];

        System.out.println("Número:");
        for (int i = 0; i < quantidade; i++) {
            arr[i] = teclado.nextInt();
            if (arr[i] % 2 == 0) {
                soma += arr[i];
                pares[y] = arr[i];
                y++;
            }
        }

        int [] tot = new int[y];

        for (int i = 0; i < y; i++) {
            tot[i] = pares[i];
        }


        System.out.println("Lista: " + Arrays.toString(arr) + " " );

        System.out.println("Números pares da lista: "+Arrays.toString(tot)+ " soma: "+ soma);

         */
 /*
        //2. Verificação de Palíndromo:
        //   Crie um método que verifique se uma lista de caracteres forma um palíndromo. 
        Um palíndromo é uma sequência que se lê da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.
         
        System.out.println("Digite uma frase ou palavra:");
        Scanner teclado = new Scanner(System.in);
        String frase = teclado.nextLine();

        frase = frase.replaceAll(" ", "").trim().toLowerCase();
        StringBuilder frase2 =  new StringBuilder(frase);
        frase2.reverse();

        if( frase.equals(frase2.toString())){
            System.out.println("Palindrome");
        }else{
            System.out.println("Não");
        }
        
        System.out.println("Comparação: "+frase+" "+ frase2);

        //3. Ordenação de Lista de Números:
        //   Implemente um algoritmo de ordenação (por exemplo, Bubble Sort) para ordenar 
        uma lista de números inteiros em ordem crescente.
        

       System.out.println("Ordenando numeros em ordem crescente!");
       System.out.println("Quantidade de numeros na lista:");
       Scanner teclado = new Scanner(System.in);
       int quantidade = teclado.nextInt();
       int [] arr = new int[quantidade];

       System.out.println("Numero:");
       for (int i = 0; i < quantidade; i++) {
            arr[i] = teclado.nextInt();
       }
        System.out.println("Numeros na lista:"+ Arrays.toString(arr));

        Arrays.sort(arr);

        System.out.println("Em ordem crescente:"+ Arrays.toString(arr));

        //4. Remoção de Elementos Duplicados:
        //  Escreva um método que remova todos os elementos duplicados de uma lista, 
        mantendo apenas a primeira ocorrência de cada elemento.
         
        System.out.println("Lista inteligente:");
        System.out.println("Esta lista remove itens duplicados!");
        System.out.println("Quantidade de itens:");
        Scanner teclado = new Scanner(System.in);
        int quantidade = teclado.nextInt();
        String [] arr = new String[quantidade];

        System.out.println("Itens:");
        arr[0] = teclado.nextLine();
        for (int i = 0; i < arr.length;i++) {
            arr[i] = teclado.nextLine();
        }
        System.out.println("Lista:");
        System.out.println(Arrays.toString(arr));

        Set<String> set1 = new HashSet<>(Arrays.asList(arr));
        
        System.out.println("Lista sem repetição:");
        System.out.println(set1);
        //5. Média de Valores Únicos:
        //   Implemente um programa que calcule a média aritmética dos valores únicos em uma lista de números inteiros, 
        ou seja, excluindo os valores duplicados da média.
        

       System.out.println("Media aritmetica de valores unicos!");
       System.out.println("Quantidade de numeros da lista:");
       Scanner teclado = new Scanner(System.in);
       int quantidade = teclado.nextInt();
       Integer [] arr = new Integer[quantidade];
       int soma = 0;

       System.out.println("Numero:");
       for (int i = 0; i < quantidade; i++) {
           arr[i] = teclado.nextInt();
       }

        Arrays.sort(arr);
        Set<Integer> set1 = new HashSet<>(Arrays.asList(arr));
        Integer [] arr_nova = set1.toArray(new Integer[0]);

        for (int i = 0; i < arr_nova.length; i++) {
            soma += arr_nova[i];
        }

        int media = soma / arr_nova.length;

        System.out.println("Lista:"+ Arrays.toString(arr_nova));
        System.out.println("Média Aritmética: "+ media);
        */

    }
}




 
