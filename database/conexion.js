const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Aquí debes ingresar la contraseña de tu servidor MySQL
    database: 'veterinaria',
    charset: 'utf8mb4', // Establecer el conjunto de caracteres en UTF-8
    insecureAuth: true // Agregar esta línea para permitir la autenticación no segura
});

connection.connect((error) => { // Conectar a la base de datos
    if (error) {
        console.error('Error al conectar a la base de datos: ', error); // Imprimir mensaje de error en la consola
    }
});

module.exports = { connection }; // Exportar la función para obtener usuarios
