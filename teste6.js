var userPermissions = {
    canDeleteUsers: true,
    canUpdateUsers: false
  };
  
  var checkUserPermissions = function(req, res, next) {
    if (req.userPermissions && (req.userPermissions.canDeleteUsers || req.userPermissions.canUpdateUsers)) {
      next();
    } else {
      res.status(403).send("Acesso negado");
    }
  };
  
  module.exports = {
    userPermissions: userPermissions,
    checkUserPermissions: checkUserPermissions
  };