ФИО | Филилеева Виктория Филипповна
--- | ---
*Макет* | Autumn
*Номер д/з* | ДЗ 1-4
*Ссылка на репозиторий* | https://github.com/onexsan/filileeva-ls 
*Ссылка на сайт* | https://onexsan.github.io/filileeva-ls/

## Порядок установки

```
git clone https://github.com/onexsan/filileeva-ls.git
cd filileeva-ls
npm i
npm run build
```

***

> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же 
[последняя версия Yarn](https://yarnpkg.com/ru/docs/install)


## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev | Запустит webpack-dev-server с _горячей_ заменой модулей |
| build | Соберет проект для **production** (проект готов к загрузке на сервер) |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```

##### Либо:
```sh
$ yarn имя_скрипта
```
