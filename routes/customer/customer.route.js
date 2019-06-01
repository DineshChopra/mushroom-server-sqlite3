const express = require("express");
const CustomerController = require("./customer.controller");
const controller = new CustomerController();

const router = express.Router();

router.get('', (req, res, next) => {
    return controller.getAll(req, res, next);
});

router.post('', (req, res, next) => {
    console.log(' ===  ', req.body);
    return controller.create(req, res, next);
});

module.exports = router;