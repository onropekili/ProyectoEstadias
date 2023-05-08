const { Router } = require("express");
const databaseInstance = require("../db");

const controller = require("../controllers/LoginView");

const router = Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());




router.get("/", controller.loginView);


router.post("/login", async (req, res) => {
  const {username, password} = req.body;

  console.log(req.body);

  const userAndPassword = await databaseInstance.query(
    "SELECT username from usuario where username = $1 and password = $2", [username, password]
  );

  res.send(userAndPassword.rows[0].username);
});
module.exports = router;
