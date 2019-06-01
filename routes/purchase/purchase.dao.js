const AppDAO = require('../../common/AppDao')
class PurchaseDao {
    constructor(dao = new AppDAO()) {
        this.tableName = 'purchase';
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
        totalPrice INTEGER)`
        return this.dao.run(sql).then(
            response => {
                console.log('Purchase table is created successfully');
            },
            error => {
                console.log(' ---- Purchase table is not created successfully');

            }
        );
    }

    create(data) {
        const {productId, quantity, price, totalPrice} = data;
        return this.dao.run(
          `INSERT INTO ${this.tableName} (productId, quantity, price, totalPrice) VALUES (?, ?, ?, ?)`,
          [productId, quantity, price, totalPrice])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM ${this.tableName}`)
    }
}

module.exports = PurchaseDao;