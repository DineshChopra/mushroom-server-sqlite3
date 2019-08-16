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
        totalPurchasePrice INTEGER,
        salePrice INTEGER,
        totalSalePrice INTEGER,
        profit INTEGER,
        amontReceived INTEGER,
        balance INTEGER,
        saleDate TEXT)`;
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
        console.log('SaleDao : create request , data', data);
        const {customerId, productId, quantity, totalPurchasePrice, salePrice, profit, amontReceived, totalSalePrice, balance } = data;
        const query = `INSERT INTO ${this.tableName} (customerId, productId, quantity, totalPurchasePrice, salePrice, totalSalePrice, profit, amontReceived, balance, saleDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime() )`;
        const values = [customerId, productId, quantity, totalPurchasePrice, salePrice, totalSalePrice, profit, amontReceived, balance];
        return this.dao.run(query, values);
    }

    getAll(queryParams) {
        const condition = this.getCondition(queryParams);
        console.log(' ----  getAll condition ---- ', condition);
        const query = `SELECT a.*, b.name as customerName, c.name as productName FROM ${this.tableName} as a
                        left join customer as b on a.customerId = b.id 
                        left join product as c on a.productId = c.id
                        ${condition} `;
        return this.dao.all(query);
    }
    getAllReport(queryParams) {
        const condition = this.getCondition(queryParams);
        console.log(' ----  getAll condition ---- ', condition);
        const query = `SELECT sum(a.quantity) as quantity,
                              sum(a.totalPurchasePrice) as totalPurchasePrice,
                              sum(a.totalSalePrice) as totalSalePrice,
                              sum(a.profit) as profit, b.name as customerName, c.name as productName FROM ${this.tableName} as a
                        left join customer as b on a.customerId = b.id 
                        left join product as c on a.productId = c.id
                        ${condition} group by a.productId`;
        return this.dao.all(query);
    }

    getCondition(queryParams = {}) {
        const keys = Object.keys(queryParams);
        const condition = [];
        if(keys.length === 0 ) {
            return '';
        }
        if( keys.indexOf('customerId') >= 0 ) {
            condition.push( `customerId = ${queryParams['customerId']}`);
        }
        if( keys.indexOf('productId') >= 0 ) {
            condition.push( `productId = ${queryParams['productId']}`);
        }
        if( keys.indexOf('startDate') >= 0 ) {
            condition.push( `saleDate >= '${queryParams['startDate']}'`);
        }
        if( keys.indexOf('endDate') >= 0 ) {
            condition.push( `saleDate <= '${queryParams['endDate']}'`);
        }

        const conditionString = ' where ' + condition.join(' and ');
        return conditionString;
    }

    
}

module.exports = SaleDao;