const TestDao = require('./test.dao');

class TestController {
    // dao;
    constructor() {
        this.dao = new TestDao();
    }

    getAll(req, res, next) {
        this.dao.getAll().then(
            response => {
                console.log('get all Test record -- ', response);
                const responseObj = {data: response}
                res.status(200).json(responseObj);
            }
        );
        
    }

    create(req, res, next) {
        console.log(' --- ',req.body);
        const {name} = req.body;
        const testData = {name};
        this.dao.create(testData).then(
            (response) => {
                console.log('Test data is inserted successfully', response);
                const responseObj = {message: 'Test record created '}
                res.status(200).json(responseObj);
            },
            error => {
                console.log('----- Test data is not inserted', error);
            }
        );
    }
}
module.exports = TestController;