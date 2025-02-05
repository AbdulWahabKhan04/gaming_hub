import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title:{
        required: true,
        type: String
    },
    type:{
        required: true,
        type: String
    },
    price:{
        required: true,
        type: Number
    },
    description:{
        required: true,
        type: String
    },
    category:{
        required: true,
        type: String
    },
    coverImage:{
        required: true,
        type: String
    },
    trailer:{
        type: String
    },
    onSale:{
        type: Boolean
    },
    salePrice:{
        type: Number
    },
    stock:{
        type: Number
    },
    platform:{
        required: true,
        type: String
    },
    featured:{
        type: Boolean
    },
    saleExpiry:{
        type: Date
    },
    views:{
        type: Number,
        default: 0
    }

},{timestamps: true})

const Product = mongoose.model("Product", productSchema);
export default Product;