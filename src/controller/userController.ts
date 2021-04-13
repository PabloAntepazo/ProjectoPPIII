import {Request, Response} from 'express';

const listado =[
{"id":"1","usuario":"Juan Perez","password":"123456"},
{"id":"2","usuario":"Pepe Cadena","password":"123456"},
{"id":"3","usuario":"Martin Gonzalez","password":"123456"}];

class UserController{ 

    public signin (req:Request, res:Response){
    console.log(req.body);
    //res.send('Sign In!!!');
    res.render("partials/signinForm");
    }

    public login (req:Request, res:Response){
        //console.log(req.body);
        //res.send('Sign In!!!');
        //res.send({"Recibido":req.body});
        if(req.body.user=="Pepe"&&req.body.password=="123")
			res.redirect("./home");
			//res.redirect("https://www.google.com");
		else//Falta enviar el resultado estilizado a traves de una vista
        	res.send({"Usuario no registrado Recibido":req.body});
        }


    public signup (req:Request, res:Response){
    console.log(req.body);
    //res.send('Sign Up!!!');
    res.render("partials/signupForm");
    }
        
     public addUser (req:Request, res:Response){
     console.log(req.body);
     //res.send('Sign In!!!');
     res.send({"Recibido":req.body});
     }

     public home(req:Request,res:Response){
		console.log(req.body);
        res.render("partials/home", {listado});
    
	}

    public process(req:Request, res:Response){
        console.log(req.body);
        res.send('Datos Recibidos!!!');
        //res.render("partials/home, {listado}");
    }

}

const userController = new UserController();
export default userController;