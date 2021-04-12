import userController from '../controller/userController';
import { Router, Request, Response } from 'express';
class UserRoutes{
	public router: Router = Router();
	constructor(){
		this.config();
	}
	config():void{
		this.router.get('/',(req:Request,res:Response)=> 
        res.send("Main!!!!!!!!!!!"));
        //res.render("partials/principal")

        /*this.router.get('/signin', (req:Request, res: Response)=>{
            res.send('Sign In!!');
            //res.render("partials/principal")
        });*/
        //login
        this.router.get('/signin', userController.signin);
        this.router.post('/signin', userController.login);
        
        //Registro
        this.router.get('/signup', userController.signup);
        this.router.post('/signup', userController.addUser);

        //Home del Usuario
        this.router.get('/home',userController.home);
        this.router.post('/home', userController.process);
            
	}
}

//Exportamos el enrutador con 

const userRoutes = new UserRoutes();
export default userRoutes.router;

