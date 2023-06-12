var data = require("./fakeData");
var { checkUserPermissions } = require("./teste6");

module.exports = function(req, res) {
  var id = req.query.id;

  var user = data.find(function(user) {
    return user.id == id;
  });

  if (user) {
    user.name = req.body.name;
    user.job = req.body.job;
    res.send(user);
  } else {
    res.send("User not found");
  }
};

// Middleware de validação de permissões
module.exports = checkUserPermissions;