-- 1. **Adicionar um novo cliente**:
-- Adicione um novo cliente com os seguintes dados: nome, email, telefone e idade.

INSERT INTO clientes (nome, email, telefone, idade) VALUES
('José', 'jose_01@email.com', '123-456-204', 20)


-- 2. **Adicionar um novo produto**:
--    - Adicione um novo produto com os seguintes dados: nome, preço e quantidade.

INSERT INTO produtos (nome, preco, quantidade) VALUES
('detergente', 1.99, 1)

-- 3. **Adicionar um novo item de venda**:
--    - Adicione um novo item de venda relacionando um produto e um cliente existentes com uma quantidade específica.

INSERT INTO itens (codigo_produto, id_clientes, quantidade) VALUES
(8,11,1)

SELECT * FROM detalhes_compras

-- 4. **Atualizar o telefone de um cliente**:
--   - Atualize o telefone de um cliente específico usando seu email como referência.
UPDATE clientes
SET nome = 'João'
WHERE id = 5;

-- 5. **Atualizar o preço e a quantidade de um produto**:
--   - Atualize o preço e a quantidade de um produto específico usando o nome do produto como referência.

UPDATE produtos
SET nome = 'Leite em pó'
WHERE codigo = 3;

-- 6. **Atualizar a quantidade de um item de venda**:
--   - Atualize a quantidade de um item de venda específico usando seu ID como referência.

UPDATE itens
SET quantidade = 10
WHERE id_clientes = 16;

-- 7. **Deletar um cliente específico**:
--    - Delete um cliente específico usando seu email como referência.

DELETE FROM clientes
WHERE email = 'maria_02@email.com';

-- 8. **Deletar um produto específico**:
--    - Delete um produto específico usando o nome do produto como referência.
DELETE FROM produtos
WHERE nome = 'sabonete 02';

-- 9. **Deletar um item de venda específico**:
--    - Delete um item de venda específico usando seu ID como referência.

DELETE FROM itens
WHERE codigo_produto = 3;

-- 10. **Criar uma view que exibe todos os clientes com suas respectivas idades e telefones**:
--     - Crie uma view que mostra o nome, idade e telefone de todos os clientes.

CREATE VIEW  exibir_clientes AS
SELECT c.nome as clientes, c.idade as idade, c.telefone as telefone
FROM clientes c

SELECT * FROM exibir_clientes


-- 11. **Criar uma view que exibe todos os produtos com seus preços e quantidades em estoque**:
--     - Crie uma view que mostra o nome, preço e quantidade de todos os produtos.

CREATE VIEW exibir_produtos AS
SELECT p.nome as produto, p.preco as preco, p.quantidade as quantidade
FROM produtos p

SELECT * FROM exibir_produtos

-- 12. **Criar uma view que exibe o total vendido por cada cliente**:
--     - Crie uma view que mostra o nome do cliente e o total vendido por ele.

CREATE VIEW exibir_vendas AS
SELECT c.nome as cliente, SUM(i.quantidade) as item_vendido
FROM clientes c
JOIN itens i on c.id = i.id_clientes
GROUP BY c.nome

SELECT * FROM exibir_vendas

-- 13. **Adicionar um novo cliente e uma nova compra para esse cliente**:
--     - Adicione um novo cliente com dados fictícios.
--     - Adicione um novo item de venda para esse cliente relacionando um produto existente.

INSERT INTO clientes (nome, email, telefone, idade) VALUES
('Maria José', 'maria_e_jose@email.com', '000-000-00', 35)


INSERT INTO itens (codigo_produto, id_clientes, quantidade) VALUES
(2,13, 5)

-- 14. **Atualizar o nome e o email de um cliente específico**:
--     - Atualize o nome e o email de um cliente usando seu ID como referência.

UPDATE clientes
SET nome = 'Mariana'
WHERE nome = 'Maria 1'

-- 15. **Deletar todos os itens de venda de um produto específico**:
--     - Delete todos os itens de venda de um produto específico usando o código do produto como referência.

DELETE FROM itens
WHERE codigo_produto = 3


-- 16. **Adicionar múltiplos clientes**:
--    - Adicione três novos clientes com dados fictícios em uma única instrução `INSERT`.

INSERT INTO clientes (nome, email, telefone, idade) VALUES
('Pamela', 'pamela@email.com', '00-22-444', 21),
('Iris', 'iris@email.com', '000-9999-444', 34),
('Marilza', 'marilza@email.com', '0000-0000', 45)

-- 17. **Adicionar múltiplos produtos**:
--    - Adicione dois novos produtos com dados fictícios em uma única instrução `INSERT`.

INSERT INTO produtos (nome, preco, quantidade) VALUES
('Pilhas AA', 7.99, 3),
('Esponja', 2.99, 6)

-- 18. **Adicionar múltiplos itens de venda**:
--    - Adicione três novos itens de venda relacionando diferentes produtos e clientes existentes em uma única instrução `INSERT`.

INSERT INTO itens (codigo_produto, id_clientes, quantidade) VALUES
(9, 14, 5),
(10, 15, 3),
(10, 16, 2)

-- 19. **Atualizar a idade de todos os clientes acima de 30 anos**:
--    - Aumente a idade de todos os clientes que têm mais de 30 anos em 1 ano.

UPDATE clientes
SET idade = idade +1
WHERE idade > 30


-- 20. **Atualizar o preço de todos os produtos com quantidade menor que 10**:
--    - Aumente o preço de todos os produtos com quantidade menor que 10 em 10%.

UPDATE produtos
SET preco = preco * 1.10
WHERE quantidade < 10


-- 21. **Atualizar o nome de todos os produtos para incluir uma palavra-chave**:
--    - Adicione a palavra "Promoção" ao início do nome de todos os produtos.

