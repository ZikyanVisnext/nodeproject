import jwt from 'jsonwebtoken'

const checkAuth = async (req, res, next) => {
  try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userData = decoded
        next()
  } catch (error) {
    res.status(404).json({message: 'Auth Failed'})
  }
}

export default checkAuth