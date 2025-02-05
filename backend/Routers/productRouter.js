import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById, getTotalProducts } from '../Controllers/productController.js';

const router = express.Router();

router.post('/createProduct', createProduct);
router.get('/', getAllProducts);
router.get('/getTotalproducts', getTotalProducts);
router.get('/products/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

export default router;
