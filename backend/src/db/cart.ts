// import mongoose from "mongoose";

// const CartSchema = new mongoose.Schema({
//   product_id: { type: String, required: true },
//   item: [
//     {
//       product_name: { type: String, required: true },
//       product_category: { type: String, required: true },
//       product_amount: { type: String, required: true },
//       product_quantity: { type: String, required: true },
//       product_image: { type: String, required: true },
//     },
//   ],
//   created_at: { type: Date, default: Date.now },
// });


// export const CartModel = mongoose.model('Cart', CartSchema);


// export const getCarts = () => CartModel.find();
// export const getCartByID = (id: string) => CartModel.findById(id);




import { values } from 'lodash';
import mongoose, { Document } from 'mongoose';

// interface Product {
//   user_id: string;
//   product_name: string;
//   product_category: string;
//   product_amount: string;
//   product_quantity: string;
//   product_image: string;
// }

// interface CartItem extends Document {
//   user_id: string;
//   product_id: string;
//   items: Product[];
//   created_at: Date;
// }

const CartSchema = new mongoose.Schema({
    cart_id: { type: String, required: true },
  items: 
    {
      product_id: { type: String, required: true },
      product_name: { type: String, required: true },
      product_category: { type: String, required: true },
      product_amount: { type: String, required: true },
      product_quantity: { type: String, required: true },
      product_imageUrl: { type: String, required: true },
      status: { type: String, enum: ['inCart', 'processed', 'shipped'], default: 'inCart' },
    },
  created_at: { type: Date, default: Date.now },
  status: {type: String, required: true}
});

export const CartModel = mongoose.model('Cart', CartSchema);

export const getCarts = () => CartModel.find();
// export const getCartByID = (id: string) => CartModel.findById(id);
export const getCartByID = (id: string) => CartModel.findOne({"product_id": id});
export const getCartByName = (itemName: string) => CartModel.findOne({"product_name": itemName});
export const createCart = (values: Record<string, any>) => new CartModel(values)
    .save().then((user: any) => user.toObject())
export const filterAndUpdateCart = (filter : Record<string, any>, product_id : Record<string, any>, options : Record<string, any>) => CartModel.findByIdAndUpdate(filter, product_id, options)
export const deleteCartById = (id: string) => CartModel.findOneAndDelete({_id: id})