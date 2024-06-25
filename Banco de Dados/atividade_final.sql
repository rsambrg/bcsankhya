
-- 1. Auditoria de Alterações:
--    - Crie um trigger que registre todas as inserções, atualizações e exclusões na tabela `empregado` em uma tabela de auditoria chamada `auditoria_empregado`. Esta tabela deve armazenar a ação realizada (`INSERT`, `UPDATE`, `DELETE`), a data/hora da ação e a matrícula do empregado afetado.
CREATE TABLE auditoria_empregado (
    id SERIAL PRIMARY KEY,
    acao VARCHAR(10),
    data_hora TIMESTAMP,
    matricula_empregado INT
);

CREATE OR REPLACE FUNCTION registrar_auditoria() 
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        INSERT INTO auditoria_empregado (acao, data_hora, matricula_empregado)
        VALUES ('INSERT', NOW(), NEW.matricula);
        RETURN NEW;
    ELSIF (TG_OP = 'UPDATE') THEN
        INSERT INTO auditoria_empregado (acao, data_hora, matricula_empregado)
        VALUES ('UPDATE', NOW(), NEW.matricula);
        RETURN NEW;
    ELSIF (TG_OP = 'DELETE') THEN
        INSERT INTO auditoria_empregado (acao, data_hora, matricula_empregado)
        VALUES ('DELETE', NOW(), OLD.matricula);
        RETURN OLD;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_auditoria_empregado
AFTER INSERT OR UPDATE OR DELETE ON empregado
FOR EACH ROW EXECUTE FUNCTION registrar_auditoria();


-- 2. Controle de Salário Máximo:
--    - Crie um trigger que impeça que um empregado receba um aumento de salário que exceda 20% do seu salário atual. Se um aumento maior que 20% for tentado, o trigger deve lançar uma exceção.
CREATE OR REPLACE FUNCTION controle_aumento_salario() 
RETURNS TRIGGER AS $$
BEGIN
    IF (NEW.salario > OLD.salario * 1.20) THEN
        RAISE EXCEPTION 'Aumento de salário excede 20%% do salário atual';
    END IF;
    RETURN NEW;
END;

$$ LANGUAGE plpgsql;
CREATE TRIGGER trg_controle_aumento_salario
BEFORE UPDATE ON empregado
FOR EACH ROW WHEN (OLD.salario IS DISTINCT FROM NEW.salario)
EXECUTE FUNCTION controle_aumento_salario();




-- 3. Histórico de Salário:
--    - Crie uma tabela `historico_salario` que armazene o histórico de salários dos empregados. Crie um trigger que insira um registro nesta tabela sempre que o salário de um empregado for atualizado.

CREATE TABLE historico_salario (
    id SERIAL PRIMARY KEY,
    matricula_empregado INT,
    salario_anterior NUMERIC,
    novo_salario NUMERIC,
    data_alteracao TIMESTAMP
);

