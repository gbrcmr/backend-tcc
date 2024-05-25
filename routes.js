const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const StoreController = require('./app/controllers/StoreController');

const router = Router();

router.post('/cadaster', UserController.store);
router.post('/login', UserController.login);
router.post('/store/cadaster', UserController.createStore);
router.post('/store/add', UserController.createProduct);
router.get('/store/search', StoreController.index);
router.get('/store/products', StoreController.getProducts);
router.get('/store/:id', StoreController.show);

module.exports = router;
