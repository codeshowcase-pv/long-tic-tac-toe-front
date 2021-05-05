# Запуск сервера в докере
1. На основе `.env.example` создать `.env`
2. Запустить контейнер "раннер", внутри него установить пакеты
```
docker-compose run runner
yarn
exit
```
3. Запустить сервер `docker-compose up server`
