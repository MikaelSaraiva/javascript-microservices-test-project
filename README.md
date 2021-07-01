# Informações do Projeto

## Rotas

### /dogs

  - GET: Lista todos os cachorros no banco de dados.
  
### /dogs/create

  - POST: Adiciona um novo cachorro ao banco de dados e retorna o todos que estão no banco.
    -Body: 
    ```
    {
        "race": string,
        "color": string,
        "age": number
    }
    ```

### /dogs/\<dogID\>/update

  - PUT: Atualiza as informações do cachorro com o respectivo dogID.
    -Body: 
    ```
    {
        "race": string,
        "color": string,
        "age": number
    }
    ```
## Build

  - Para transpilar e instalar o projeto usando docker: 
  
  ```
    make build
  ```

  - Para transpilar e instalar esse projeto usando node nativo:

  ```
    node build 
  ```

## Run

  - Para executar o projeto usando docker:

  ```
    make run
  ```

  - Para executar esse projeto usando maven nativo:

  ```
    node start
  ```

## Explicações da Entrega

  - Está entrega não contempla tudo que foi solicitado, por falta de tempo e conhecimento. O que acabou faltando foi os testes.