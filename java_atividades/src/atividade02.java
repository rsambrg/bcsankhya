
//import java.util.Arrays;
//import java.util.Scanner;
//import java.util.HashSet;
//import java.util.Set;


public class atividade02 {

    public static void main(String[] args) {
        /*
         1. Ordenação Personalizada: Implemente um algoritmo que ordene um array de objetos com base em um critério personalizado 
        // (por exemplo, ordem alfabética de strings ou ordenação numérica).

        System.out.println("Lista de compras com 5 itens por ordem alfabetica!");
        Scanner teclado = new Scanner(System.in);
        String item;
        int y = 0;
        String[] lista = {"", "", "", "", ""};

        System.out.println("Digite seu primeiro item para começar!");
        item = teclado.nextLine();

        if (item.isEmpty()) {
            System.out.println("Digite um item!");
        } else {
            lista[y] = item;
            do {
                int j = 0;
                System.out.println("Insira um item:");
                item = teclado.nextLine();
                lista[y] = item;
                y++;

            } while (!item.isEmpty() && y <= 4);

        }
        Arrays.sort(lista);
        System.out.println("Lista de compras:");
        
        for (int z = 0; z <= 4; z++) {
            System.out.println("Item " + (z + 1) + ": " + lista[z]);
        }

        //2. Fusão de Arrays: Crie um método que receba dois arrays de inteiros ordenados e os funda em um único array ordenado.
        
       
       Scanner teclado = new Scanner(System.in);
       int []arr01 = new int[5];
       int []arr02 = new int[5];


        System.out.println("Insira 5 numeros inteiros:");
       for(int i=0; i<=4;i++){
        arr01[i] = teclado.nextInt();
       }
        System.out.println("Insira 5 numeros inteiros:");
       for(int i=0; i<=4;i++){
        arr02[i] = teclado.nextInt();
       }

       Arrays.sort(arr01);
       Arrays.sort(arr02);

       int []arr03 = concatenateArrays(arr01, arr02);

       Arrays.sort(arr03);

       for(int i=0;i<=9;i++){
            System.out.println(arr03[i]);
       }
       

        //3. Média e Desvio Padrão: Escreva um programa que calcule a média e o desvio padrão de um array de 
        //números inteiros ou de ponto flutuante.
        Scanner teclado = new Scanner(System.in);
        double [] arr = new double[4];
        System.out.println("Digite 4 algarismos:");
        for(int i=0;i<=3;i++){
            arr[i] = teclado.nextInt();
        }
        System.out.println("Números no array:");
        for(int i=0;i<=3;i++){
            System.out.println(arr[i]);
        }

        double media = calc_media(arr);

        double desv = calc_desvio(arr,media);
        
        System.out.println("Media: "+media+" Desvio Padrao: "+desv);
         
        //4. Pesquisa em Matriz: Implemente um método para pesquisar um elemento em uma matriz multidimensional e 
        //retorne sua posição ou um indicativo de não encontrado.

        System.out.println("Olá, eu sou uma matriz multidimensional! Porem sou secreta! Digite um numero e falarei se ele faz ou nao parte!");
        Scanner teclado = new Scanner(System.in);
        int linhas = 3;
        int colunas = 3;
        Random rand = new Random();
        int[][] matriz = new int[linhas][colunas];
        int z = 0;
        String continua;
        int pontos = 0;


        do {
            System.out.println("Digite um numero de 1 a 100 e boa sorte!");
            int numero = teclado.nextInt();

            int[] sorte = {numero};

            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    matriz[i][j] = rand.nextInt((100 - 0) + 1) + 0;
                    if (matriz[i][j] == sorte[0]) {
                        z++;

                    }
                }
            }

            if (z > 0) {
                System.out.println("Você acertou um número da matriz!");
                pontos++;
                if (z > 1) {
                    System.out.println("O número " + numero + " aparece " + z + " vezes");
                }

            } else {
                System.out.println("Não foi dessa vez...");

            }

            System.out.println(matriz[0][0] + " " + matriz[0][1] + " " + matriz[0][2]);
            System.out.println(matriz[1][0] + " " + matriz[1][1] + " " + matriz[1][2]);
            System.out.println(matriz[2][0] + " " + matriz[2][1] + " " + matriz[2][2]);

            System.err.println("Deseja continuar? Digite SIM para jogar novamente ou aperte ENTER para encerrar!");
            Scanner resposta = new Scanner(System.in);
            continua = resposta.nextLine();
            z = 0;

        } while (!continua.isBlank());
        System.out.println("Você fez: "+ pontos + " pontos!");
        System.out.println("Até logo!");
         

        //5. Operações de Conjunto: Escreva funções que realizem operações de união, interseção e diferença entre dois arrays.
        System.out.println("Digite 5 nomes de animais");
        Scanner teclado = new Scanner(System.in);
        String[] lista1 = new String[5];
        int y = 0;
        

        for (int i = 0; i < 5; i++) {
            lista1[i] = teclado.nextLine();
        }

        System.out.println("Agora, mais 5 nomes de animais!");
        Scanner teclado2 = new Scanner(System.in);
        String[] lista2 = new String[5];

        for (int i = 0; i < 5; i++) {
            lista2[i] = teclado2.nextLine();
        }
        System.out.println("Lista 1:");
        for (int i = 0; i < 5; i++) {
            System.out.println((i + 1) + " " + lista1[i]);
        }
        System.out.println("Lista 2:");
        for (int i = 0; i < 5; i++) {
            System.out.println((i + 1) + " " + lista2[i]);
        }

        String[] concatenar = new String[10];

        System.arraycopy(lista1, 0, concatenar, 0, 5);
        System.arraycopy(lista2, 0, concatenar, 5, 5);

        System.out.println("União das duas listas:");

        for (int i = 0; i < 10; i++) {
            System.out.println((i + 1) + " " + concatenar[i]);
        }

        System.out.println("Animais em comum:");
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                if (lista1[i] == null ? lista2[j] == null : lista1[i].equals(lista2[j])) {
                    System.out.println(lista1[i]);
                    y++;
                }
            }
        }
        if (y == 0) {
            System.out.println("Não há itens em comum nas listas!");
        }
        
        System.out.println("Diferença entre as duas listas:");
        String[] diferenca1 = diferenca(lista1,lista2);
        String[] diferenca2 = diferenca(lista2, lista1);

        System.out.println(Arrays.toString(diferenca1)+" "+ Arrays.toString(diferenca2));
        
        //6. Maior Sequência Crescente: Encontre a maior sequência crescente de números em um array e imprima os números dessa sequência.
        System.out.println("Bem-vindo ao seu 'Personnal-Organizer' númerico! Quantos números vamos organizar hoje?");
        Scanner quantidade = new Scanner(System.in);
        int num = quantidade.nextInt();
        int []lista = new int[num];

        System.out.println("Escolha seus números:");
        Scanner teclado = new Scanner(System.in);
        for (int n=0;n<num;n++){
            lista[n] = teclado.nextInt();
        }
        System.out.println("Números em ordem crescente:");
        Arrays.sort(lista);
        System.out.println(Arrays.toString(lista));
        

       //JOGO DE ADIVINHAÇÃO
        System.out.println("Vamos fazer um jogo de adivinhação!");
        
        int [][] matriz = new int[3][3];
        Random rand = new Random();

        int linha = rand.nextInt(3);
        int coluna = rand.nextInt(3);

        System.out.println(matriz[0][0] + " " + matriz[0][1] + " " + matriz[0][2]);
        System.out.println(matriz[1][0] + " " + matriz[1][1] + " " + matriz[1][2]);
        System.out.println(matriz[2][0] + " " + matriz[2][1] + " " + matriz[2][2]);

        System.out.println("TEM UM NÚMERO 1 ESCONDIDO DENTRO DA MATRIZ! O ENCONTRE!");
        System.out.println("Linha:");
        Scanner p01 = new Scanner(System.in);
        int l = p01.nextInt();
        System.out.println("Coluna:");
        Scanner p02 = new Scanner(System.in);
        int c = p02.nextInt();

        matriz[linha][coluna] = 1;

        System.out.println("Linha: "+ (linha+1) + " Coluna: "+ (coluna+1));

        if( l == linha+1 && c == coluna+1 ){
            System.out.println("ACERTOU TUDO! PARABÉNS!");
        }else if (l == linha+1){
            System.out.println("Acertou a posição da Linha!");
        }else if( c == coluna+1){
            System.out.println("Acertou a posição da Coluna!");
        }else{
            System.out.println("Errou!");
        }
        
         
        System.out.println(matriz[0][0] + " " + matriz[0][1] + " " + matriz[0][2]);
        System.out.println(matriz[1][0] + " " + matriz[1][1] + " " + matriz[1][2]);
        System.out.println(matriz[2][0] + " " + matriz[2][1] + " " + matriz[2][2]);
        
        //7. Rotacionar um Array: Crie uma função para rotacionar os elementos de um array para a esquerda ou para a direita por um número específico de posições.
        System.out.println("Me ajude a guardar essas caixas!");
        String box = "■";
        String[][] matriz = new String[3][3];
        Random rand = new Random();
        String[] arr_d = {"■", "■", "■"};
        String[] arr_e = new String[3];
        String[] arr_m = new String[3];
        String[] arr_c = new String[3];
        String[] arr_b = new String[3];

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                matriz[j][i] = "_";
            }
        }

        System.out.println(matriz[0][0] + " " + matriz[0][1] + " " + matriz[0][2]);
        System.out.println(matriz[1][0] + " " + matriz[1][1] + " " + matriz[1][2]);
        System.out.println(matriz[2][0] + " " + matriz[2][1] + " " + matriz[2][2]);


        System.out.println("Caixas: " + Arrays.toString(arr_d));

        //Aqui vai ficar o mecanismo que faz o array mudar de posiçao
        System.out.println("Onde eu deveria guarda-las: direita, esquerda, cima ou baixo:");
        Scanner teclado = new Scanner(System.in);

        String direcao = teclado.nextLine();
        int posicoes = 2;
        int tam = arr_d.length;

        String[] res = new String[tam];

        if (direcao.equals("direita")) {
            for (int i = 0; i < tam; i++) {
                res[(i + posicoes) % tam] = arr_d[i];
                matriz[0][0] = arr_d[0];
                matriz[1][0] = arr_d[1];
                matriz[2][0] = arr_d[2];
            }
        } else if (direcao.equals("esquerda")) {
            for (int i = 0; i < tam; i++) {
                arr_e[i] = arr_d[i];
                matriz[0][2] = arr_e[0];
                matriz[1][2] = arr_e[1];
                matriz[2][2] = arr_e[2];
            }
        } else if(direcao.equals("meio")) {
            for(int i=0;i<3;i++){
                arr_m[i] = arr_d[i];
                matriz[0][1] = arr_m[0];
                matriz[1][1] = arr_m[1];
                matriz[2][1] = arr_m[2];
            }   
        } else if( direcao.equals("cima")){
            for(int i=0;i<3;i++){
                arr_c[i] = arr_d[i];
                matriz[0][0] = arr_c[0];
                matriz[0][1] = arr_c[1];
                matriz[0][2] = arr_c[2];
            }
        } else if ( direcao.equals("baixo")){
            for(int i=0;i<3;i++){
                arr_b[i] = arr_d[i];
                matriz[2][0] = arr_b[0];
                matriz[2][1] = arr_b[1];
                matriz[2][2] = arr_b[2];
            }
            
        }
        System.out.println("Ainda sobrou espaço para mais caixas!");
        System.out.println("Obrigada! coloquei as caixas para " + direcao);

        System.out.println(matriz[0][0] + " " + matriz[0][1] + " " + matriz[0][2]);
        System.out.println(matriz[1][0] + " " + matriz[1][1] + " " + matriz[1][2]);
        System.out.println(matriz[2][0] + " " + matriz[2][1] + " " + matriz[2][2]);
         
        //8. Histograma de Frequência: Construa um histograma de frequência a partir de um array de números, 
        //mostrando quantas vezes cada número aparece.
        System.out.println("O Intruso - Adivinhe qual número  de 1 a 5 vai aparecer mais de 1x no array!");
        Scanner teclado = new Scanner(System.in);
        int numero = teclado.nextInt();

        Random rand = new Random();
        int []arr = new int[5];
        for(int i=0;i<5;i++){
            arr[i] = i+1;
        }
        int x = rand.nextInt((5-0)+1)+0;
        arr[x] = rand.nextInt((5-1)+1)+1;
        System.out.println(Arrays.toString(arr));

        Map<Integer, Integer> frequencia = new HashMap<>();
        for( int num : arr){
            frequencia.put(num, frequencia.getOrDefault(num, 0)+1);
        }

        if( numero == arr[x]){
            System.out.println("Parabéns! Você acertou!");
            System.out.println("O numero "+ arr[x] + " apareceu mais de uma vez!");
        }else{
            System.out.println("Ops!Não foi dessa vez! O número é:"+ arr[x]);
        }

        System.out.println("Frequencia do numero:");
        for (Map.Entry<Integer, Integer> entrada : frequencia.entrySet()){
            System.out.println("Numero:"+ entrada.getKey() + " : " + entrada.getValue() + " vezes");
        }
         
        //9. Subconjuntos de Soma Zero: Determine se existe um subconjunto não vazio de elementos em um array cuja soma seja igual a zero.
        System.out.println("Determinando se existe um subcojunto 'nao vazio' de elementos em um array com soma = 0");

        System.out.println("Tamanho do array:");
        Scanner teclado = new Scanner(System.in);
        int tamanho = teclado.nextInt();
        int[] arr = new int[tamanho];
        int cumulativo = 0;

        System.out.println("Numero:");
        for (int i = 0; i < tamanho; i++) {
            arr[i] = teclado.nextInt();
        }
        System.out.println(Arrays.toString(arr));

        Set<Integer> set = new HashSet<>();
        int soma = 0;

        for (int i : arr ) {
            soma += i;
            if (soma == 0 || set.contains(soma)) {
                cumulativo++;
            } 
            set.add(soma);
        }
        if( cumulativo>0){
            System.out.println("Existe um subconjunto com soma 0.");
        }else{
            System.out.println("Não há subconjuntos com soma 0.");
        }
         
        //10. Palíndromos: Verifique se um array de strings contém palavras que são palíndromos 
        //(palavras que se leem da mesma forma de trás para frente).
        System.out.println("Palindromo");

        System.out.println("Digite uma frase ou palavra:");
        Scanner teclado = new Scanner(System.in);

        String  str1 = teclado.nextLine();
        int tam = str1.length();
        String resultado = str1.replaceAll(" ", "").trim().toLowerCase();

        StringBuilder str2 = new StringBuilder(resultado);
        str2.reverse();

        System.out.println(str2);

        if( resultado.equals(str2.toString())){
            System.out.println("É um palindrome!");
        }else{
            System.out.println("Não é palindrome");
        }

        */

    }

 
}

