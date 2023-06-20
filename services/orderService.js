import OrderHandler from "../handlers/orderHandler.js"
import ProductHandler from "../handlers/productHandler.js"

class OrderService{
  static async createOrder(req){
    try {
      const product = await ProductHandler.getProduct(req.body.productId)
      if(product){
        const newOrder = await OrderHandler.createOrder(req)
        return newOrder
      }
      return "No product exists with this id"
    } catch (error) {
      console.log(error)
    }
  }

  static async getOrder(){
    try {
      const getOrder = await OrderHandler.getOrder()
      return getOrder
    } catch (error) {
      console.log(error)
    }
  }

  static async getOrderById(req){
    try {
      const getOrder = await OrderHandler.getOrderById(req)
      return getOrder
    } catch (error) {
      console.log(error)
    }
  }

  static async deleteOrder(req){
    try {
      await OrderHandler.deleteOrder(req)
    } catch (error) {
      console.log(error)
    }
  }
}

export default OrderService