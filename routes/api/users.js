import express from 'express'
import UserController from '../../controller/userController.js'

const router = express.Router()

router.post('/signup', UserController.createUser)
router.delete('/:id', UserController.deleteUser)
router.post('/login', UserController.login)


export default router