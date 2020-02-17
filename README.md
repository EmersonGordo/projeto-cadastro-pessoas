# Projeto Cadastro de Pessoas
# Tecnologias : angular/api .NET e mongoDB
Projeto Cadastro Pessoa
Este projeto foi criado com o Angular CLI versão 9.

Você pode acessar ele pelo Github Pages. Nele, ao invés de se usar uma API de mockup, utiliza-se localStorage.

# Escopo
Criar um projeto Angular 9, utilizando a abordagem SPA com as seguintes funcionalidades:

Construir a estrutura do projeto utilizando o npm (gerenciador de pacotes do Node.js);
Criar uma pagina de cadastro de Pessoa com os seguintes campos: ID, Nome, CPF, Sexo, Email, Data de Nascimento, Naturalidade, Nacionalidade;
Criar na mesma pagina uma listagem dos usuários cadastrados, através de uma GRID;
Implementar o consumo da API disponibilizadas, através do  endpoints:
API de Pessoa

Criar um design básico para páginas (pode ser utilizado o bibliotecas/frameworks material-UI design disponíveis no repositório do npm)

# Tecnologias
Angular CLI 9
API .NET - C#
Node.js 10.13
Mongodb Cloud

# Como instalar
Baixe ou clone este repositório usando git clone https://github.com/EmersonGordo/projeto-cadastro-pessoas.git;
Dentro do diretório, instale as dependências usando npm install.

# Como executar
Execute ng serve -o para executar a versão de desenvolvimento (diretorio SISCADAPI). Depois acesse http://localhost:4200/.
Para executar o servidor de endpoints de API, em um outro terminal na mesma pasta execute dotnet run (diretorio SISCAD). 
A API poderá ser acessada via https://localhost:4201/api/Pessoa/.

# Como compilar/construir
Execute ng build para buildar o projeto. Para buildar a versão de produção adicione a flag --prod. Os arquivos serão armazenados do diretório dist.

# Obrigado.
