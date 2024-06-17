const UserRepository = require('../repositories/UserRepository');


class UserController {
    async store(request, response) {
        const { userid, nome, email, telefone, senha } = request.body;
        const user = await UserRepository.create(userid, nome, email, telefone, senha);
        response.json(user);
    }
    async login(request, response) {
        const { email, senha } = request.body;
        const user = await UserRepository.login(email, senha);

        if (user) {
            response.json(user);
        } else {
            response.status(401).json({ error: 'Credenciais inválidas' });
        }
    }

    async createStore(request, response) {
        const { userid, lojaid, nome_loja, email_loja, telefone_loja, instagram } = request.body;
        const store = await UserRepository.createStore(userid, lojaid, nome_loja, email_loja, telefone_loja, instagram);
        response.json(store);
    }

    async createProduct(request, response) {
        const { prodid, lojaid, descricao_prod, tamanho_prod, tipo_prod, nome_prod, foto_prod, preco_prod } = request.body;
        const product = await UserRepository.createProduct(prodid, lojaid, descricao_prod, tamanho_prod, tipo_prod, nome_prod, foto_prod, preco_prod);
        response.json(product);
    }

    async chartById(request, response) {
        const { userid } = request.params;
        const cart = await UserRepository.chartById(userid);

        response.json(cart);
    }

    async findByProductId(request, response) {
        const { prodid } = request.params;

        const prod = await UserRepository.findByProductId(prodid);

        response.json(prod);
    }

    async findUser(request, response) {
        const { id } = request.params;

        const user = await UserRepository.findUser(id);

        response.json(user);
    }

    async addToCart(request, response) {
        const { prodid, userid } = request.params;
        const cart = await UserRepository.addToCart(prodid, userid);

        response.json(cart);

    }

    async removeFromCart(request, response) {
        const { prodid, userid } = request.params;
        const cart = await UserRepository.removeFromCart(prodid, userid);

        response.json(cart);

    }


}


module.exports = new UserController();