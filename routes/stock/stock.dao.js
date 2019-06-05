const AppDAO = require('../../common/AppDao')
class StockDao {
    constructor(dao = new AppDAO()) {
        this.tableName = 'stock';
        this.dao = dao
        this.createTable();
    }

    createTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        productId INTEGER,
        quantity INTEGER,
        price INTEGER,
        totalPrice INTEGER,
        purchaseDate TEXT)`
        return this.dao.run(sql).then(
            response => {
                console.log('Stock table is created successfully');
            },
            error => {
                console.log(' ==== Stock table is not created successfully');

            }
        );
    }

    create(data) {
        const {productId, quantity, price, totalPrice} = data;
        return this.dao.run(
          `INSERT INTO ${this.tableName} (productId, quantity, price, totalPrice, purchaseDate) VALUES (?, ?, ?, ?, datetime())`,
          [productId, quantity, price, totalPrice])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM ${this.tableName}`)
    }
    
    getAllBasedOnProductId(productId) {
        return this.dao.all(`SELECT * FROM ${this.tableName} where productId = ?`, [productId])
    }
    updateStockQuantity(id, quantity) {
        const query = `UPDATE ${this.tableName}
                        SET quantity = ?
                        WHERE id=?`;
        return this.dao.run(query, [quantity, id]);
    }
    delete(id) {
        const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
        return this.dao.run(query, [id]);
    }


}

module.exports = StockDao;