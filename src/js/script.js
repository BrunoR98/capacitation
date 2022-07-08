/**
 * Author: Renaudo Bruno, Agustín.
 * Date: 07/07/22
 * Comments: This script return a JSON with five Usuario´s Objects.
 * You can initialize the server by typing in the console:
 * 'npm start' or 'node src/js/script.js'
 * In 'src/requests/requests.http' you can test some requests.
 */

const http = require("http");

const hostname  = "localhost";
const port      = 8000;

class Usuarios {
    constructor(id, firstName, lastName, age, country) {
        this.id         = id;
        this.firstName  = firstName;
        this.lastName   = lastName;
        this.age        = age;
        this.country    = country;
    }
};

const getUserList = [
    new Usuarios(1, "Bruno", "Renaudo", 24, "Argentina"),
    new Usuarios(2, "Homero", "Simpson", 66, "Estados Unidos"),
    new Usuarios(3, "Charles", "Leclerc", 24, "Mónaco"),
    new Usuarios(4, "Estefanía", "Petirnatti", 35, "Uruguay"),
    new Usuarios(5, "Sergio", "López", 40, "México"),
];

const userJson = JSON.stringify(getUserList);

const requestListener = (req, res) => {
    if(req.url === "/usuarios") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(userJson);
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        const userError = {
            statusCode: 404,
            message: `Resource not found in http://${hostname}:${port}${req.url}. Try again with another url.`,
        }
        res.end(JSON.stringify(userError));
    }
};

http
    .createServer(requestListener)
    .listen(port, hostname, () => {
        console.log(`Servidor ejecutandose en http://${hostname}:${port}`);
    }); 

