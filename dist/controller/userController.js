"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listado = [
    { "id": "1", "usuario": "Juan Perez", "password": "123456" },
    { "id": "2", "usuario": "Pepe Cadena", "password": "123456" },
    { "id": "3", "usuario": "Martin Gonzalez", "password": "123456" }
];
class UserController {
    signin(req, res) {
        console.log(req.body);
        //res.send('Sign In!!!');
        res.render("partials/signinForm");
    }
    login(req, res) {
        //console.log(req.body);
        //res.send('Sign In!!!');
        //res.send({"Recibido":req.body});
        if (req.body.user == "Pepe" && req.body.password == "123")
            res.redirect("./home");
        //res.redirect("https://www.google.com");
        else //Falta enviar el resultado estilizado a traves de una vista
            res.send({ "Usuario no registrado Recibido": req.body });
    }
    signup(req, res) {
        console.log(req.body);
        //res.send('Sign Up!!!');
        res.render("partials/signupForm");
    }
    addUser(req, res) {
        console.log(req.body);
        //res.send('Sign In!!!');
        res.send({ "Recibido": req.body });
    }
    home(req, res) {
        console.log(req.body);
        res.render("partials/home", { listado });
    }
    process(req, res) {
        console.log(req.body);
        res.send('Datos Recibidos!!!');
        //res.render("partials/home, {listado}");
    }
}
const userController = new UserController();
exports.default = userController;
//# sourceMappingURL=userController.js.map