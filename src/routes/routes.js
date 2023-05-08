const { Router } = require("express");
const databaseInstance = require("../db");

const controller = require("../controllers/LoginView");

const router = Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());




router.get("/", controller.loginView);


router.post("/login", controller.Loginlogic);
module.exports = router;
