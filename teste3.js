var data = require("./fakeData");
var { checkUserPermissions } = require("./teste6");

module.exports = function(req, res) {
  var name = req.query.name;

  var userIndex = data.findIndex(function(user) {
    return user.name === name;
  });

  if (userIndex !== -1) {
    data.splice(userIndex, 1);
    res.send("success");
  } else {
    res.send("User not found");
  }
};

// Middleware de validação de permissões
module.exports = checkUserPermissions;