const db = require('../../database');

class StoreRepository {
    async findAll() {
        const rows = await db.query('SELECT * FROM loja ORDER BY nome_loja');
        return rows;
    }

    async findAllProducts() {
        const rows = await db.query('SELECT * FROM produto ORDER BY nome_prod');
        return rows;
    }

    async findById(id) {
        const [row] = await db.query('SELECT * FROM produto WHERE lojaid = $1', [id]);
        return row;
    }

}



module.exports = new StoreRepository();