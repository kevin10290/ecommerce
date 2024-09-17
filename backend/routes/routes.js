import express from 'express'
const router = express.Router();

import userController from '../controllers/userController';
import ProductController from '../controllers/productController';
import OrderController from '../controllers/orderController';
import CartController from '../controllers/cartController';
import CategoryController from '../controllers/categoryController';


//rutas para los usuarios 
router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getUserById)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)


//rutas para productos
router.get('/products', ProductController.getProducts)
router.get('/products/:id', ProductController.getProductById)
router.post('/products', ProductController.createProduct)
router.put('/products/:id', ProductController.updateProduct)
router.delete('/products/:id', ProductController.deleteProduct)

//Rutas para ordenes
router.get('/orders', OrderController.getOrders)
router.get('/orders/:id', OrderController.getOrderById)
router.post('/orders', OrderController.createOrder)
router.put('/orders/:id', OrderController.updateOrder)
router.delete('/orders/:id', OrderController.deleteOrder)

//rutas para el carrito
router.get('/carts/:id', CartController.getCartByUserId)
router.post('/carts', CartController.createCart)
router.put('/carts/:id', CartController.updateCart)
router.delete('/carts/:id', CartController.deleteCart)

//rutas para las categorias 
router.get('/categories', CategoryController.getCategories)
router.get('/categories/:id', CategoryController.getCategoryById)
router.post('/categories', CategoryController.createCategory)
router.put('/categories/:id', CategoryController.updateCategory)
router.delete('/categories/:id', CategoryController.deleteCategory)


export default router