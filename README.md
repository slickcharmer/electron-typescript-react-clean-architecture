Boilerplate definitivo para projetos Eletron.js com React, TypeScript, Clean Architecture e Atomic Design é um ponto de partida completo para o desenvolvimento de aplicações eletrônicas modernas e escaláveis. Ele combina várias práticas e padrões consagrados, fornecendo uma estrutura sólida e flexível para a criação de projetos web robustos.

Este boilerplate utiliza o React, uma biblioteca JavaScript de código aberto para construir interfaces de usuário. O React é amplamente adotado na indústria de desenvolvimento web devido à sua eficiência, modularidade e reutilização de componentes. Além disso, ele oferece suporte nativo para o TypeScript, uma linguagem de programação tipada que fornece uma camada adicional de segurança e produtividade ao desenvolver aplicativos.

Está estruturado seguindo os princípios do Clean Architecture (Arquitetura Limpa). Essa abordagem divide o projeto em camadas independentes, permitindo a separação clara das responsabilidades e facilitando a manutenção, testabilidade e evolução do código.

Além disso, ele inclui configurações de ferramentas comumente utilizadas, como bundlers (por exemplo, Webpack), transpiladores (Babel), test runners (Jest) e gerenciadores de pacotes (npm ou Yarn), bem como um conjunto inicial de testes e exemplos.

## Estrutura da aplicação

A estrutura de pasta não segue o padrão do Clean Architecture de forma rigorosa (apenas o utiliza como base para incorporar junto a estrutura de Atomic Desing para construção do frontend da aplicação). No entanto, pode-se notar algumas semelhanças com os conceitos do Clean Architecture.

No Clean Architecture, a ideia principal é ter uma separação clara de responsabilidades e dependências, com as camadas mais internas contendo as regras de negócio e as camadas externas lidando com os detalhes de infraestrutura. Vamos analisar a estrutura de pasta fornecida:

- A pasta "src" parece contém a maior parte do código-fonte da aplicação. Dentro dela, existem subpastas como "application" e "main", que podem indicar uma divisão entre camadas.

- A pasta "application" contém subpastas como "factories", "decorators", "http" e "validation". Essa estrutura mostra que as responsabilidades relacionadas à lógica de aplicação estão sendo agrupadas nessa pasta.

- A pasta "main" contém os detalhes de implementação, como "adapters", "builders", "composites", "config" e assim por diante. Isso indica uma camada externa que lida com a infraestrutura e os detalhes de implementação específicos da plataforma.

É importante ressaltar que o Clean Architecture é mais um conjunto de princípios e diretrizes do que uma estrutura de pasta rígida,  sendo ele adaptável e podendo variar dependendo das necessidades e preferências de uma equipe ou projeto específico. Segue abaixo uma estrutura de pasta sugerida neste template para o projeto:

```

├─── electron
├─── public
│   ├─── assets
│   │   ├─── icons
│   │   ├─── images
│   │   ├─── sounds
├─── src
│   ├─── application
│   │   ├─── factories
│   │   │   ├─── cache
│   │   │   ├─── decorators
│   │   │   ├─── http
│   │   │   ├─── validation
│   │   │   │   ├─── errors
│   │   │   │   ├─── protocols
│   │   │   │   ├─── validators
│   ├─── main
│   │   ├─── adapters
│   │   ├─── builders
│   │   ├─── composites
│   │   ├─── adapters
│   │   ├─── config
│   │   ├─── presentation
│   │   │   ├─── components
│   │   │   │   ├─── atoms
│   │   │   │   ├─── molecules
│   │   │   │   ├─── organisms
│   │   │   │   ├─── template
│   │   │   ├─── hooks
│   │   │   ├─── pages
│   │   │   ├─── styles
│   │   ├─── utils
│   │   │   ├─── design
├─── tests
├─── webpack
```

## Executando a aplicação

Para executar a aplicação, é necessário ter o Node.js instalado na máquina. Para instalar o Node.js, basta acessar o [site oficial](https://nodejs.org/en/download/) e seguir as instruções de instalação (Na criação desse boilerplate, foi utilizado a versão v18.16.0). Após a instalação, basta executar o comando abaixo para instalar as dependências do projeto:

```bash
npm install

## caso esteja utilizando o yarn, basta executar o comando abaixo:

yarn install
```
Dependencias instaladas, basta executar o comando abaixo para iniciar a aplicação:

```bash
npm start

## caso esteja utilizando o yarn, basta executar o comando abaixo:

yarn start
```
E o webpack irá iniciar a aplicação em modo de desenvolvimento, abrindo uma janela do Electron com a aplicação em execução, apartir desse momento toda modificação feita no código fonte será refletida na aplicação em tempo real.

