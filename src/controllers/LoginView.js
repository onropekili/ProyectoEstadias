const databaseInstance = require("../db");
const bcrypt = require("bcrypt");

const loginView = (req, res) => {
  res.send("This is login view");
};

const Loginlogic = async (req, res) => {
  const { username, password } = req.body;
  let user = await databaseInstance.query(
    "SELECT username, password, tipo_usuario from usuario where username = $1 and password = $2;",
    [username, password]
  );

  const userPath = whereToRedirectUser(user)

  res.send(user);
};

function whereToRedirectUser(user) {

  const userExists = evalIfUserExists(user);
  if(userExists) {
    
    return 

  }
  

}

function evalIfUserExists(user) {
  const userExist = 1;
  if(user.rowCount >= userExists){
    return true;
  }else {
    return false;
  }
}


module.exports = {
  loginView,
  Loginlogic,
};
