import Product from '../Models/productModel.js';

const createProduct = async (req, res) => {
    try {
        const { name,
            type,
            price,
            description,
            category,
            coverImage,
            trailer,
            onSale,
            salePrice,
            stock,
            platform,
            featured } = req.body;
        if (!name || !type || !price || !description || !category || !coverImage || !platform) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const product = new Product({
            name,
            type,
            price,
            description,
            category,
            coverImage,
            trailer,
            onSale,
            salePrice,
            stock,
            platform,
            featured
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTotalProducts = async(req,res)=>{
    try {
        const products = await Product.find()
        // Get the start of today
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0); // Set to 00:00:00

        // Get the start of last week (7 days ago)
        const startOfLastMonth = new Date(startOfDay);
        startOfLastMonth.setDate(startOfLastMonth.getDate() - 30); // Subtract 30 days, i updated it to get last month users

        // Query for users created since last week
        const ThisMonthProducts = await User.find({
            createdAt: {
                $gte: startOfLastMonth, // From 7 days ago
            },
        });
        res.status(200).json({products,ThisMonthProducts})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById };