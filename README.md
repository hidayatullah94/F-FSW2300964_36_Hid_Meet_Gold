STARTED PROJECT

===============================================================================

1. Clone Project on github
2. Install Package Project (npm install)
3. Run Project

SET UP PROJECT

===============================================================================

1. install package :

- express
- knex
- handlebars
- argon2
- pg
- moment
- dotenv

2. struktur folder

- routes
- controllers
- views

3. migrasi

- npx knex migrate:make table => untuk membuat table
- npx knex migrate:latest => update data setelah table dibuat
- npx knex seed:make table => untuk mengisi data secara ototmatis
- npx knex seed:run => untuk menjalankan proses pengisian data

4. API

===============================================================================
a users

- create user = POST http://localhost:5000/user-create
- get all user = GET http://localhost:5000/user-all
- get detail user = GET http://localhost:5000/user-detail/id
- update user = PUT http://localhost:5000/user-update/id
- delete user = DELETE http://localhost:5000/user-delete/id

===============================================================================

b rooms

- create room = POST http://localhost:5000/room-create
- get all room = GET http://localhost:5000/room-all
- get detail room = GET http://localhost:5000/room-detail/id
- update room = PUT http://localhost:5000/room-edit/id
- delete room = DELETE http://localhost:5000/room-delete/id
