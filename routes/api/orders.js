import express from 'express'
import OrderController from '../../controller/orderController.js'
import checkAuth from '../../middleware/checkAuth.js'

const router = express.Router()

router.post('/', checkAuth, OrderController.createOrder)
router.get('/', checkAuth, OrderController.getOrder)
router.get('/:id', checkAuth, OrderController.getOrderById)
router.delete('/:id', checkAuth, OrderController.deleteOrder)


export default router