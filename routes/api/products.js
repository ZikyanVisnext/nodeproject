import express from 'express'
import ProductController from '../../controller/ProductController.js';

const router = express.Router()

router.get('/', ProductController.getAllProduct)
router.post('/', ProductController.createProduct)
router.get('/:id', ProductController.getProduct)
router.delete('/:id', ProductController.deleteProduct)
router.patch('/:id', ProductController.updateProduct)

export default router
