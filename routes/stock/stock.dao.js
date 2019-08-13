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
        const {productId, quantity, price} = data;
        return this.dao.run(
          `INSERT INTO ${this.tableName} (productId, quantity, price, purchaseDate) VALUES (?, ?, ?, datetime())`,
          [productId, quantity, price])
    }

    getAll() {
        return this.dao.all(`SELECT a.*, sum(a.quantity) as quantity, b.name as productName FROM ${this.tableName} as a left join product as b on a.productId = b.id group by a.productId`)
    }
    
    getAllBasedOnProductId(productId) {
        const query = `SELECT a.*, b.name as productName FROM ${this.tableName} as a 
                    left join product as b on a.productId = b.id 
                    where productId = ?`;
        return this.dao.all(query, [productId])
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