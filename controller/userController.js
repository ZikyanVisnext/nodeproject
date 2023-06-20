import UserService from "../services/userService.js";

class UserController {
  static async createUser(req, res) {
    try {
      const newUser = await UserService.createUser(req)
      res.json(newUser)
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req)
      res.json({message: 'User has been deleted'})
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const loggedUser = await UserService.login(req)
      res.json(loggedUser)
    } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }
}

export default UserController;
