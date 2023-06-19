import ProductHandler from "../handlers/productHandler.js"


class ProductService{
  static async createProduct(data){
    try {
      const newProduct = await ProductHandler.createProduct(data)
      return newProduct
    } catch (error) {
     console.log(error) 
    }
  }

  static async getProduct(id){
    try {
      const fetchProduct = await ProductHandler.getProduct(id)
      return fetchProduct
    } catch (error) {
      console.log(error)
    }
  }

  static async getAllProduct(){
    try {
      const fetchAllProducts = await ProductHandler.getAllProduct()
      return fetchAllProducts
    } catch (error) {
      console.log(error)
    }
  }

  static async deleteProduct(id){
    try {
      await ProductHandler.deleteProduct(id)
    } catch (error) {
      console.log(error)
    }
  }

  static async updateProduct(data){
    try {
      const updateProduct = await ProductHandler.updateProduct(data)
      return updateProduct
    } catch (error) {
      console.log(error)
    }
  }
}

export default ProductService