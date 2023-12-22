import express from 'express'
import authentication from './authentication'
import users from './users'
import cart from './cart'
import property from './property'
const router = express.Router()

export default (): express.Router => {
    authentication(router)
    users(router)
    cart(router)
    property(router)
    return router
}