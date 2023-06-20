import express from "express";
import ProductController from "../../controller/ProductController.js";
import checkAuth from "../../middleware/checkAuth.js";

const router = express.Router();


router.get("/", ProductController.getAllProduct)
router.post('/', checkAuth, ProductController.createProduct)
router.get("/:id", ProductController.getProduct)
router.delete("/:id", checkAuth, ProductController.deleteProduct)
router.patch("/:id", checkAuth, ProductController.updateProduct)

export default router;
