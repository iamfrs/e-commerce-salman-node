import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    product_name:string;
    stock:number;
    price:number;
    active:boolean;
}

const ProductSchema: Schema = new Schema({

    product_name:{
        type: String,
        required: true
    },
   
    price:{
        type: Number,
    }  ,
    stock:{
        type: Number,
    },
    active:{
        type:Boolean,
    }
},{timestamps: true});

// ProductSchema.index({ location: "2dsphere" }); // for saving location coordinates

export const Product = mongoose.model<IProduct>("Product", ProductSchema);