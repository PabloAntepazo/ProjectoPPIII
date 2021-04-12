"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = require("express");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send("Main!!!!!!!!!!!"));
        //res.render("partials/principal")
        /*this.router.get('/signin', (req:Request, res: Response)=>{
            res.send('Sign In!!');
            //res.render("partials/principal")
        });*/
        //login
        this.router.get('/signin', userController_1.default.signin);
        this.router.post('/signin', userController_1.default.login);
        //Registro
        this.router.get('/signup', userController_1.default.signup);
        this.router.post('/signup', userController_1.default.addUser);
        //Home del Usuario
        this.router.get('/home', userController_1.default.home);
        this.router.post('/home', userController_1.default.process);
    }
}
//Exportamos el enrutador con 
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map