import express from 'express';
import { getCartByID, createCart, filterAndUpdateCart, getCarts, getCartByName, deleteCartById } from '../db/cart';
import { random } from '../helpers';

export const addItemToCart = async (req: express.Request, res: express.Response) => {
  try {
    const { user_id } = req.params;
    const { items } = req.body;
    const existingCart = await getCartByID(items.product_id);
    // console.log('existing cart',existingCart)
    console.log(items, items.product_name)

    if (existingCart) {
      console.log('exists')
      return res.sendStatus(200).end()
      
      // const filter = {
      //    user_id, 
      //   '_id': { '$oid': user_id },
      //   'product_id': items.product_id, 'items.status': 'inCart' };
      // const update = { $inc: { 'items.$.quantity': 1 } };
      // const options = { new: true };

      // console.log(existingCart)
      // const newCart = await filterAndUpdateCart(filter, update, options);
      // console.log(newCart)
      // return res.status(200).json(newCart).end();
    } 

    console.log('called')

    const cart: any = await createCart({
      user_id,
      cart_id: random(),
      items: {
        product_id: items?.product_id,
        product_name: items?.product_name,
        product_category: items?.product_category,
        product_amount: items?.product_amount,
        product_quantity: items?.product_quantity,
        product_imageUrl: items?.product_imageUrl,
        status: 'inCart',
      },
      status: 'success',
    });

    console.log('added new item')

    return res.status(200).json(cart).end();
  } catch (error) {
    console.error(error);
    return res.status(400);
  }
};


export const getAllCartsItems = async (req: express.Request, res: express.Response) => {
  try {
    const carts = await getCarts();
    console.log('get all carts')
    return res.status(200).json(carts);
  } catch (error) {
    console.log(error);

    return res.sendStatus(400);
  }
}

export const findById = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    console.log(id)
    const carts = await getCartByID(id);
    console.log(carts)

    return res.status(200).json(carts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}


export const deleteCart = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    console.log(id)
    const carts = await deleteCartById(id)
    console.log(carts)

    return res.status(200).json(carts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

// /cart/delete?cart_id=