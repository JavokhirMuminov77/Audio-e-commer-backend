
import mongoose, {Schema} from "mongoose";
import { MemberStatus,  MemberType } from "../libs/enums/member.enum";

const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER,
    },

    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE,
    },

    memberNick: {
        type: String,
        index: {unique: true, sparse: true},// bu va patstagi qiymat faqat Nick bolishi mumkunligini bildiradi
        required: true,
    },

    memberPhone: {
        type: String,
        index: {unique: true, sparse: true},// bu va patstagi qiymat faqat Nick bolishi mumkunligini bildiradi
        required: true,
    },

    memberPassword: {
        type: String,
        select:false,// bu databasedan shu malumotni olib bermasliligini soralmoqda.
        required: true,//bu malumot bolishi shart degan manoni bildiradi!
    },

    memberAdress: {
        type: String,
    },

    memberDesc: {
        type:String,
    },

    memberImage: {
        type: String,
    },

    memberPoints: {
        type: Number,
        default: 0,
    },
},
{timestamps: true}// bu izga databasedan createdAd, updatedAdni olib beradi!


);

export default mongoose.model('Member', memberSchema);