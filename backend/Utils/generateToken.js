import jsonwebtoken from 'jsonwebtoken'
import User from '../Models/userModel.js'
const generateToken = async(id,req)=>{
    const User = await User.findById(id)
    req.user = User;
    const token = await jsonwebtoken.sign({id: id}, process.env.JWT_SECRET)
    return token
}

export default generateToken