import express from 'express'
import productRoutes from './api/products.js'
import orderRoutes from './api/orders.js'
import userRoutes from './api/users.js'

const router = express.Router()

router.use('/products', productRoutes)
router.use('/orders', orderRoutes)
router.use('/users', userRoutes)

export default router
