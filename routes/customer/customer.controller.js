const CustomerDao = require('./customer.dao');
class CustomerController {
    // dao;
    constructor() {
        this.dao = new CustomerDao();
    }

    getAll(req, res, next) {
        this.dao.getAll().then(
            response => {
                console.log('get all Customer record -- ', response);
                const responseObj = {data: response}
                res.status(200).json(responseObj);
            }
        );
        
    }

    create(req, res, next) {
        console.log(' --- ',req.body);
        const {name, mobileNo, address} = req.body;
        const data = {name, mobileNo, address};
        this.dao.create(data).then(
            (response) => {
                console.log('Customer data is inserted successfully', response);
                const responseObj = {message: 'Customer record created '}
                res.status(200).json(responseObj);
            },
            error => {
                console.log('----- Customer data is not inserted', error);
            }
        );
    }
}
module.exports = CustomerController;