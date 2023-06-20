import User from "../models/user.js";

class UserHandler {
  static async createUser(email, hashedPassword){
    try {
      const newUser = new User({
        email: email,
        password: hashedPassword
      })
      newUser.save()
      return newUser
    } catch (error) {
      console.log(error)
    }
  }

  static async findUserByEmail(req){
    try {

      // here i've to use findOne() because if it found nothing then it will return null and
      // if i use find() then it will return an empty array which will end up being true because
      // an empty array is something that is returnable. If i still want to use find() then i'll
      // have to use .length() function in order to make my if condition work properly

      const user = await User.findOne({email: req.body.email})
      return user
    } catch (error) {
      console.log(error)
    }
  }

  static async deleteUser(req){
    try {
      await User.deleteOne({_id: req.params.id})
    } catch (error) {
      console.log(error)
    }
  }

  static async login(email, hashedPassword){
    try {
      const newUser = new User({
        email: email,
        password: hashedPassword
      })
      newUser.save()
      return newUser
    } catch (error) {
      console.log(error)
    }
  }
}

export default UserHandler;