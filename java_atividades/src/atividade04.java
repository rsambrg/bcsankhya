
public class atividade04 {
    /* 
    private static final String URL = "jdbc:postgresql://localhost:5432/Atividade_01";
    private static final String USER = "rebeca";
    private static final String PASSWORD = "1000abcd";

    public static Connection getConnection() throws DatabaseConnectionException {
        try{
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (SQLException e){
            throw new DatabaseConnectionException("Erro ao se conectar");
        }
    }
    */
    public static void main(String[] args) {
        /* 
        //Caso de Uso 1: Leitura de Arquivo e Processamento de Dados
        //Você precisa ler um arquivo de texto que contém uma lista de números, um em cada linha, 
        //e calcular a soma desses números. Se o arquivo não existir, deve ser criada uma exceção 
        //personalizada `FileNotFoundException`. Se uma linha não puder ser convertida para um número, 
        //deve ser lançada uma exceção personalizada `InvalidNumberFormatException`.

        String FilePath = "soma.txt";
        int soma = 0;
        

        try (FileReader fr = new FileReader(FilePath);
            BufferedReader reader = new BufferedReader(fr);) {
            String line;
            while((line = reader.readLine()) != null ){
                    try{
                        int num = Integer.parseInt(line.trim());
                        System.out.println("Número lido:" + num);
                        soma += num;
                    } catch (NumberFormatException e){
                        System.out.println("Linha sem número inteiro!");
                    }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("Total:" + soma);

        
        //Caso de Uso 2: Conexão com Banco de Dados
        //Você está desenvolvendo uma aplicação que se conecta a um banco de dados PostgreSQL 
        //para buscar dados de uma tabela. Se a conexão com o banco de dados falhar, deve ser lançada uma exceção personalizada 
        //`DatabaseConnectionException`. Se a consulta SQL falhar, deve ser lançada uma exceção personalizada `SQLQueryException`.

        try{
            Connection connection = atividade04.getConnection();
            System.out.println("Conexão Estabelecida");

            connection.close();

        }catch (DatabaseConnectionException e){
            System.err.println("Erro ao se conectar"+ e.getMessage());
            e.printStackTrace();
        }catch (SQLException e) {
            System.err.println("Erro ao se conectar:" + e.getMessage());
            e.printStackTrace();
        }

        */
        
    }
    
}





//Caso de Uso 4: Manipulação de Coleções
//Implemente um método que remove um elemento de uma lista de strings com base em um índice fornecido pelo usuário. Se o índice estiver fora dos limites da lista, deve ser lançada uma exceção personalizada `IndexOutOfBoundsException`. O programa deve pedir ao usuário para tentar novamente com um índice válido.
//Caso de Uso 5: Operações Matemáticas
//Desenvolva um método que realiza operações matemáticas básicas (adição, subtração, multiplicação e divisão) com base em dois números fornecidos pelo usuário e uma operação especificada. Se a operação não for reconhecida, deve ser lançada uma exceção personalizada `InvalidOpe
