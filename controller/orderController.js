import OrderService from "../services/orderService.js";

class OrderController {
  static async createOrder(req, res) {
    try {
      const newOrder = await OrderService.createOrder(req)
      res.json(newOrder)
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  static async getOrder(req, res) {
    try {
      const getOrder = await OrderService.getOrder()
      res.json(getOrder)
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  static async getOrderById(req, res) {
    try {
      const getOrder = await OrderService.getOrderById(req)
      res.json(getOrder)
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  static async deleteOrder(req, res) {
    try {
      await OrderService.deleteOrder(req)
      res.json({message: 'Order has been deleted'})
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }
}

export default OrderController;
