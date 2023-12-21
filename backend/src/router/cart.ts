import express from 'express'
import { addItemToCart, findById, getAllCartsItems } from '../controller/cart'



export default (router: express.Router) => {
    router.get('/cart',  getAllCartsItems)
    router.post('/cart/create:id',  addItemToCart)
    router.get('/cart/find?cart_id=:id', findById)
}