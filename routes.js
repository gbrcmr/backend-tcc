const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const StoreController = require('./app/controllers/StoreController');

const router = Router();

//GET
router.get('/store/search', StoreController.index);
router.get('/store/products', StoreController.getProducts);
router.get('/store/:id', StoreController.show);
router.get('/store/mystore/:userid', StoreController.findMyStore);
router.get('/cart/:userid', UserController.chartById);
router.get('/cart/product/:prodid', UserController.findByProductId);

//POST
router.post('/cadaster', UserController.store);
router.post('/login', UserController.login);
router.post('/store/cadaster', UserController.createStore);
router.post('/store/add', UserController.createProduct);

//PUT
router.put('/cart/add/:userid/:prodid', UserController.addToCart);

//DELETE
router.delete('/cart/delete/:userid/:prodid', UserController.removeFromCart);

module.exports = router;
