# Link

__Link__ - микросервис для взаимодействия с партнерскими ссылками. Через микросервис link можно выполнять следующие операции:

1. Создание ссылки | POST | `host/microservice/link`
2. Обновление ссылки | PATCH | `host/microservice/link` 
3. Удаление ссылки | DELETE | `host/microservice/link/:_id`
4. Редирект ссылки с короткого url на оригинальный url `host/cc` 
5. Получение всех ссылок | GET | `host/microservice/link`
6. Получение одной ссылки | GET | `host/microservice/link/:_id`

## Коллекция данных

Вся работа состоит из взаимодействий с коллекциями mongoDB (json обьекты), внутри которых храняться следущие данные:

1. __Offer__ - продвигаемый ресурс | String
2. __Model__ - модель сотрудничества | String
3. __Title__ - название ссылки | String
4. __Description__ - описание ссылки | String
5. __Url__ - оригинальный url | String
6. __Short__ - короткий url | String
