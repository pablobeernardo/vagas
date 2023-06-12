var data = require("./fakeData");

var countMap = {};

const getUser = (req, res) => {
  const { name } = req.query;

  const user = data.find((item) => item.name === name);

  if (user) {
    countMap[name] = countMap[name] ? countMap[name] + 1 : 1;
    res.send(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};

const getReadCount = (req, res) => {
  const { name } = req.query;
  const count = countMap[name] || 0;
  res.send(`Usuário ${name} foi lido ${count} vezes.`);
};

module.exports = {
  getUser,
  getReadCount
};