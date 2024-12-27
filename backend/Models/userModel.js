import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    platform: {
        type: String,
        required: true,
    },
    cart: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, default: 1 },
        },
    ],

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    accountStatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    profilePic: {
        type: String,
    },
},{ timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;