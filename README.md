# project-manager-mobile
:memo: Um aplicativo mobile para gerenciamento de projetos.

### :rocket: Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
- [Styled-Components](https://styled-components.com/)
{...}

### :fire: Executando a aplicação

#### Back-end
##### Configuração
```
$ cd project-manager-api
$ yarn
```
Ajustar parâmetros de usuário e senha do arquivo `database.js` em `project-manager-api/src/config/database.js` de acordo com as credencias do seu banco de dados
```
$ yarn sequelize db:create
$ yarn sequelize db:migrate
```
##### Execução
```
$ yarn dev
```

#### Front-end
##### Configuração

Ajustar a BaseURL do arquivo `api.ts` em `project-manager-app/src/services/api.ts` de acordo com o emulador que for utilizar para executar a aplicação
```
$ cd project-manager-app
$ yarn start
```
##### Execução
```
$ yarn android
```
ou
```
yarn ios
```

## :page_facing_up: Licença 

[MIT](/LICENSE) &copy; Carlos Henrique da Costa Silva

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :purple_heart: by <strong> Carlos Henrique da Costa Silva </strong> </p>
