import express from 'express'
import OrderController from '../../controller/orderController.js'

const router = express.Router()

// router.get('/', OrderController.createOrder)

// router.post('/', (req, res, next)=>{
//     const order = {
//         productId: req.body.productId,
//         quantity: req.body.quantity
//     }
//     res.status(201).json({
//         message: 'Order created',
//         order: order
//     })
// })

// router.get('/:orderId', (req, res, next)=>{
//     res.status(200).json({
//         message: 'Order details',
//         id: req.params.orderId
//     })
// })

// router.delete('/:orderId', (req, res, next)=>{
//     res.status(200).json({
//         message: 'Order deleted',
//         id: req.params.orderId
//     })
// })


export default router