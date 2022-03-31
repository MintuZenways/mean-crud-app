const { route } = require("express/lib/application");

module.exports = (app) => {

var products =  require("../controllers/product.controller");
var router = require('express').Router();

router.post("/", products.create);
router.get("/", products.getProducts);
router.get("/:id", products.getProduct);
router.get("/brands/:brand", products.getProductsByBrand);
router.put("/:id", products.updateProduct);
router.delete("/:id", products.deleteById);

app.use("/products", router);

}