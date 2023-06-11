# Este é um teste para desenvolvedores

Para rodar o projeto:
crie um arquivo .env e adicione o conteúdo da .env.example adicionando um valor para o seu conteúdo.

    instale as dependências:
        npm install
        or
        yarn

    rode o comando:
        yarn start

    Pronto!

Criei um serviço de login para criar permissões e regras de update e remoção.
Separei os arquivos em routes, controllers e services.
Fiz uso do Typescript, juntamente com o zod para validções e criação de schemas e interfaces.

Os arquivos de teste ainda estão no projeto, deixei para fins de consulta sobre as tarefas.
as rotas

segue tambem no arquivo um json para as rotas no Insomnia.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Insomnia_SCF_crud_users.json)

# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /user

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

## teste2.js

POST em /users, descubra a intenção dele e o corrija.

## teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

## teste4.js

Atualiza os dados de um usuário especifico.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.
