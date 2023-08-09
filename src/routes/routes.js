const { Router } = require("express");
const databaseInstance = require("../db");



const LoginController = require("../controllers/LoginView");
const DashBoardController = require("../controllers/DashBoardController");
const ShopController = require('../controllers/ShopController');
const costumerController = require('../controllers/costumerController');
const dashboardController = require('../controllers/userController/dashboardController')
const CostumerController = require('../controllers/userController/Costumer');
const CreateCustomerController = require('../controllers/userController/CreateCustomerController')
const CreatePayOrder = require('../controllers/userController/CreatePayOrder');
const getConceptosPago = require('../controllers/userController/getConceptosPago');
const verTodoInfo = require('../controllers/userController/VerTodoInfo');
const getTerceraEdadViewData = require('../controllers/userController/getTerceraEdadViewData')
const getInfoOrdenPago = require('../controllers/userController/getInfoOrdenPago')
const refrendarComercio = require('../controllers/userController/refrendarComercio')
const getCedulaData = require ('../controllers/userController/getCedulaData')
const getDashboardInformation = require('../controllers/admin/getDashboardInfo');
const getIncome = require('../controllers/admin/getIncome');
const router = Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());



//ENDPOINTS
router.get("/", LoginController.loginView);

router.post("/login", LoginController.Loginlogic);

router.get("/shop/:id", ShopController.getCommerceOwnerInfo);

router.post("/create_new_costumer", costumerController.createNewCostumer);

router.get('/dashboard/find_by_name_or_id/', dashboardController.findByNameOrId);

router.get('/dashboard', dashboardController.getDashboardInformation);

router.put("/edit/costumer", CostumerController.editCostumer);

router.delete("/delete/costumer/comerciante", CostumerController.deleteCostumer);

router.delete("/delete/costumer/comercio", CostumerController.deleteComercio);

router.post("/createCostumer", CreateCustomerController.createNewCostumer );

router.post('/CreatePayOrder', CreatePayOrder.CrearNuevaOrdenDePago);

router.get('/conceptos', getConceptosPago.getConceptosPago)

router.get('/getVerTodoInfo', verTodoInfo.getComercianteAndcomercioInfo);

router.get('/getTerceraEdadViewData', getTerceraEdadViewData.getTerceraEdadViewData );

router.get('/getInfoOrdenPago', getInfoOrdenPago.getInfoOrdenPago);

router.get('/refrendarComercio', refrendarComercio.refrendar)

router.get('/getCedulaData', getCedulaData.getCedulaData );

router.get('/admin/getDashboardInformation', getDashboardInformation.getDashoardinformation);

router.get('/admin/getIncome', getIncome.getIncome);

module.exports = router;