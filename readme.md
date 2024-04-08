# Sistema de Login
Repositório faz uma simples aplicação de login desenvolvida com Node.js em conjunto com banco de dados MySQl. Para o front-end utilizamos o framework Bootstrap.

## Funcionalidades
- Tela de login
- Tela de registro

## Tecnologias
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Como usar
1. Clone este repositório para o seu computador: git clone https://github.com/ProfRodolfo/sistema_login.git
2. Navegue até o diretório do projeto: cd sistema_login
3. Abra o Visual Studio Code  e acesse o projeto
4. Acesse o terminal e digite: npm upgrade
5. Com o MySQL crie um banco de dado chamado dblogin, conforme abaixo:

```
CREATE DATABASE dblogin;

use dblogin;

CREATE TABLE users(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    idade INTEGER NOT NULL,
    pass INTEGER NOT NULL
);
```

6. Inicie a aplicação com Node.js

## Contribuição
1. Faça um fork deste repositório.
2. Crie uma branch para a sua contribuição: git checkout -b minha-contribuicao
3. Faça as alterações desejadas e commit: git commit -m "Minha contribuição"
4. Envie as alterações para o seu repositório fork: git push origin minha-contribuicao
5. Abra um pull request neste repositório.

## Suporte
Se você tiver alguma dúvida ou sugestão para melhorar este projeto educacional, sinta-se à vontade para entrar em contato conosco enviando um e-mail para rodolfo.gsilva2@senacsp.edu.br

---
Este projeto é destinado apenas para fins educacionais e não está disponível para venda. Espero que este projeto ajude no aprendizado em sistema de login. Sinta-se à vontade para personalizar e adaptar este projeto para suas necessidades educacionais.