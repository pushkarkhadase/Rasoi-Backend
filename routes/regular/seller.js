//importing the express 
const express = require('express');

//importing the router
const router = express.Router();

//importing the seller general controllers
const sellerRegController = require('../../controller/regular/seller');

// GET /seller/getSellerConfig
router.get('/getSellerConfig', sellerRegController.getSellerConfig);

// POST /seller/addDishes
router.post('/addDishes', sellerRegController.addDishesMenu);

// PUT /seller/fillSellerDetails
router.put('/fillSellerDetails', sellerRegController.fillSellerDetails);

// GET /seller/sellerDashboard
router.get("/sellerDashboard", sellerRegController.getSellerDashbord);

//PUT /seller/editSellerInfo
router.put("/editSellerInfo", sellerRegController.editSellerInfo);

//PUT /seller/editDish
router.put("/editDish", sellerRegController.editSellerDish);

//DELETE /seller/deleteDish
router.delete("/deleteDish", sellerRegController.deleteSellerDish);

//exporting the router
module.exports = router;