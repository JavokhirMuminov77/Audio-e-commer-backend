import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    }

    public async processLogin (input: LoginInput): Promise <MemberType> {
        const member = await this.memberModel
        .findOne({memberNick: input.memberNick},
             {memberNick: 1, memberPassword: 1}) // bu findOne dan shu ikkita malumotni olib berishini talab qilyapmiz! 
        .exec();
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
        const isMatch  = input.memberPassword === member.memberPassword;
        console.log("isMatch", isMatch);
        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }
        console.log("member", member);
        return member;
    }








    public async processSignup(input: MemberInput): Promise <Member> {
        const exist = await this.memberModel
        .findOne({memberType: MemberType.ADMIN})
        .exec();

        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

        try {
            const tempResult  = new this.memberModel(input);
            const result = await tempResult.save(); 
             result.memberPassword = " ";
        return result;
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }

        
    }

  
}

export default MemberService;