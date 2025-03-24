import mongoose, { Document, Schema, SchemaTypes } from "mongoose";
import { User } from "./user";

export interface IPurchase extends Document {}

const PurchaseSchema: Schema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: User.modelName,
        required: true,
    },
    product: {
        type: SchemaTypes.ObjectId,
        ref: User.modelName,
        required: true,
    },
    quantity:{
        type: Number,
    }
    
},{timestamps: true});

// PurchaseSchema.index({ location: "2dsphere" }); // for saving location coordinates

export const Purchase = mongoose.model<IPurchase>("Purchase", PurchaseSchema);