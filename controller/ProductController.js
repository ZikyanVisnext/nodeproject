import ProductService from "../services/productService.js";
class ProductController {
  static async createProduct(req, res) {
    try {
      const newProduct = await ProductService.createProduct(req.body)
      res.json(newProduct)
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  static async getProduct(req, res){
    try {
      const fetchProduct = await ProductService.getProduct(req.params.id)
      res.json(fetchProduct)
    } catch (error) {
      res.status(error.status || 500).json({message: error.message})
    }
  }

  static async getAllProduct(req, res){
    try {
      const fetchAllProducts = await ProductService.getAllProduct()
      res.json(fetchAllProducts)
    } catch (error) {
      res.status(error.status || 500).json({message: error.message})
    }
  }

  static async deleteProduct(req, res){
    try {
      await ProductService.deleteProduct(req.params.id)
      res.json({message: 'Product has been deleted'})
    } catch (error) {
      res.status(error.status || 500).json({message: error.message})
    }
  }

  static async updateProduct(req, res){
    try {
      const updateProduct = await ProductService.updateProduct(req)
      res.json(updateProduct)
    } catch (error) {
      res.status(error.status || 500).json({message: error.message})
    }
  }
}

export default ProductController;
