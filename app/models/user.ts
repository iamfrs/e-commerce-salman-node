import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    phone:string;
}

const UserSchema: Schema = new Schema({

    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        unique:true
    },
    

},{timestamps: true});






// UserSchema.index({ location: "2dsphere" }); // for saving location coordinates

export const User = mongoose.model<IUser>("User", UserSchema);