-- Crie uma tabela chamada clientes com as colunas: id, nome, email e telefone, idade.

CREATE TABLE clientes(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100),
	email VARCHAR(100),
	telefone VARCHAR(20),
	idade INTEGER
);
-- Adicione cinco registros à tabela clientes com informações fictícias, garantindo que 
-- cada registro tenha um valor único para o campo id.

INSERT INTO clientes (nome, email, telefone, idade) VALUES
('Maria 1', 'maria_01@email.com', '1234-5678', 11),
('Maria 2', 'maria_02@email.com', '1234-5678', 12),
('Maria 3', 'maria_03@email.com', '1234-5678', 13),
('Maria 4', 'maria_04@email.com', '1234-5678', 14),
('Maria 5', 'maria_05@email.com', '1234-5678', 15)

-- Crie uma tabela chamada produtos com as colunas: codigo, nome, preco e quantidade.
CREATE TABLE produtos (
	codigo SERIAL PRIMARY KEY,
	nome VARCHAR(100),
	preco NUMERIC(10, 2),
	quantidade INTEGER
);
-- Insira três registros na tabela produtos com informações fictícias.
INSERT INTO produtos (nome, preco, quantidade) VALUES
('sabonete_01', 11.0, 1),
('sabonete_02', 12.0, 2),
('sabonete_03', 13.0, 3)

-- Crie uma tabela chamada itens com as colunas: id, codigo_produto, id_cliente e quantidade. 
CREATE TABLE itens (
	id SERIAL PRIMARY KEY,
	codigo_produto INTEGER REFERENCES produtos(codigo),
	id_clientes INTEGER REFERENCES clientes(id),
	quantidade INTEGER
);
-- Adicione cinco itens à tabela itens, relacionando-os a clientes existentes e produtos disponíveis.
INSERT INTO itens (codigo_produto, id_clientes, quantidade) VALUES
(01, 01, 1),
(02, 02, 2),
(03, 01, 3),
(03, 05, 3),
(01, 04, 2)

-- Criar no mínimo duas Views com propostas interessantes ao
-- usuário visualizar converta esse trecho para comentario

CREATE VIEW detalhes_compras AS
SELECT c.nome AS cliente, p.nome AS produto, i.quantidade
FROM clientes c
JOIN itens i ON c.id = i.id_clientes
JOIN produtos p ON i.codigo_produto = p.codigo;

SELECT * FROM detalhes_compras;