const SaleDao = require('./sale.dao');
const StockController = require('../stock/stock.controller');
class SaleController {
    // dao;
    constructor() {
        this.dao = new SaleDao();
        this.stockController = new StockController();
    }

    getAll(req, res, next) {
        this.dao.getAll().then(
            response => {
                console.log('get all Sale record -- ', response);
                const responseObj = {data: response}
                res.status(200).json(responseObj);
            }
        );
    }

    async create(req, res, next) {
        console.log(' --- ',req.body);
        const {customerId, productId, quantity, salePrice} = req.body;
        const totalSalePrice = quantity * salePrice;
        const profit = this.getProfit(productId, quantity);
        const SaleData = {customerId, productId, quantity, salePrice, profit};
        const stocks = await this.getStockBasedOnProductId(productId);
        console.log('SaleController.create : stocks ', stocks);
        // this.dao.create(SaleData).then(
        //     (response) => {
        //         console.log('Sale data is inserted successfully', response);
        //         const responseObj = {message: 'Sale record created '}
        //         res.status(200).json(responseObj);
        //     },
        //     error => {
        //         console.log('----- Sale data is not inserted', error);
        //     }
        // );
    }

    
    getStockBasedOnProductId(productId) {
        return this.stockController.getAllBasedOnProductId(productId);
    }

    updateStock() {

    }
    getProfit(stocks, saleData) {
        
    }
}
module.exports = SaleController;