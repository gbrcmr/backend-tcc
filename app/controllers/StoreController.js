const StoreRepository = require('../repositories/StoreRepository');


class StoreController {
    async index(request, response) {
        const stores = await StoreRepository.findAll();

        response.json(stores);
    }

    async getProducts(request, response) {
        const products = await StoreRepository.findAllProducts();

        response.json(products);
    }

    async show(request, response) {
        const { id } = request.params;

        const store = await StoreRepository.findById(id);

        // if (!categorie) {
        //     // 404: Not Found
        //     return response.status(404).json({ error: 'Category not found' });
        // }

        response.json(store);
    }
}


module.exports = new StoreController();