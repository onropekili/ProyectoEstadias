const databaseInstance = require("../db");
const bcrypt = require("bcrypt");

const loginView = (req, res) => {
  res.send("This is login view");
};

const Loginlogic = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    let user = await databaseInstance.query(
      "SELECT username, password, tipo_usuario from usuario where username = $1 and password = $2;",
      [username, password]
    );

    const userPath = returnPathIfUserExist(user);

    const CommerceInfo = await axios.get("http://localhost:4000/dashboard")

    console.log(userPath);

    res.status(200).json({ user: user.rows[0], commerciante : CommerceInfo.data });
  } catch (error) {
    res.status(204).json({ Error: error });
  }
};

function returnPathIfUserExist(user) {
  const userExists = evalIfUserExists(user);
  if (userExists) {
    return user.rows[0].tipo_usuario;
  } else {
    throw new Error("User does not exist");
  }
}

function evalIfUserExists(user) {
  const notExist = 0;
  if (user.rowCount > notExist) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  loginView,
  Loginlogic,
};
