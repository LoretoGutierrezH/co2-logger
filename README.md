## Prueba Situacional Teros y forEach

Aplicación creada con Node, Express y MongoDB para el back-end (solo GET all y POST) + React para el front-end y Tables, Buttons y Form de Bootstrap (+algunos estilos inline y css module).

- Todos los campos son obligatorios a nivel de modelo
- No hice deploy de la app
- No hice la autenticación, pero seguramente debiese haber creado un modelo User con ciertas propiedades y un rol que solo le permitiera ver los viajes que dicho usuario había registrado. Debería haber creado un usuario con un rol de administrador para que esa cuenta tuviera acceso a todos los viejes registrados por todos los usuarios
- En la propiedad workers solo guardé la cantidad de pasajeros por viaje

Para probar la app, seguir los siguientes pasos:
1. Clonar respositorio
2. cd client y npm install
3. npm run start:dev (para correr servidor local en puerto 8000 o 3000)
4. npm run start:client (para correr app de React normalmente)
