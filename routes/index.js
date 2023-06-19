import express from 'express'
import productRoutes from './api/products.js'
import orderRoutes from './api/orders.js'

const router = express.Router()

router.use('/products', productRoutes)
router.use('/orders', orderRoutes)

export default router
