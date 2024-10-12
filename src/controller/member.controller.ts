import  {Request, Response} from 'express';

import { T } from "../libs/types/common";


const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
    try {
        res.send("You are on Home Page");
    } catch(err) {
        console.log('Error, goHome:', err);
    }
   
}

memberController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("You are on Login Page");
    } catch(err) {
        console.log('Error, Login:', err);
    }
   
}

memberController.getSignup = (req: Request, res: Response) => {
    try {
        res.send("You are on Signup Page");
    } catch(err) {
        console.log('Error, Signup:', err);
    }
   
};

export default memberController;