import User from "../Models/userModel.js"
import bcryptjs from "bcryptjs"
import generateToken from "../Utils/generateToken.js"

export const registerUser = async (req,res) => {
    try {
        const {username,email,password,confirmPassword,phone,platform,profilePic} =  req.body
        if(!username || !email || !password || !confirmPassword || !phone || !platform){
            // console.log(username,email,password,confirmPassword,phone,platform);
            return res.status(400).json({error: "All fields are required"})
        }
        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match"})
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({error: "User already exists"})
        }
        const isUsername = await User.findOne({username})
        if(isUsername){
            return res.status(400).json({error: "Username already exists"})
        }
        const isPhoneExist = await User.findOne({phone})
        if(isPhoneExist){
            return res.status(400).json({error: "Phone number is already registered"})
        }
        const newPass = bcryptjs.hashSync(password,10)
        const newUser = new User({
            username,
            email,
            password: newPass,
            phone,
            platform,
            profilePic
        })
        await newUser.save()
        const token = await generateToken(newUser._id)
        res.status(201).cookie("accessToken",token).json({message: "Welcome into Gaming World!",newUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const loginUser = async (req,res) => {
    const {username,password} = req.body
    if(!username || !password){
        return res.status(400).json({error: "All fields are required"})
    }
    try {
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({error: "User does not exist"})
        }
        const isMatch = bcryptjs.compareSync(password, user.password)
        if(!isMatch){
            return res.status(400).json({error: "Invalid credentials"})
        }
        const token = await generateToken(user._id)
        res.status(200).cookie("accessToken",token,{httpOnly:true}).json({message: `Welcome back! ${user.username}`,user});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const getTotalUsers = async(req,res)=>{
    try {
        const users = await User.find()
        // Get the start of today
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0); // Set to 00:00:00

        // Get the start of last week (7 days ago)
        const startOfLastWeek = new Date(startOfDay);
        startOfLastWeek.setDate(startOfLastWeek.getDate() - 7); // Subtract 7 days

        // Query for users created since last week
        const ThisWeekUsers = await User.find({
            createdAt: {
                $gte: startOfLastWeek, // From 7 days ago
            },
        });
        res.status(200).json({users,ThisWeekUsers})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}