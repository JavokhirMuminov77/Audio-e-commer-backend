import  {Request, Response} from 'express';
import MembrsService from "../models/Member.service";
import { T } from "../libs/types/common";
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';


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


adminController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        const input: LoginInput = req.body;
        const memberService = new MembrsService();
        const result = await memberService.processLogin(input);

        res.send(result);
    } catch (err) {
        console.log("Error, procesLogin", err);
        res.send(err);
    }
}

adminController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("Done");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.ADMIN;
        const memberService = new MembrsService();
        const result = await memberService.processSignup(newMember);
        res.send(result);
    } catch (err) {
        console.log("Error, procesSignup", err);
        res.send(err);
    }
}


export default adminController;