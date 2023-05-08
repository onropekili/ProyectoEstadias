const databaseInstance = require("../db");



const loginView = (req, res) => {
  res.send("This is login view");
};

 const Loginlogic = async (req, res) => {
  const {username, password} = req.body;

  console.log(req.body);

  const user = await databaseInstance.query(
    "SELECT * from usuario where username = $1 and password = $2", [username, password]
  );

 const whereToRedirectUser = verifyIfUserExists(user);

 res.send(whereToRedirectUser);
  
};


function verifyIfUserExists(user) {
  const hasNumberOfUserRows = user.rows.length;
  const numberOfRowsUserExists = 1;

  if(hasNumberOfUserRows === numberOfRowsUserExists){
    return userExists();
  }else{
    return userDoesntExist();
  }
}

function userExists(){
  return 'This user Exists';
}

function userDoesntExist(){
  return 'This user doesnt exist';
}

module.exports = {
  loginView,
  Loginlogic
};
