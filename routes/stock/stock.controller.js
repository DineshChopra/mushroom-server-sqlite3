const StockDao = require('./stock.dao');
class StockController {
    // dao;
    constructor() {
        this.dao = new StockDao();
    }

    getAll(req, res, next, queryParam) {
        this.dao.getAll().then(
            response => {
                console.log('get all stock record -- ', response);
                const responseObj = {data: response}
                res.status(200).json(responseObj);
            }
        );
        
    }

    create(req, res, next) {
        console.log(' --- ',req.body);
        const {productId, quantity, price} = req.body;
        const totalPrice = quantity * price;
        const stockData = {productId, quantity, price, totalPrice};
        this.dao.create(stockData).then(
            (response) => {
                console.log('stock data is inserted successfully', response);
                const responseObj = {message: 'stock record created '}
                res.status(200).json(responseObj);
            },
            error => {
                console.log('----- stock data is not inserted', error);
            }
        );

    }

    getAllBasedOnProductId(productId) {
        return this.dao.getAllBasedOnProductId(productId).then(
            (response) => {
                const responseObj = {data: response}
                console.log('StockController.getAllBasedOnProductId : ', responseObj);
                return responseObj;
            },
            error => {
                console.log('----- stock data is not reccieved', error);
            }
        );
    }
}
module.exports = StockController;