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
        const {customerId, productId, quantity, price} = req.body;
        const totalSalePrice = quantity * price;
        const saleData = {customerId, productId, quantity, price};
        const stocks = await this.getStockBasedOnProductId(productId);
        console.log('SaleController.create : stocks ', stocks);
        const profit = await this.getProfit(stocks, saleData);
        console.log('SaleController.create : profit ', profit);
        saleData.profit = profit;
        await this.dao.create(saleData).then(
            (response) => {
                console.log('Sale data is inserted successfully', response);
                const responseObj = {message: 'Sale record created '}
                res.status(200).json(responseObj);
            },
            error => {
                console.log('----- Sale data is not inserted', error);
            }
        );
    }

    
    getStockBasedOnProductId(productId) {
        return this.stockController.getAllBasedOnProductId(productId);
    }

    updateStock() {

    }
    /*
{
            "id": 1,
            "productId": 1,
            "quantity": 10,
            "price": 10,
            "totalPrice": 100
        }
    */
    getProfit(stocks, saleData) {
        let profit = 0;
        const saleQuantity = saleData.quantity;
        const salePrice = saleData.price;
        for(const stock of stocks) {
            const stockQuantity = stock.quantity;
            const stockPrice = stock.price;
            const id = stock.id;
            if(stockQuantity >= saleQuantity) {
                const restQuantity = stockQuantity - saleQuantity;
                const currentProfit = saleQuantity * salePrice - saleQuantity * stockPrice;
                profit += currentProfit;
                // update stock table
                this.stockController.updateStockQuantity(id, restQuantity);
                break;
            } else {
                const quantity = saleQuantity - stockQuantity;
                const currentProfit = quantity * salePrice - quantity * stockPrice;
                profit += currentProfit;
                // Delete stock from stock table
                this.stockController.delete(id);
            }
        }
        return profit;
    }
}
module.exports = SaleController;