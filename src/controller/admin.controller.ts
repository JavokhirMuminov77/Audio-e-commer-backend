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


adminController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        res.send("DONE");
    } catch (err) {
        console.log("Error, procesLogin", err);
    }
}

adminController.processSignup = (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        res.send("DONE");
    } catch (err) {
        console.log("Error, procesSignup", err);
    }
}


export default adminController;