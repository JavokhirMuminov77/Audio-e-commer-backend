import  {Request, Response} from 'express';
import MembrsService from "../models/Member.service";
import { T } from "../libs/types/common";


const adminController: T = {};

adminController.goHome = (req: Request, res: Response) => {
    try {
        res.send("You are on Home Page");
    } catch(err) {
        console.log('Error, goHome:', err);
    }
   
}

adminController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("You are on Login Page");
    } catch(err) {
        console.log('Error, Login:', err);
    }
   
}

adminController.getSignup = (req: Request, res: Response) => {
    try {
        res.send("You are on Signup Page");
    } catch(err) {
        console.log('Error, Signup:', err);
    }
   
};

export default adminController;