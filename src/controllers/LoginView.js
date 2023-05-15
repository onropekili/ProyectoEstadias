const databaseInstance = require("../db");
const bcrypt = require("bcrypt");

const loginView = (req, res) => {
  res.send("This is login view");
};

const Loginlogic = async (req, res) => {
  const { username, password } = req.body;
  let user = await databaseInstance.query(
    "SELECT username, password, tipo_usuario from usuario where username = $1;",
    [username]
  );

  user.decodedPassword = password;

  const whereToRedirectUser = verifyIfUserExists(user);

  res.send(whereToRedirectUser);
};

function verifyIfUserExists(user) {
  const hasNumberOfUserRows = user.rowCount;
  const numberOfRowsUserExists = 1;

  if (hasNumberOfUserRows === numberOfRowsUserExists) {
    return verifyIfIsAdmin(user);
  } else {
    return userDoesntExist();
  }
}

function verifyIfIsAdmin(user) {
  const userType = user.rows[0].tipo_usuario;
  const encodedPassword = user.rows[0].password;
  const decodedPassword = user.decodedPassword;

  console.log(encodedPassword);
  const admin = true;

  let isCorrectPassword = false;

  if (userType == admin) {
    isCorrectPassword = verifyPassword(encodedPassword, decodedPassword);
    console.log("si entra");

    if (isCorrectPassword) {
      return "login View";
    } else {
      return "admin view";
    }
  } else {
    isCorrectPassword = verifyPassword(encodedPassword, decodedPassword);

    return redirectUser(isCorrectPassword);
  }
}

function verifyPassword(encodedPassword, decodedPassword) {
  if (bcrypt.compareSync(encodedPassword, decodedPassword)) {
    return true;
  } else {
    return false;
  }
}

function redirectUser(isCorrectPassword) {
  if (isCorrectPassword) {
    return userExists();
  } else {
    return userDoesntExist();
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
