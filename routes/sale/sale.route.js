const express = require("express");
const SaleController = require("./sale.controller");
const controller = new SaleController();

const router = express.Router();

router.get('', (req, res, next) => {
    return controller.getAll(req, res, next);
});

router.post('', (req, res, next) => {
    console.log(' ===  ', req.body);
    return controller.create(req, res, next);
});
// router.put('/:id', CustomerController.editCustomer);
// router.get('', CustomerController.getAllCustomers);
// router.get('/:id', CustomerController.getCustomer);
// router.delete('/:id', CustomerController.deleteCustomer);

// router.updateBalance = (customerId, balance) => {
//     Customer.findById(customerId)
//             .then(customer => {
//                 customer.balance += balance;
//                 customer.save();
//             });
// }

module.exports = router;