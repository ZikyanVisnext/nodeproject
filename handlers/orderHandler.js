import Order from "../models/order.js";

class OrderHandler {
  static async createOrder(req) {
    try {
      const newOrder = await new Order({
        product: req.body.productId,
        quantity: req.body.quantity,
      });
      newOrder.save();
      return newOrder;
    } catch (error) {
      console.log(error);
    }
  }

  static async getOrder() {
    try {
      const getOrder = await Order.find().populate('product')
      // const getOrder = await Order.find()

        // .exec()
        // .then((docs) => {
        //   res.status(200).json(docs);
        // })
        // .catch((err) => {
        //   res.status(500).json({
        //     error: err,
        //   });
        // });
      return getOrder;
    } catch (error) {
      console.log(error);
    }
  }

  static async getOrderById(req) {
    try {
      const getOrder = await Order.findById(req.params.id)
      return getOrder;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteOrder(req) {
    try {
      await Order.deleteOne({_id: req.params.id})
    } catch (error) {
      console.log(error);
    }
  }
}

export default OrderHandler;
