var data = require("./fakeData");

const getUser = (req, res) => {
  const { name } = req.query;

  const user = data.find((item) => item.name === name);

  if (user) {
    res.send(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};

const getUsers = (req, res) => {
    
  res.send(data);
  
};

module.exports = {
  getUser,
  getUsers
};