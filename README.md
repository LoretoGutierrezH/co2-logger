# Desarrollo Prueba Teros y forEach

Aplicación creada con Node, Express y MongoDB para el back-end (solo GET all y POST) + React para el front-end y Tables, Buttons y Form de Bootstrap (+algunos estilos inline y css module).

- Todos los campos son obligatorios a nivel de modelo
- No hice deploy del back-end, pero sí hice deploy del front-end al hosting de Firebase
- No hice la autenticación (la podría haber hecho con Firebase, pero aún no sé hacerlo con node, express y mongo). Supongo que debiese haber creado un modelo User con ciertas propiedades y un rol que solo le permitiera ver los viajes que el usuario conectado había registrado. TAmbién debería haber creado un usuario con un rol de administrador para que esa cuenta tuviera acceso a todos los viejes registrados por todos los usuarios
- En la propiedad workers solo guardé la cantidad de pasajeros por viaje

Para probar la app, seguir los siguientes pasos:
1. Clonar respositorio (para tener acceso al back-end)
2. npm install
3. Una vez en la carpeta del proyecto (co2-logger), ejecutar npm run start:dev (para correr servidor local en puerto 8000 o 3000)
4. Para ver la lista de viajes y registrar viajes adicionales: https://co2-trip-logger.web.app/

