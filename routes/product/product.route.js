const express = require("express");
const ProductController = require("./product.controller");
const controller = new ProductController();

const router = express.Router();

router.get('', (req, res, next) => {
    return controller.getAll(req, res, next);
});

router.post('', (req, res, next) => {
    console.log(' ===  ', req.body);
    return controller.create(req, res, next);
});

module.exports = router;