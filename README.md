# 1. Introdução

Este projeto foi desenvolvido como parte do Bootcamp de Desenvolvimento Front-end com React, oferecido pela iTalents. O objetivo do projeto é aplicar os principais conceitos de React, como componentização, comunicação entre componentes via props, uso de children e a criação de um formulário dinâmico.

# 2. Estrutura dos Componentes

A aplicação foi dividida em componentes modulares, para facilitar a reutilização e manutenção do código. A estrutura do projeto é a seguinte:

src/\
│\
├── components/\
│   ├── Footer/\
│   │   └── Footer.js\
│   ├── Form/\
│   │   └── Form.js\
│   ├── Header/\
│   │   └── Header.js\
│   ├── Mensagem/\
│   │   └── Mensagem.js\
│   ├── Projetos/\
│   │   └── Projetos.js\
│   └── Saudacao/\
│       └── Saudacao.js\
│\
├── App.js\
└── App.css\

### Descrição dos Componentes:

Header: Responsável por exibir o cabeçalho da aplicação.\
Footer: Exibe o rodapé com informações adicionais.\
Mensagem: Recebe uma mensagem e uma cor de texto via props e exibe uma mensagem personalizada. Utiliza o conceito de children para renderizar o conteúdo entre a tag de abertura e fechamento do componente.\
Projetos: Exibe uma lista dos projetos desenvolvidos.\
Form: Um formulário simples que permite ao usuário entrar em contato.\
Saudacao: Componente que poderia ser utilizado para saudar o usuário, caso implementado.

# 3. Comunicação entre Componentes

Os componentes da aplicação se comunicam principalmente através de props. 


# 4. Uso de Props e Children

Props: São usadas para passar dados entre componentes. \
Children: O conceito de children é utilizado no componente Mensagem, onde o conteúdo entre as tags do componente é exibido dinamicamente no seu interior.

# 5. Funcionamento do Formulário

O componente Form contém um formulário básico de contato. Ele captura os dados do usuário através de inputs, mas, nesta versão, a submissão do formulário ainda não está conectada a um backend.

# 6. Como Rodar a Aplicação

### Pré-requisitos:
Node.js instalado em sua máquina.\
Um gerenciador de pacotes como npm ou yarn.\

### Passos:
Clone o repositório do projeto.\
Navegue até a pasta do projeto: cd nome-do-projeto\
Instale as dependências: npm install\
Execute a aplicação: npm start\
Acesse a aplicação no navegador através de http://localhost:3000.

