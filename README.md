# project-manager-mobile
:memo: Um aplicativo mobile para gerenciamento de projetos.

## :rocket: Tecnologias utilizadas

O projeto foi feito utilizando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
- [Styled-Components](https://styled-components.com/)
{...}

## :clipboard: Pré-requisitos

- [NodeJS LTS (ou superior)](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## :fire: Executando a aplicação

### :bug: Back-end
#### Configuração
```
$ cd project-manager-api
$ yarn
```
Ajustar parâmetros de usuário e senha do arquivo [database.js](project-manager-api/src/config/database.js) em `project-manager-api/src/config/database.js` de acordo com as credencias do seu banco de dados
```
$ yarn sequelize db:create
$ yarn sequelize db:migrate
```
#### Execução
```
$ yarn dev
```

### :cyclone: Front-end
#### Configuração

Ajustar a BaseURL do arquivo [api.ts](project-manager-app/src/services/api.ts) em `project-manager-app/src/services/api.ts` de acordo com o emulador que for utilizar para executar a aplicação

##### Endereços para cada emulador/simulador:
* Genymotion:              http://10.0.3.2:3333/
* Emulador Android Studio: http://10.0.2.2:3333/
* Simulador IOS:           http://localhost:3333/


```
$ cd project-manager-app
$ yarn start
```
#### Execução
```
$ yarn android
```
ou
```
$ yarn ios
```

## :page_facing_up: Licença 
Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :purple_heart: por <strong> Carlos Henrique da Costa Silva </strong> </p>
