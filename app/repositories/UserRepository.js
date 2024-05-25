const db = require('../../database');

class UserRepository {
    async create(userid, nome, email, telefone, senha) {
        const [row] = await db.query(`
        INSERT INTO usuario(userid, nome, email, telefone, senha)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *
    `, [userid, nome, email, telefone, senha]);
        return row;
    }
    async login(email, senha) {
        const [row] = await db.query(`
        SELECT * FROM usuario WHERE email = $1 AND senha = $2
       
        `, [email, senha]);
        return row;
    }
    async createStore(userid, lojaid, nome_loja, email_loja, telefone_loja, instagram) {
        const [row] = await db.query(`
        INSERT INTO loja(userid, lojaid, nome_loja, email_loja, telefone_loja, instagram)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *
    `, [userid, lojaid, nome_loja, email_loja, telefone_loja, instagram]);
        return row;
    }

    async createProduct(prodid, lojaid, descricao_prod, tamanho_prod, tipo_prod, nome_prod, foto_prod) {
        const [row] = await db.query(`
        INSERT INTO produto(prodid, lojaid, descricao_prod, tamanho_prod, tipo_prod, nome_prod, foto_prod)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
    `, [prodid, lojaid, descricao_prod, tamanho_prod, tipo_prod, nome_prod, foto_prod]);
        return row;
    }
}


module.exports = new UserRepository();