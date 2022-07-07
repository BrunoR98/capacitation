const http = require("http");
const host = "localhost";
const port = 8000;

class Usuarios {
    constructor(id, firstName, lastName, age, country) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }
}

const getUserList = [
    new Usuarios(1, "Bruno", "Renaudo", 24, "Argentina"),
    new Usuarios(2, "Homero", "Simpson", 66, "Estados Unidos"),
    new Usuarios(3, "Charles", "Leclerc", 24, "Mónaco"),
    new Usuarios(4, "Estefanía", "Petirnatti", 35, "Uruguay"),
    new Usuarios(5, "Sergio", "López", 40, "México"),
];

const userJson = JSON.stringify(getUserList);

