import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById, getTotalProducts } from '../Controllers/productController.js';

const router = express.Router();

router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products', getTotalProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

export default router;
