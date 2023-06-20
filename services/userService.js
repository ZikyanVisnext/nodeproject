import UserHandler from "../handlers/userHandlers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {
  static async createUser(req) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const user = await UserHandler.findUserByEmail(req);
      if (user) {
        return "User already exists with this email";
      } else {
        const newUser = await UserHandler.createUser(
          req.body.email,
          hashedPassword
        );
        return newUser;
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteUser(req) {
    try {
      await UserHandler.deleteUser(req);
    } catch (error) {
      console.log(error);
    }
  }

  static async login(req) {
    try {
      const user = await UserHandler.findUserByEmail(req);
      if (user) {
        const comparedPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (comparedPassword) {
          const token = jwt.sign(
            {
              email: user.email,
            },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          );
          return {message: 'Login Successfull', token: token};
        } else {
          return "Auth Failed";
        }
      } else {
        return "Auth Failed";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserService;
