## Capacitación esolutions
* Cada branch pertenecerá a un trabajo práctico semanal.
* master sera el branch definitivo de la aplicación estable.

## Trabajo Práctico N°6
* Acceder a crear y ver historias, mediante registro y login previo.
* Se explican algunas funcionalidades en la sección de [Comentarios](https://github.com/BrunoR98/capacitation/tree/tp6#comentarios).

## Setup
Para iniciar el proyecto:
```
npm start
```
Para iniciar json-server:
```
npm run api
```

## Tecnologías
Projecto creado con:
* React
* json-server

## Comentarios
* Como DB fue utilizado el json-server, en el cual se crean 2 colecciones.
1. users: Contendrá el 'id', 'username', 'email' y 'password' de los usuarios registrados,
puede inicializarse vacío y al registrar un usuario se autocompletará.
2. posts: Contendrá el 'title', 'content' y 'id' de los posts que creen los usuarios logeados.
* Solo se podrá acceder a ver (/AllPosts) o crear posts (/CreatePost) luego de realizar
un 'Log In', por ende, es obligatorio realizar un registro si no hay usuarios en la DB.
* En el caso de que se introduzca un 'endpoint' incorrecto, se redireccionará en 5 segundos a 'Home' ('/').
* Si se intenta ver o crear posts sin estar logeados, se redireccionará en 5 segundos a 'Home' para realizar
el logeo correspondiente o registro previo.