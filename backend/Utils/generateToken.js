import jsonwebtoken from 'jsonwebtoken'
const generateToken = async(id)=>{
    const token = await jsonwebtoken.sign({id: id}, process.env.JWT_SECRET)
    return token
}

export default generateToken