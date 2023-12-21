import express from 'express'
import { deleteUser, getAllUsers, getUserByMail, updateUser } from '../controller/users'
import { isAuthenticated, isOwner } from '../middleware';


export default (router: express.Router) => {
    router.get('/users',  getAllUsers)
    router.get('/users/get-user-detail', isAuthenticated, isOwner, getUserByMail)
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser)
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser)
}