/*

    public static String[] diferenca(String[] lista1, String[] lista2){
        Set<String> set1 = new HashSet<>(Arrays.asList(lista1));
        Set<String> set2 = new HashSet<>(Arrays.asList(lista2));
        set1.removeAll(set2);
        return set1.toArray(new String[0]);
    }

    
    public static double calc_media(double[] arr){
        double soma = 0.0;
        for(double num : arr){
            soma += num;
        }
        return soma/arr.length;
    }
    public static double calc_desvio(double[] arr, double media){
        double sum_dif = 0.0;
        for(double num : arr){
            sum_dif += Math.pow(num - media, 2);
        }
        return Math.sqrt(sum_dif / arr.length);
    }
    public static int[] concatenateArrays(int[] arr01, int []arr02) {
        int length1 = arr01.length;
        int length2 = arr01.length;
        int [] result = new int[length1 + length2];

        System.arraycopy(arr01, 0, result, 0, length1);
        System.arraycopy(arr02, 0, result, length1, length2);
    return result;
    }
 
}
 */
//PROBLEMINHA - AJUDANDO HELENA 
/*
class Crianca {

    int idade;
    String nome;

    public Crianca(String nome,int idade) {
        this.idade = idade;
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "idade: " + idade
                + ", nome: " + nome
                ;
    }
}


public class atividade02 {

    public static void main(String[] args) {
        System.out.println("Helena está levando seus sobrinhos para um passeio ao cinema, e gostaria de fazer uma fila do menor pro maior");
        System.out.println("Ajuda Helena! Criando um programa que pergunta quantos sobrinhos ela tem, nome, a idade, e os organize:");
        System.out.println("Quantidade de crianças:");

        Scanner quantidade = new Scanner(System.in);
        int num = quantidade.nextInt();
        quantidade.nextLine();

        Crianca[] criancas = new Crianca[num];

        for (int i = 0; i < num; i++) {
            System.out.println("Digite o nome da crianca:");
            String nome = quantidade.nextLine();

            System.out.println("Idade:");
            int idade = quantidade.nextInt();
            quantidade.nextLine();

            criancas[i] = new Crianca(nome, idade);
        }

        Arrays.sort(criancas,(c1,c2) -> Integer.compare(c1.idade, c2.idade));


        System.out.println("Lista dos sobrinhos de Helena do menor para o maior:");
        System.out.println("Numero de crianças: "+ num);
        for (Crianca c : criancas) {
            System.out.println(c);
        }

        
    }
}
 */

//JOGO DE ADIVINHAÇÃO - ENCONTRE O 1 NO MEIO DA MATRIZ
