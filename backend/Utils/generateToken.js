import jsonwebtoken from 'jsonwebtoken'
import User from '../Models/userModel.js'
const generateToken = async(id,req)=>{
    const user = await User.findById(id)
    req.user = user;
    const token =  jsonwebtoken.sign({id: id}, process.env.JWT_SECRET)
    return token
}

export default generateToken