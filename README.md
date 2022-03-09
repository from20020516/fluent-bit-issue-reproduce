# fluent-bit issue reproduce

```
$ npm i --prefix app
$ VERSION=1.8.13 docker-compose up
$ docker-compose down
$ VERSION=1.8.12 docker-compose up
$ docker-compose down
```
