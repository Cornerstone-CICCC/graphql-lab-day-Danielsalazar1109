import mongoose, {Schema, Document } from "mongoose";

const ProsuctSchema = new Schema({
  productName:{ type:String,required:true },
  productPrice :{ type:Number , required:true }
})

export const Product = mongoose.model("Product",ProsuctSchema)