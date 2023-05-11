const databaseInstance = require("../db");

const loginView = (req, res) => {
  res.send("This is login view");
};



const Loginlogic = async (req, res) => {
  const { username, password } = req.body;

  const user = await databaseInstance.query(
    "SELECT * from usuario where username = $1 and password = $2",
    [username, password]
  );

  const whereToRedirectUser = verifyIfUserExists(user);

  res.send(whereToRedirectUser);
};



function verifyIfUserExists(user) {
  const hasNumberOfUserRows = user.rowCount;
  const numberOfRowsUserExists = 1;


  if (hasNumberOfUserRows ===  numberOfRowsUserExists) {
    return verifyIfIsAdmin(user);
  } else {
    return userDoesntExist();
  }
}



function verifyIfIsAdmin(user) {
  const userType = user.rows[0].tipo_usuario

  if(userType == true) {
    return 'admin View';
  }else {
    return userExists();
  }
}



function userExists() {
  return "dashboard";
}



function userDoesntExist() {
  return "login";
}



module.exports = {
  loginView,
  Loginlogic,
};
