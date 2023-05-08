const databaseInstance = require("../db");

const loginView = (req, res) => {
  res.send("This is login view");
};

// const Loginlogic = (req, res) => {
//   // username = req.body.username;
//   // password = req.body.password;

//   console.log(req.body);

//   // const userAndPassword = databaseInstance.query(
//   //   "SELECT username, password" +
//   //     "FROM usuario WHERE username ='" +
//   //     username +
//   //     "' AND password ='" +
//   //     password +
//   //     "';"
//   // );

//   res.send(req.body);
// };

module.exports = {
  loginView,
};
