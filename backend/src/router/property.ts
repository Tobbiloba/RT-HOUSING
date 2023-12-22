import express from 'express'
import { addProperty, getAllProperties } from '../controller/property'

export default (router: express.Router) => {
    router.get('/properties', getAllProperties)
    router.post('/property/create:id', addProperty)
}