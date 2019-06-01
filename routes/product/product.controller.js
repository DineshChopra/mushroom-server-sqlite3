const ProductDao = require('./product.dao');
class ProductController {
    // dao;
    constructor() {
        this.dao = new ProductDao();
    }

    getAll(req, res, next) {
        this.dao.getAll().then(
            response => {
                console.log('get all Product record -- ', response);
                const responseObj = {data: response}
                res.status(200).json(responseObj);
            }
        );
        
    }

    create(req, res, next) {
        console.log(' --- ',req.body);
        const {name} = req.body;
        const productData = {name};
        this.dao.create(productData).then(
            (response) => {
                console.log('Product data is inserted successfully', response);
                const responseObj = {message: 'Product record created '}
                res.status(200).json(responseObj);
            },
            error => {
                console.log('----- Product data is not inserted', error);
            }
        );
    }
}
module.exports = ProductController;