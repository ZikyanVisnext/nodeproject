class OrderController{
  static getOrders(req, res){
    try {
      res.status(200).json({
        message: "GET request from order section",
      });  
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }
}

export default OrderController