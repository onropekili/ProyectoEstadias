const { Router } = require("express");
const databaseInstance = require("../db");



const LoginController = require("../controllers/LoginView");
const DashBoardController = require("../controllers/DashBoardController");
const ShopController = require('../controllers/ShopController');

const router = Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());



//ENDPOINTS
router.get("/", LoginController.loginView);

router.post("/login", LoginController.Loginlogic);

router.get('/dashboard', DashBoardController.getShops);

router.get("/shop/:id", ShopController.getCommerceOwnerInfo);

module.exports = router;
