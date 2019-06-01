const PurchaseDao = require('./purchase.dao');
const StockController = require("../stock/stock.controller");

class PurchaseController {
    // dao;
    constructor() {
        this.dao = new PurchaseDao();
        this.stockController = new StockController();
    }

    getAll(req, res, next) {
        this.dao.getAll().then(
            response => {
                console.log('get all purchase record -- ', response);
                const responseObj = {data: response}
                res.status(200).json(responseObj);
            }
        );
        
    }

    create(req, res, next) {
        console.log(' --- ',req.body);
        const {productId, quantity, price} = req.body;
        const totalPrice = quantity * price;
        const purchaseData = {productId, quantity, price, totalPrice};
        this.createStock(purchaseData);
        this.dao.create(purchaseData).then(
            (response) => {
                console.log('Purchase data is inserted successfully', response);
                const responseObj = {message: 'purchase record created '}
                res.status(200).json(responseObj);
            },
            error => {
                console.log('----- purchase data is not inserted', error);
            }
        );
    }
    createStock(data) {
        this.stockController.create(data).then(
            (response) => console.log('Stock created successfully'),
            (error) => console.log('=== Stock creation error', error)
        );
    }
}
module.exports = PurchaseController;