CREATE OR REPLACE FUNCTION registrar_historico_salario() 
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO historico_salario (matricula_empregado, salario_anterior, novo_salario, data_alteracao)
    VALUES (OLD.matricula, OLD.salario, NEW.salario, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_historico_salario
AFTER UPDATE OF salario ON empregado
FOR EACH ROW EXECUTE FUNCTION registrar_historico_salario();



-- 4. Atualização Automática de Idade:
--    - Crie um trigger que atualize automaticamente a idade dos empregados todos os anos, com base em sua data de nascimento armazenada na tabela `empregado`.
CREATE OR REPLACE FUNCTION atualizar_idade() 
RETURNS TRIGGER AS $$
BEGIN
    NEW.idade = EXTRACT(YEAR FROM AGE(NEW.data_nascimento));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_atualizar_idade
BEFORE UPDATE ON empregado
FOR EACH ROW EXECUTE FUNCTION atualizar_idade();



-- 5. Calcular Média Salarial por Departamento:
--    - Crie uma função que retorne a média salarial dos empregados em um determinado departamento. A função deve aceitar o número do departamento como parâmetro.

CREATE OR REPLACE FUNCTION calcular_media_salarial(dept_no INT) 
RETURNS NUMERIC AS $$
DECLARE
    media_salario NUMERIC;
BEGIN
    SELECT AVG(salario) INTO media_salario
    FROM empregado
    WHERE departamento_id = dept_no;
    RETURN media_salario;
END;
$$ LANGUAGE plpgsql;


-- 6. Promoção em Massa:
--    - Crie uma função que receba um percentual e um número de departamento, e aumente o salário de todos os empregados nesse departamento pelo percentual fornecido.

CREATE OR REPLACE FUNCTION promocao_em_massa(percentual NUMERIC, dept_no INT) 
RETURNS VOID AS $$
BEGIN
    UPDATE empregado
    SET salario = salario * (1 + percentual / 100)
    WHERE departamento_id = dept_no;
END;
$$ LANGUAGE plpgsql;



-- 7. Função para Listar Empregados por Departamento:
--    - Crie uma função que aceite o nome do departamento como parâmetro e retorne uma lista de todos os empregados que trabalham nesse departamento.

CREATE OR REPLACE FUNCTION listar_empregados_por_departamento(dept_nome VARCHAR) 
RETURNS TABLE (nome_empregado VARCHAR, salario NUMERIC) AS $$
BEGIN
    RETURN QUERY
    SELECT e.nome, e.salario
    FROM empregado e
    JOIN departamento d ON e.departamento_id = d.id
    WHERE d.nome = dept_nome;
END;
$$ LANGUAGE plpgsql;

-- 8. Visão de Empregados e Departamentos:
--    - Crie uma view que combine informações da tabela `empregado` e `departamento`, mostrando o nome do empregado, seu salário e o nome do departamento.
CREATE VIEW visao_empregados_departamentos AS
SELECT e.nome AS nome_empregado, e.salario, d.nome AS nome_departamento
FROM empregado e
JOIN departamento d ON e.departamento_id = d.id;
-- 9. Visão de Empregados por Faixa Salarial:
--    - Crie uma view que categorize empregados em diferentes faixas salariais (por exemplo, abaixo de 2000, entre 2000 e 3000, acima de 3000) e liste os empregados em cada faixa.
CREATE VIEW visao_empregados_faixa_salarial AS
SELECT e.nome AS nome_empregado, e.salario,
       CASE
           WHEN e.salario < 2000 THEN 'Abaixo de 2000'
           WHEN e.salario BETWEEN 2000 AND 3000 THEN '2000 a 3000'
           ELSE 'Acima de 3000'
       END AS faixa_salarial
FROM empregado e;

-- 10. Visão de Empregados com Aumento Recente:
--     - Crie uma view que mostre todos os empregados que receberam um aumento salarial nos últimos 6 meses, incluindo a data do aumento e o novo salário.

ALTER TABLE empregado ADD COLUMN data_ultimo_aumento DATE;
CREATE OR REPLACE FUNCTION atualizar_data_ultimo_aumento() 
RETURNS TRIGGER AS $$
BEGIN
    IF (OLD.salario IS DISTINCT FROM NEW.salario) THEN
        NEW.data_ultimo_aumento = CURRENT_DATE;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER trg_atualizar_data_ultimo_aumento
BEFORE UPDATE ON empregado
FOR EACH ROW EXECUTE FUNCTION atualizar_data_ultimo_aumento();

CREATE VIEW visao_empregados_aumento_recente AS
SELECT e.nome AS nome_empregado, e.salario, e.data_ultimo_aumento
FROM empregado e
WHERE e.data_ultimo_aumento >= CURRENT_DATE - INTERVAL '6 months';

-- 11. Gerenciamento de Projetos:
--     - Crie tabelas `projeto`, `participacao_projeto` e `empregado`. Crie triggers e views que gerenciem a alocação de empregados a projetos, registrem alterações nas participações e permitam visualizar todos os projetos de um empregado.
CREATE TABLE projeto (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE empregado (
    matricula SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    departamento_id INT,
    salario NUMERIC,
    data_nascimento DATE,
    idade INT
);

CREATE TABLE participacao_projeto (
    id SERIAL PRIMARY KEY,
    matricula_empregado INT REFERENCES empregado(matricula),
    id_projeto INT REFERENCES projeto(id),
    data_inicio DATE,
    data_fim DATE
);
CREATE OR REPLACE FUNCTION registrar_alteracao_participacao() 
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        INSERT INTO participacao_projeto (matricula_empregado, id_projeto, data_inicio)
        VALUES (NEW.matricula_empregado, NEW.id_projeto, NEW.data_inicio);
    ELSIF (TG_OP = 'UPDATE') THEN
        UPDATE participacao_projeto
        SET data_fim = NEW.data_fim
        WHERE id = OLD.id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_registrar_alteracao_participacao
AFTER INSERT OR UPDATE ON participacao_projeto
FOR EACH ROW EXECUTE FUNCTION registrar_alteracao_participacao();

CREATE VIEW visao_projetos_empregado AS
SELECT e.nome AS nome_empregado, p.nome AS nome_projeto, pp.data_inicio, pp.data_fim
FROM empregado e
JOIN participacao_projeto pp ON e.matricula = pp.matricula_empregado
JOIN projeto p ON pp.id_projeto = p.id;


-- 12. Controle de Férias:
--     - Crie uma tabela `ferias` para registrar os períodos de férias dos empregados. Crie triggers para garantir que as férias não se sobreponham e functions para calcular o total de dias de férias tirados por cada empregado.
CREATE TABLE ferias (
    id SERIAL PRIMARY KEY,
    matricula_empregado INT REFERENCES empregado(matricula),
    data_inicio DATE,
    data_fim DATE
);
CREATE OR REPLACE FUNCTION verificar_ferias_sobrepostas() 
RETURNS TRIGGER AS $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM ferias
        WHERE matricula_empregado = NEW.matricula_empregado
        AND data_inicio <= NEW.data_fim
        AND data_fim >= NEW.data_inicio
    ) THEN
        RAISE EXCEPTION 'Período de férias se sobrepõe com outro período existente';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_verificar_ferias_sobrepostas
BEFORE INSERT OR UPDATE ON ferias
FOR EACH ROW EXECUTE FUNCTION verificar_ferias_sobrepostas();
CREATE OR REPLACE FUNCTION calcular_total_dias_ferias(matricula_emp INT) 
RETURNS INT AS $$
DECLARE
    total_dias INT;
BEGIN
    SELECT SUM(data_fim - data_inicio + 1) INTO total_dias
    FROM ferias
    WHERE matricula_empregado = matricula_emp;
    RETURN total_dias;
END;
$$ LANGUAGE plpgsql;


-- 13. Auditoria de Acessos:
--     - Crie uma tabela `acesso_sistema` que registre cada acesso ao sistema por empregados. Crie uma função que insira um registro nesta tabela e um trigger que chame esta função sempre que um empregado se logar no sistema.
CREATE TABLE acesso_sistema (
    id SERIAL PRIMARY KEY,
    matricula_empregado INT,
    data_hora_acesso TIMESTAMP
);
CREATE OR REPLACE FUNCTION registrar_acesso(matricula_emp INT) 
RETURNS VOID AS $$
BEGIN
    INSERT INTO acesso_sistema (matricula_empregado, data_hora_acesso)
    VALUES (matricula_emp, NOW());
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION trigger_registrar_acesso() 
RETURNS TRIGGER AS $$
BEGIN
    PERFORM registrar_acesso(NEW.matricula);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_registrar_acesso
AFTER INSERT ON empregado_logins -- Supondo que exista uma tabela 'empregado_logins' para registros de login
FOR EACH ROW EXECUTE FUNCTION trigger_registrar_acesso();

-- 14. Relatório de Desempenho:
--     - Crie uma view que mostre um relatório de desempenho dos empregados, combinando informações de tabelas `empregado`, `avaliacao_desempenho` e `projetos_concluidos`, exibindo a média de avaliações e a quantidade de projetos concluídos por empregado.

CREATE VIEW relatorio_desempenho_empregados AS
SELECT e.nome AS nome_empregado, 
       AVG(a.avaliacao) AS media_avaliacoes, 
       COUNT(p.id) AS projetos_concluidos
FROM empregado e
LEFT JOIN avaliacao_desempenho a ON e.matricula = a.matricula_empregado
LEFT JOIN projetos_concluidos p ON e.matricula = p.matricula_empregado
GROUP BY e.nome;




