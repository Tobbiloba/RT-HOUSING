import express from 'express';
import { getCartByID, createCart, filterAndUpdateCart, getCarts, getCartByName, deleteCartById } from '../db/cart';
import { random } from '../helpers';

export const addItemToCart = async (req: express.Request, res: express.Response) => {
  try {
    const { user_id } = req.params;
    const { items } = req.body;
    const existingCart = await getCartByID(items.product_id);


    if (existingCart) {
      return res.sendStatus(200).end()

    } 


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
    const carts = await getCartByID(id);

    return res.status(200).json(carts);
  } catch (error) {
    return res.sendStatus(400);
  }
}


export const deleteCart = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const carts = await deleteCartById(id)
    console.log(carts)

    return res.status(200).json(carts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}