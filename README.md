# Projeto Cadastro de Pessoas
Projeto Cadastro Pessoa
Este projeto foi criado com o Angular CLI versão 9 no Front-End, API .NET versão 3.1 no Back-End, banco de dados MongoDB Cloud 
e Node.js versão 6.13.


# Escopo
Implementar um sistema teste de cadastro de pessoas utilizando a abordagem SPA com as seguintes funcionalidades:

  Construir a estrutura do projeto utilizando o npm (gerenciador de pacotes do Node.js);
  Criar uma pagina de cadastro de Pessoa com os seguintes campos: ID, Nome, CPF, Sexo, Email, Data de Nascimento, Naturalidade e 
  Nacionalidade;
  Criar na mesma pagina uma listagem dos usuários cadastrados, através de uma GRID;
  Implementar o consumo da API disponibilizadas, através do endpoints:
     
     API de Pessoa.

Criar um design básico para páginas (utilizado o bibliotecas/frameworks material-UI design disponíveis no repositório do npm)

# Tecnologias
    Angular CLI 9.
    API .NET - C# versao 3.1.
    Node.js 6.13.
    Mongodb Cloud.

# Como instalar
Baixe ou clone este repositório usando git clone https://github.com/EmersonGordo/projeto-cadastro-pessoas/new/V1;
Será criada uma pasta chamada "ANGULAR" e dentro dela as pastas:
  SISCADAPI, que contem o projeto da API back-end em .NET.
  SISCAD, que contem o projeto front-end em angular.


# Como executar

PROJETO SISCAD
Para que o projeto funcione, deverá ser iniciado os serviços do "angular" e do "dotnet" conforme descrito abaixo: 

  Primeiro -> API BACK-END
  Para que o front-end do projeto funcione, deverá ser aberto um prompt DOS na pasta "ANGULAR/SISCADAPIP", e digitar: "dotnet run"
  Depois acesse "http://localhost:4201/api/Pessoa/"
  
  Segundo -> FRONT-END
  Para que o front-end do projeto funcione, deverá ser aberto um prompt DOS na pasta "ANGULAR/SISCAD", e digitar: "ng serve -o"
  Depois acesse "http://localhost:4200/" para acessar a aplicação.
  
  
PROJETO POSTMAN
Para executar o projeto de consumo da API é necessário importa o arquivo "SISCAD.postma_collection.json" que se encontra na pasta 
raiz "ANGULAR".


# Como compilar/construir
Execute ng build para buildar o projeto. Para buildar a versão de produção adicione a flag --prod. Os arquivos serão armazenados do diretório dist.



# FIM.