UPDATE produtos
SET nome ='Promocao ' || nome

SELECT * FROM produtos

-- 22. **Deletar todos os clientes com idade menor que 18 anos**:
--    - Delete todos os clientes que têm menos de 18 anos.

DELETE FROM itens
WHERE id_clientes IN (
	SELECT id
	FROM clientes
	where idade < 18
);


-- 23. **Deletar todos os produtos com preço maior que 50**:
--    - Delete todos os produtos cujo preço é maior que 50.
DELETE FROM itens
WHERE codigo_produto IN (
	SELECT codigo
	FROM produtos
	where preco > 50
);

DELETE FROM produtos
WHERE preco > 50

-- 24. **Deletar todos os itens de venda de clientes específicos**:
--    - Delete todos os itens de venda de clientes com email específico.
DELETE FROM itens 
WHERE id_clientes IN (
	SELECT id
	FROM clientes
	WHERE email = 'maria_01@email.com'
);

DELETE FROM clientes
WHERE email = 'maria_01@email.com'

-- 25. **Criar uma view que exibe o estoque total de produtos vendidos**:
--     - Crie uma view que mostra o nome do produto e o total vendido em relação ao estoque.

SELECT codigo_produto, SUM(quantidade) AS total_vendido
FROM itens
GROUP BY codigo_produto

CREATE VIEW total_itens_vendidos AS
SELECT p.nome as produto, p.quantidade as total_estoque, COALESCE(SUM(i.quantidade),0) AS vendido_tot
FROM produtos p
LEFT JOIN itens i ON p.codigo = i.codigo_produto
GROUP BY  p.codigo, p.nome, p.quantidade;

SELECT * FROM total_itens_vendidos
-- 26. **Criar uma view que exibe os clientes que não fizeram compras**:
--     - Crie uma view que mostra o nome e email dos clientes que não têm itens de venda associados.

CREATE VIEW clientes_sem_compras AS
SELECT nome, email
FROM clientes c
WHERE NOT EXISTS (
    SELECT 1
    FROM itens i
    WHERE i.id_clientes = c.id
);

-- 27. **Criar uma view que exibe os produtos não vendidos**:
--     - Crie uma view que mostra o nome e preço dos produtos que não foram vendidos (quantidade de vendas igual a zero).

CREATE VIEW produtos_nao_vendidos AS
SELECT p.nome, p.preco
FROM produtos p
LEFT JOIN itens i ON p.codigo = i.codigo_produto
WHERE i.codigo_produto IS NULL;


-- 28. **Adicionar uma nova coluna em uma tabela e atualizar dados**:
--     - Adicione uma nova coluna `data_de_cadastro` à tabela `clientes` e preencha-a com a data atual para todos os clientes.

ALTER TABLE clientes ADD COLUMN data_de_cadastro DATE;

UPDATE clientes SET data_de_cadastro = CURRENT_DATE;

-- 29. **Atualizar o preço dos produtos com base em uma condição**:
--     - Aumente o preço de todos os produtos em 5% se a quantidade em estoque for menor que 20.

UPDATE produtos
SET preco = preco * 1.05
WHERE quantidade < 20;

-- 30. **Deletar registros duplicados em uma tabela**:
--     - Encontre e delete registros duplicados na tabela `clientes`, mantendo apenas um registro por cliente com base no email.

WITH duplicates AS (
    SELECT id, 
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS row_num
    FROM clientes
)
DELETE FROM clientes
WHERE id IN (
    SELECT id
    FROM duplicates
    WHERE row_num > 1
);

-- 31. **Criar uma view que exibe a média de vendas por produto**:
--     - Crie uma view que mostra o nome do produto e a média de itens vendidos por produto.

CREATE VIEW media_vendas_por_produto AS
SELECT p.nome AS produto, AVG(i.quantidade) AS media_vendida
FROM produtos p
JOIN itens i ON p.codigo = i.codigo_produto
GROUP BY p.nome;

-- 32. **Adicionar um novo cliente e realizar múltiplas compras para esse cliente**:
--     - Adicione um novo cliente com dados fictícios.
--     - Adicione três novos itens de venda para esse cliente, relacionando diferentes produtos.

INSERT INTO clientes (nome, email, telefone, idade, data_de_cadastro)
VALUES ('Carlos Silva', 'carlos@novodominio.com', '123456789', 28, CURRENT_DATE);

INSERT INTO itens (codigo_produto, id_clientes, quantidade) VALUES
(1, 6, 2),
(2, 6, 1),
(3, 6, 5);

-- 33. **Atualizar o email de todos os clientes para um novo domínio**:
--     - Atualize o email de todos os clientes para um novo domínio, por exemplo, mude `@example.com` para `@novodominio.com`.

UPDATE clientes
SET email = regexp_replace(email, '@example.com$', '@novodominio.com');

-- 34. **Deletar produtos que não foram vendidos nos últimos 6 meses**:
--     - Delete todos os produtos que não têm itens de venda associados nos últimos 6 meses.

DELETE FROM produtos
WHERE codigo NOT IN (
    SELECT DISTINCT codigo_produto
    FROM itens
    WHERE data_de_venda >= CURRENT_DATE - INTERVAL '6 months'
);

-- 35. **Criar uma view que exibe a proporção de vendas por cliente**:
--     - Crie uma view que mostra o nome do cliente e a proporção do total de vendas em relação ao total de vendas de todos os clientes.

CREATE VIEW proporcao_vendas_por_cliente AS
SELECT c.nome AS cliente, 
       SUM(i.quantidade) * 1.0 / (SELECT SUM(quantidade) FROM itens) AS proporcao_vendas
FROM clientes c
JOIN itens i ON c.id = i.id_clientes
GROUP BY c.nome;








