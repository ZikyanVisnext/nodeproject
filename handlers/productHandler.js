import Product from "../models/product.js";

class ProductHandler {
  static async createProduct(data) {
    try {
      const newProduct = new Product({
        name: data.name,
        price: data.price,
      });
      await newProduct.save();
      return newProduct;
    } catch (error) {
      console.log(error);
    }
  }
  static async getProduct(id) {
    try {
      const fetchProduct = await Product.findById(id);
      return fetchProduct;
    } catch (error) {
      console.log(error);
    }
  }
  static async getAllProduct() {
    try {
      const fetchAllProducts = await Product.find();
      return fetchAllProducts;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteProduct(id) {
    try {
      await Product.deleteOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateProduct(data) {
    try {
      await Product.updateOne(
        { _id: data.params.id },
        {
          $set: {
            name: data.body.name,
            price: data.body.price
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProductHandler;
