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
        price INTEGER,
        totalSalePrice INTEGER,
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

    create(data) {
        const {customerId, productId, quantity, price, profit} = data;
        const totalSalePrice = quantity * price;
        // const {productId} = data;
        const stocks = this.getStockBasedOnProductId(productId);
        const query = `INSERT INTO ${this.tableName} (customerId, productId, quantity, price, totalSalePrice, profit) VALUES (?, ?, ?, ?)`;
        const values = [customerId, productId, quantity, price, totalSalePrice, profit];
        return this.dao.run(query, values);
    }

    getAll() {
        return this.dao.all(`SELECT * FROM ${this.tableName}`)
    }

    
}

module.exports = SaleDao;