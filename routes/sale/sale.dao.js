const AppDAO = require('../../common/AppDao')
const StockController = require('../stock/stock.controller');

class SaleDao {
    constructor(dao = new AppDAO()) {
        this.tableName = 'sale';
        this.dao = dao
        this.stockController = new StockController();
        this.createTable();
    }

    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS ${this.tableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customerId INTEGER,
        productId INTEGER,
        quantity INTEGER,
        salePrice INTEGER,
        profit INTEGER)`;
        return this.dao.run(sql).then(
            response => {
                console.log('Sale table is created successfully');
            },
            error => {
                console.log(' ---- Sale table is not created successfully');

            }
        );
    }

    async create(data) {
        const {productId, quantity, price, customerId} = data;
        const totalPrice = quantity * price;
        // const {productId} = data;
        const stocks = await this.getStockBasedOnProductId(productId);
        return this.dao.run(
          `INSERT INTO ${this.tableName} (productId, quantity, price, totalPrice) VALUES (?, ?, ?, ?)`,
          [productId, quantity, price, totalPrice])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM ${this.tableName}`)
    }

    
}

module.exports = SaleDao;